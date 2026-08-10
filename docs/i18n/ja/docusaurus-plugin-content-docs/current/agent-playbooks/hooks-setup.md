# エージェントフックのセットアップ

利用している AI コーディングアシスタントがライフサイクルフックに対応している場合は、このリポジトリ向けに以下を設定してください。

## 推奨フック

| フック          | コマンド                                      | 目的                                                                                                                                                                                                               |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI による編集後にファイルを自動フォーマットする                                                                                                                                                                    |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` が変更されたときに `corepack yarn install` を実行する                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | 差分が `about/src/` に `useEffect` やメモ化プリミティブを追加したときに、React レビュー用スキルで再検討するようエージェントに促す                                                                                  |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | 古くなった参照を整理し、統合済みの一時タスクブランチを削除する                                                                                                                                                     |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | 最終検証ゲートの前に、現在の差分へ新たに追加された `about/src/` の React エフェクトやメモ化を再スキャンする                                                                                                        |
| `stop`          | `scripts/agent-hooks/verify.sh`               | 対象を絞ったビルド検証、lint、型チェック、フォーマットチェックをハードゲートにする。`yarn npm audit` は情報提供にとどめ、依存関係やインポートが変わったときは `yarn knip` をアドバイザリー監査として個別に実行する |

## 理由

- フォーマットが一貫する
- ロックファイルが同期された状態に保たれる
- about サイトへ新たに `useEffect` やメモ化を追加した場合、エージェントが作業を終える前に明示的な再確認が入る
- タスクのたびに多言語ドキュメントのフルビルドを強制することなく、ワークスペースに関係するビルド・lint・型の問題を早期に検出できる
- `yarn npm audit` によってセキュリティ面を可視化できる
- 依存関係やインポートのずれを、ノイズの多いグローバルな停止フックにすることなく `yarn knip` で確認できる
- Codex と Cursor の両方で 1 つの共有フック実装を使える
- 一時タスクブランチがリポジトリのワークツリーワークフローと揃った状態を保てる

## フックスクリプトの例

### フォーマットフック

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

### 検証フック

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

既定では、必須チェックが失敗すると `scripts/agent-hooks/verify.sh` はゼロ以外の終了コードを返します。`AGENT_VERIFY_MODE=advisory` は、フックをブロックせずに壊れたツリーからシグナルを得たいと意図的に判断した場合にのみ設定してください。リポジトリがアドバイザリーなインポート・依存関係の問題でも失敗させると明示的に決めない限り、`yarn knip` はハードゲートに含めないでください。

ライフサイクルフックは手動のブラウザ検証の代わりにはなりません。UI や見た目に関わる変更では、引き続き `chrome`、`firefox`、`webkit` の各エンジンで `playwright-cli` によるチェックを実行し、レスポンシブ性やタッチ操作が変わった場合は各エンジンでモバイルビューポートのフローも確認してください。

### Yarn インストールフック

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

フックの配線は、使用しているエージェントツールのドキュメント (`hooks.json` やそれに相当するものなど) に従って設定してください。

このリポジトリでは、`.codex/hooks/*.sh` と `.cursor/hooks/*.sh` は `scripts/agent-hooks/` 配下の共有実装に処理を委譲する薄いラッパーのままにしてください。
