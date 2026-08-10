# スキルとツール

スキルや外部ツールをセットアップ・調整するときは、このプレイブックを使ってください。

## 推奨スキル

### Context7 (ライブラリのドキュメント)

ライブラリの最新ドキュメントを参照するために使います。

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

ブラウザ自動化 (ページ遷移、操作、スクリーンショット、テスト、情報の抽出) には `playwright-cli` を使ってください。

リポジトリの UI 検証で `playwright-cli` を使うときは、1 つのエンジンで止めないでください。対象のフローを主要な 3 つのブラウザエンジンすべてで実行します。

- Blink 系は `chrome`
- Gecko 系は `firefox`
- Safari/WebKit のカバレッジには `webkit`

証跡が混ざらないようにエンジンごとに名前付きセッションを分けますが、それらのセッションは順番に実行してください。同時にアクティブにできる Playwright のブラウザセッションはマシン全体で 1 つだけです。競合するリソースがリポジトリではなくマシンの RAM と CPU だからです。セッションの開始と終了は `./scripts/pw-session.sh` 経由で行ってください。このスクリプトが共有ロックを保持するため、同時に動いている他のエージェントはマシンを飽和させる代わりにブラウザ作業を後回しにして再試行します。あるエンジンを意図的にスキップする場合は、その理由を記録してください。

反復作業中は Chrome/Blink だけを使います。変更が最終検証の段階に入ったら、Chrome、Firefox、WebKit の順に一通り実行してください。各エンジンのセッションはサイズ変更してデスクトップとモバイルの両方で再利用し、finally 相当のクリーンアップで確実に閉じてから、次のエンジンを開いてください。

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

枠が使用中のとき、`open` は終了コード 75 を返します。手動でリトライする代わりに `./scripts/pw-session.sh open --wait[=SECONDS] ...` (既定 300 秒) でブロックして待ってください。中断されたワークフローが残したロックは自動的に回収されます。`open` は、記録されたブラウザがすでに動いていない枠を解放するためです。ロックの保持者は `./scripts/pw-session.sh status` で確認できます。`release <session>` は、`status` でブラウザの状態を確認できないまれなケースのための最終手段です。

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

スキルのインストール先:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

React/Next のパフォーマンスについて、より踏み込んだ指針を得るために使います。

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

公開されているエコシステムからスキルを探してインストールします。

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP ポリシーの根拠

このプロジェクトでは、GitHub MCP とブラウザ MCP サーバーは避けてください。ツールスキーマとコンテキストのオーバーヘッドがかなり大きいためです。

- GitHub の操作には `gh` CLI を使う。
- ブラウザの操作には `playwright-cli` を使う。

## モデルの利用可否

- `composer-2` は Cursor でのみ利用できます。`.claude/` や `.codex/` の下で設定しないでください。
- Codex には `latest` というモデルエイリアスのドキュメントがありません。`.codex/**/agents/*.toml` にコミットされているカスタムエージェントの TOML は `model` と `model_reasoning_effort` の両方を省略し、親セッションの現在の設定を継承します。
