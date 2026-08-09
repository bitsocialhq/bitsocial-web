# 스킬과 도구

스킬과 외부 도구를 설정하거나 조정할 때 이 플레이북을 사용하세요.

## 권장 스킬

### Context7(라이브러리 문서)

라이브러리의 최신 문서를 가져올 때 사용합니다.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

브라우저 자동화(탐색, 상호작용, 스크린샷, 테스트, 데이터 추출)에는 `playwright-cli`를 사용하세요.

저장소 UI 검증에 `playwright-cli`를 쓸 때는 엔진 하나만 확인하고 끝내지 마세요. 해당 플로우를 다음 세 가지 주요 브라우저 엔진에서 모두 실행해야 합니다.

- Blink는 `chrome`
- Gecko는 `firefox`
- Safari/WebKit 커버리지는 `webkit`

증거가 섞이지 않도록 엔진마다 이름이 다른 세션을 쓰되, 그 세션들은 순차적으로 실행하세요. 경합하는 자원이 저장소가 아니라 머신의 RAM과 CPU이기 때문에, 머신 전체를 통틀어 동시에 활성화할 수 있는 Playwright 브라우저 세션은 하나뿐입니다. 세션은 `./scripts/pw-session.sh`로 열고 닫으세요. 이 스크립트가 공용 락을 쥐고 있어서, 동시에 도는 에이전트들이 머신을 포화시키는 대신 브라우저 작업을 미뤘다가 다시 시도합니다. 어떤 엔진을 의도적으로 건너뛰었다면 그 이유를 기록하세요.

반복 작업 중에는 Chrome/Blink만 사용하세요. 변경이 최종 검증 단계에 이르면 Chrome, Firefox, WebKit 전체 순서를 한 번 실행합니다. 각 엔진 세션은 크기를 조정해 데스크톱과 모바일에 함께 재사용하고, finally 형태의 정리 단계에서 닫은 다음에야 다음 엔진을 여세요.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

슬롯이 사용 중이면 `open`이 75로 종료합니다. 직접 재시도하지 말고 `./scripts/pw-session.sh open --wait[=SECONDS] ...`(기본 300초)로 대기하세요. 중단된 워크플로가 남긴 락은 자동으로 회수됩니다. `open`이 기록된 브라우저가 더 이상 실행 중이지 않은 슬롯을 해제하기 때문입니다. 현재 점유자는 `./scripts/pw-session.sh status`로 확인하세요. `release <session>`은 `status`로 브라우저 상태를 확인할 수 없는 드문 경우를 위한 최후의 수단입니다.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

스킬 설치 위치:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

React/Next 성능에 대한 더 깊은 지침이 필요할 때 사용합니다.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

오픈 생태계에서 스킬을 찾아 설치합니다.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP 정책 근거

이 프로젝트에서는 GitHub MCP와 브라우저 MCP 서버를 피하세요. 도구 스키마와 컨텍스트 오버헤드가 상당히 커지기 때문입니다.

- GitHub 작업: `gh` CLI를 사용하세요.
- 브라우저 작업: `playwright-cli`를 사용하세요.

## 모델 가용성

- `composer-2`는 Cursor에서만 사용할 수 있습니다. `.claude/`나 `.codex/` 아래에 설정하지 마세요.
- Codex는 `latest` 모델 별칭을 문서화하지 않습니다. `.codex/**/agents/*.toml` 아래에 커밋된 커스텀 에이전트 TOML은 `model`과 `model_reasoning_effort`를 모두 생략해 현재 부모 세션 설정을 그대로 상속합니다.
