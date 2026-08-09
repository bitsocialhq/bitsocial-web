# 技能与工具

在设置或调整技能与外部工具时使用本手册。

## 推荐技能

### Context7（库文档）

用于获取各种库的最新文档。

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

使用 `playwright-cli` 做浏览器自动化（导航、交互、截图、测试、内容提取）。

用 `playwright-cli` 做仓库的 UI 验证时，不要只跑一个引擎。要在三大主流浏览器引擎中都运行相关流程：

- `chrome` 对应 Blink
- `firefox` 对应 Gecko
- `webkit` 覆盖 Safari/WebKit

为每个引擎使用独立命名的会话，让证据互不混淆，但这些会话必须依次串行运行。全机器同一时刻只允许一个 Playwright 浏览器会话处于活动状态，因为争用的资源是机器的内存和 CPU，而不是仓库本身。通过 `./scripts/pw-session.sh` 开启和关闭会话；它持有那把共享锁，让并发的代理推迟并重试浏览器工作，而不是把机器压满。如果有意跳过某个引擎，请记录原因。

迭代过程中只用 Chrome/Blink。等改动准备好做最终验证时，再完整跑一遍 Chrome、Firefox 和 WebKit 的序列。通过调整窗口尺寸，在同一个引擎会话里复用桌面端和移动端流程，用 finally 式的清理关闭它，然后再打开下一个引擎。

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

当槽位被占用时，`open` 会以 75 退出；此时请用 `./scripts/pw-session.sh open --wait[=SECONDS] ...`（默认 300 秒）阻塞等待，而不是手动重试。被中断的流程遗留下来的锁会被自动回收，因为 `open` 会释放任何其记录的浏览器已不再运行的槽位。用 `./scripts/pw-session.sh status` 查看当前持有者；只有在 `status` 无法确认浏览器状态这种罕见情况下，才把 `release <session>` 当作最后手段。

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

技能安装位置：

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React 最佳实践

用于更深入的 React/Next 性能指导。

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### 发现技能

从开放生态中发现并安装技能。

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP 策略依据

本项目应避免使用 GitHub MCP 和浏览器 MCP 服务器，因为它们会带来可观的工具 schema 与上下文开销。

- GitHub 操作：使用 `gh` CLI。
- 浏览器操作：使用 `playwright-cli`。

## 模型可用性

- `composer-2` 仅在 Cursor 中可用。不要在 `.claude/` 或 `.codex/` 下配置它。
- Codex 并未记录 `latest` 这个模型别名。`.codex/**/agents/*.toml` 下提交的自定义代理 TOML 同时省略 `model` 和 `model_reasoning_effort`，以便继承当前父会话的设置。
