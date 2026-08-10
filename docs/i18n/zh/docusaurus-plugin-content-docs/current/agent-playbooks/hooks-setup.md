# 代理钩子设置

如果你的 AI 编码助手支持生命周期钩子，请为本仓库配置以下钩子。

## 推荐钩子

| 钩子            | 命令                                          | 用途                                                                                                                                      |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | 在 AI 编辑文件后自动格式化                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | 当 `package.json` 发生变化时运行 `corepack yarn install`                                                                                  |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | 当某次 diff 在 `about/src/` 中新增 `useEffect`/memo 原语时，提醒代理用 React 审查技能重新斟酌                                             |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | 清理过期引用，并删除已经并入主线的临时任务分支                                                                                            |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | 在最终验证关卡之前，重新扫描当前 diff 中 `about/src/` 里新增的 React 副作用/memo                                                          |
| `stop`          | `scripts/agent-hooks/verify.sh`               | 硬性把关定向构建验证、lint、类型检查和格式检查；让 `yarn npm audit` 仅作参考，并在依赖或导入发生变化时单独运行 `yarn knip` 作为参考性审计 |

## 为什么

- 格式保持一致
- 锁文件保持同步
- about 站点中新增的 `useEffect`/memo 会在代理收尾前得到一次明确的复查
- 及早发现与工作区相关的构建、lint 和类型问题，而不必在每个任务上都强制跑完整的多语言文档构建
- 通过 `yarn npm audit` 获得安全可见性
- 依赖和导入的漂移可以用 `yarn knip` 检查，而不必把它变成一个嘈杂的全局 stop 钩子
- Codex 和 Cursor 共用同一份钩子实现
- 临时任务分支与仓库的工作树流程保持一致

## 示例钩子脚本

### 格式化钩子

```bash
#!/bin/bash
# Auto-format JS/TS files after AI edits
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

case "$file_path" in
  *.js|*.jsx|*.ts|*.tsx|*.mjs|*.cjs|*.json|*.css) corepack yarn exec oxfmt "$file_path" 2>/dev/null ;;
esac
exit 0
```

### 验证钩子

```bash
#!/bin/bash
# Run targeted build verification, lint, typecheck, format check, and security audit when agent finishes

cat > /dev/null  # consume stdin
status=0
corepack yarn build:verify || status=1
corepack yarn lint || status=1
corepack yarn typecheck || status=1
corepack yarn format:check || status=1
echo "=== yarn npm audit ===" && (corepack yarn npm audit || true)  # informational
exit $status
```

默认情况下，只要有必需的检查失败，`scripts/agent-hooks/verify.sh` 就会以非零状态退出。只有当你确实需要从一棵有问题的代码树中获取信号而不想阻塞钩子时，才设置 `AGENT_VERIFY_MODE=advisory`。除非仓库明确决定要在参考性的导入和依赖问题上失败，否则不要把 `yarn knip` 放进硬性关卡。

生命周期钩子不能取代人工的浏览器验证。对于 UI 或视觉改动，仍要在 `chrome`、`firefox` 和 `webkit` 上运行 `playwright-cli` 检查；当响应式或触控行为发生变化时，还要在每个引擎里跑一遍移动端视口流程。

### Yarn 安装钩子

```bash
#!/bin/bash
# Run corepack yarn install when package.json is changed
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

if [ -z "$file_path" ]; then
  exit 0
fi

if [ "$file_path" = "package.json" ]; then
  cd "$(dirname "$0")/../.." || exit 0
  echo "package.json changed - running corepack yarn install to update yarn.lock..."
  corepack yarn install
fi

exit 0
```

请按照你所用代理工具的文档（`hooks.json` 或等价的配置文件等）来接线钩子。

在本仓库中，`.codex/hooks/*.sh` 和 `.cursor/hooks/*.sh` 应保持为薄封装，委托给 `scripts/agent-hooks/` 下的共享实现。
