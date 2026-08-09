# 에이전트 훅 설정

사용하는 AI 코딩 어시스턴트가 라이프사이클 훅을 지원한다면, 이 저장소에는 다음 훅을 설정하세요.

## 권장 훅

| 훅              | 명령                                          | 목적                                                                                                                                                                   |
| --------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI가 편집한 파일을 자동으로 포매팅                                                                                                                                     |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json`이 바뀌면 `corepack yarn install` 실행                                                                                                                   |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | diff가 `about/src/`에 `useEffect`/memo 프리미티브를 추가하면 React 리뷰 스킬로 다시 검토하라고 에이전트에게 알림                                                       |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | 오래된 ref를 정리하고 통합이 끝난 임시 작업 브랜치를 삭제                                                                                                              |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | 최종 검증 게이트 전에 현재 diff에서 `about/src/`의 새 React 이펙트/메모를 다시 스캔                                                                                    |
| `stop`          | `scripts/agent-hooks/verify.sh`               | 대상 빌드 검증, 린트, 타입체크, 포맷 검사를 하드 게이트로 실행. `yarn npm audit`는 정보 제공용으로 두고, 의존성/임포트가 바뀔 때 `yarn knip`을 권고성 감사로 따로 실행 |

## 이유

- 일관된 포매팅
- lockfile이 계속 동기화된 상태로 유지됨
- about 사이트에 새로 추가되는 `useEffect`/memo가 에이전트가 끝내기 전에 한 번 더 명시적으로 검토됨
- 모든 작업마다 전체 다국어 문서 빌드를 강제하지 않으면서도 워크스페이스와 관련된 빌드/린트/타입 문제를 조기에 발견
- `yarn npm audit`를 통한 보안 가시성
- 의존성/임포트 드리프트를 시끄러운 전역 stop 훅으로 만들지 않고도 `yarn knip`으로 점검 가능
- Codex와 Cursor가 함께 쓰는 단일 훅 구현
- 임시 작업 브랜치가 저장소의 워크트리 워크플로와 어긋나지 않음

## 예시 훅 스크립트

### 포맷 훅

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

### 검증 훅

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

기본적으로 `scripts/agent-hooks/verify.sh`는 필수 검사가 실패하면 0이 아닌 값으로 종료합니다. 훅을 막지 않으면서 깨진 트리에서 신호만 얻어야 할 때에 한해 `AGENT_VERIFY_MODE=advisory`를 설정하세요. 저장소가 권고성 임포트/의존성 문제에서도 실패시키기로 명시적으로 정하지 않는 한 `yarn knip`은 하드 게이트 밖에 두세요.

라이프사이클 훅은 수동 브라우저 검증을 대신하지 않습니다. UI나 시각적 변경에는 여전히 `chrome`, `firefox`, `webkit` 전반에서 `playwright-cli` 검사를 실행하고, 반응형이나 터치 동작이 바뀌었다면 각 엔진에서 모바일 뷰포트 플로우도 확인하세요.

### Yarn 설치 훅

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

훅 연결 방식은 사용하는 에이전트 도구의 문서(`hooks.json`이나 그에 준하는 파일 등)에 맞춰 설정하세요.

이 저장소에서 `.codex/hooks/*.sh`와 `.cursor/hooks/*.sh`는 `scripts/agent-hooks/` 아래의 공용 구현에 위임하는 얇은 래퍼로 유지해야 합니다.
