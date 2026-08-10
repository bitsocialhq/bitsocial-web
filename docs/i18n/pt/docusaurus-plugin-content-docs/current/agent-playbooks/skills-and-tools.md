# Skills e ferramentas

Use este playbook ao configurar ou ajustar skills e ferramentas externas.

## Skills recomendadas

### Context7 (documentação de bibliotecas)

Para documentação atualizada de bibliotecas.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Use o `playwright-cli` para automação de navegador (navegação, interação, capturas de tela, testes, extração).

Ao usar o `playwright-cli` para verificar a UI do repositório, não pare depois de uma engine só. Rode o fluxo relevante nas três principais engines de navegador:

- `chrome` para o Blink
- `firefox` para o Gecko
- `webkit` para cobertura de Safari/WebKit

Use sessões nomeadas separadas por engine para manter as evidências isoladas, mas rode essas sessões em sequência. Apenas uma sessão de navegador do Playwright pode estar ativa por vez em toda a máquina, porque o recurso disputado é a RAM e a CPU da máquina, não o repositório. Abra e feche sessões através do `./scripts/pw-session.sh`; ele segura esse lock compartilhado para que agentes concorrentes adiem e retomem o trabalho de navegador depois, em vez de saturar a máquina. Se uma engine for pulada de propósito, registre o motivo.

Durante a iteração, use apenas Chrome/Blink. Rode a sequência completa de Chrome, Firefox e WebKit quando a mudança estiver pronta para a verificação final. Reaproveite a sessão de cada engine para desktop e mobile redimensionando-a, feche-a em uma limpeza no estilo finally e só então abra a próxima engine.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Quando o slot estiver ocupado, o `open` sai com 75; bloqueie em `./scripts/pw-session.sh open --wait[=SECONDS] ...` (300s por padrão) em vez de tentar de novo na mão. Um lock deixado para trás por um fluxo interrompido é recuperado automaticamente, porque o `open` libera qualquer slot cujo navegador registrado não esteja mais em execução. Inspecione quem detém o lock com `./scripts/pw-session.sh status`; o `release <session>` é um último recurso para o caso raro em que o `status` não consegue confirmar o estado do navegador.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Locais de instalação das skills:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Para orientação mais aprofundada sobre performance de React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Descubra e instale skills do ecossistema aberto.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Motivação da política de MCP

Evite o GitHub MCP e servidores MCP de navegador neste projeto, porque eles acrescentam uma sobrecarga significativa de schema de ferramentas e de contexto.

- Operações no GitHub: use o `gh` CLI.
- Operações de navegador: use o `playwright-cli`.

## Disponibilidade de modelos

- O `composer-2` está disponível apenas no Cursor. Não o configure em `.claude/` nem em `.codex/`.
- O Codex não documenta um alias de modelo `latest`. Os TOMLs de agentes customizados versionados em `.codex/**/agents/*.toml` omitem tanto `model` quanto `model_reasoning_effort`, de modo que herdam as configurações da sessão pai atual.
