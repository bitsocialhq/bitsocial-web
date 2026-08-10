# Configuração de hooks de agente

Se o seu assistente de codificação com IA suportar hooks de ciclo de vida, configure estes para este repositório.

## Hooks recomendados

| Hook            | Comando                                       | Finalidade                                                                                                                                                                                                                                      |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formatar arquivos automaticamente após edições da IA                                                                                                                                                                                            |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Rodar `corepack yarn install` quando o `package.json` mudar                                                                                                                                                                                     |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Quando um diff adiciona primitivas `useEffect`/memo em `about/src/`, lembrar o agente de reconsiderar a mudança com as skills de revisão de React                                                                                               |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Podar referências obsoletas e apagar branches de tarefa temporários já integrados                                                                                                                                                               |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Reescanear o diff atual em busca de novos efeitos/memos de React em `about/src/` antes do gate final de verificação                                                                                                                             |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Aplicar como gate rígido a verificação de build direcionada, o lint, o typecheck e a checagem de formato; manter o `yarn npm audit` informativo e rodar o `yarn knip` à parte como auditoria consultiva quando dependências/importações mudarem |

## Por quê

- Formatação consistente
- O lockfile permanece sincronizado
- Novas adições de `useEffect`/memo no site about ganham uma segunda olhada explícita antes de o agente terminar
- Problemas de build/lint/tipos relevantes ao workspace detectados cedo, sem forçar o build multilíngue completo da documentação em toda tarefa
- Visibilidade de segurança via `yarn npm audit`
- O desvio de dependências/importações pode ser checado com `yarn knip` sem transformá-lo em um hook de parada global barulhento
- Uma única implementação de hook compartilhada entre Codex e Cursor
- Branches de tarefa temporários permanecem alinhados ao fluxo de worktrees do repositório

## Exemplos de scripts de hook

### Hook de formatação

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

### Hook de verificação

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

Por padrão, o `scripts/agent-hooks/verify.sh` sai com código diferente de zero quando uma verificação obrigatória falha. Defina `AGENT_VERIFY_MODE=advisory` apenas quando você precisar intencionalmente de sinal a partir de uma árvore quebrada sem bloquear o hook. Mantenha o `yarn knip` fora do gate rígido, a menos que o repositório decida explicitamente falhar em problemas consultivos de importação/dependência.

Hooks de ciclo de vida não substituem a verificação manual em navegador. Para mudanças de UI ou visuais, continue rodando verificações com `playwright-cli` em `chrome`, `firefox` e `webkit`, mais um fluxo em viewport mobile em cada engine quando o comportamento responsivo ou de toque mudar.

### Hook de instalação do Yarn

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

Configure a ligação dos hooks conforme a documentação da sua ferramenta de agente (`hooks.json`, equivalente, etc.).

Neste repositório, `.codex/hooks/*.sh` e `.cursor/hooks/*.sh` devem permanecer como wrappers finos que delegam às implementações compartilhadas em `scripts/agent-hooks/`.
