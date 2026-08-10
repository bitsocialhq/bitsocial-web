# การตั้งค่า Hooks ของเอเจนต์

หากผู้ช่วยเขียนโค้ด AI ของคุณรองรับ lifecycle hooks ให้ตั้งค่าตามรายการนี้สำหรับ repo นี้

## Hooks ที่แนะนำ

| Hook            | คำสั่ง                                        | จุดประสงค์                                                                                                                                                                                       |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | จัดรูปแบบไฟล์อัตโนมัติหลัง AI แก้ไข                                                                                                                                                              |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | รัน `corepack yarn install` เมื่อ `package.json` เปลี่ยน                                                                                                                                         |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | เมื่อ diff เพิ่ม `useEffect`/memo primitives ใน `about/src/` ให้เตือนเอเจนต์ให้ทบทวนใหม่ด้วยสกิลรีวิว React                                                                                      |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | ตัด ref ที่ค้างอยู่และลบสาขางานชั่วคราวที่รวมเข้ามาแล้ว                                                                                                                                          |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | สแกน diff ปัจจุบันหา effect/memo ของ React ที่เพิ่มใหม่ใน `about/src/` อีกครั้งก่อนถึงด่านตรวจสอบสุดท้าย                                                                                         |
| `stop`          | `scripts/agent-hooks/verify.sh`               | กั้นแบบเข้มงวดด้วยการตรวจบิลด์แบบเจาะจง lint typecheck และการตรวจรูปแบบ ให้ `yarn npm audit` เป็นข้อมูลประกอบ และรัน `yarn knip` แยกต่างหากเป็นการตรวจเชิงคำแนะนำเมื่อ dependency/import เปลี่ยน |

## เหตุผล

- รูปแบบโค้ดสม่ำเสมอ
- ไฟล์ล็อกอยู่ในสถานะตรงกันเสมอ
- การเพิ่ม `useEffect`/memo ใหม่ในเว็บ about ได้รับการทบทวนซ้ำอย่างชัดเจนก่อนเอเจนต์จบงาน
- จับปัญหาบิลด์/lint/type ที่เกี่ยวข้องกับเวิร์กสเปซได้ตั้งแต่เนิ่น ๆ โดยไม่ต้องบังคับให้บิลด์เอกสารครบทุกภาษาในทุกงาน
- มองเห็นความเสี่ยงด้านความปลอดภัยผ่าน `yarn npm audit`
- ตรวจการเลื่อนไหลของ dependency/import ด้วย `yarn knip` ได้ โดยไม่ทำให้มันกลายเป็น stop hook ที่ทำงานทุกครั้งและส่งเสียงรบกวน
- มีการอิมพลีเมนต์ hook ชุดเดียวใช้ร่วมกันทั้ง Codex และ Cursor
- สาขางานชั่วคราวยังสอดคล้องกับเวิร์กโฟลว์ worktree ของ repo

## ตัวอย่างสคริปต์ Hook

### Hook จัดรูปแบบ

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

### Hook ตรวจสอบ

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

โดยค่าเริ่มต้น `scripts/agent-hooks/verify.sh` จะออกด้วยค่าที่ไม่ใช่ศูนย์เมื่อการตรวจที่จำเป็นล้มเหลว ตั้งค่า `AGENT_VERIFY_MODE=advisory` เฉพาะเมื่อคุณตั้งใจอยากได้สัญญาณจากต้นไม้โค้ดที่พังอยู่โดยไม่ให้ hook ขวางงาน อย่าดึง `yarn knip` เข้ามาอยู่ในด่านกั้นแบบเข้มงวด เว้นแต่ repo จะตัดสินใจอย่างชัดเจนว่าจะให้ปัญหา import/dependency เชิงคำแนะนำทำให้งานล้มเหลว

Lifecycle hooks ไม่ได้มาแทนการตรวจสอบผ่านเบราว์เซอร์ด้วยมือ สำหรับการเปลี่ยนแปลง UI หรือด้านภาพ ยังต้องรันการตรวจด้วย `playwright-cli` ให้ครบทั้ง `chrome`, `firefox` และ `webkit` พร้อมโฟลว์บนวิวพอร์ตมือถือในทุกเอนจิน เมื่อการตอบสนองต่อขนาดหน้าจอหรือพฤติกรรมการสัมผัสเปลี่ยนไป

### Hook ติดตั้ง Yarn

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

ตั้งค่าการเชื่อมต่อ hook ตามเอกสารของเครื่องมือเอเจนต์ที่คุณใช้ (`hooks.json` หรือไฟล์เทียบเท่า)

ใน repo นี้ `.codex/hooks/*.sh` และ `.cursor/hooks/*.sh` ควรเป็นเพียง wrapper บาง ๆ ที่ส่งต่องานไปยังการอิมพลีเมนต์ร่วมใต้ `scripts/agent-hooks/`
