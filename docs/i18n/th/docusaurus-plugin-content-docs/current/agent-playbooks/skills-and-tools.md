# สกิลและเครื่องมือ

ใช้ playbook นี้เมื่อตั้งค่าหรือปรับสกิลและเครื่องมือภายนอก

## สกิลที่แนะนำ

### Context7 (เอกสารไลบรารี)

สำหรับเอกสารล่าสุดของไลบรารีต่าง ๆ

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

ใช้ `playwright-cli` สำหรับงานอัตโนมัติบนเบราว์เซอร์ (การนำทาง การโต้ตอบ ภาพหน้าจอ การทดสอบ การดึงข้อมูล)

เมื่อใช้ `playwright-cli` ตรวจสอบ UI ของ repo อย่าหยุดที่เอนจินเดียว ให้รันโฟลว์ที่เกี่ยวข้องในเอนจินเบราว์เซอร์หลักครบทั้งสามตัว:

- `chrome` สำหรับ Blink
- `firefox` สำหรับ Gecko
- `webkit` สำหรับความครอบคลุมของ Safari/WebKit

ใช้เซสชันที่ตั้งชื่อแยกกันต่อหนึ่งเอนจินเพื่อให้หลักฐานไม่ปะปนกัน แต่ให้รันเซสชันเหล่านั้นทีละตัว ทั้งเครื่องจะมีเซสชันเบราว์เซอร์ของ Playwright ทำงานพร้อมกันได้เพียงเซสชันเดียว เพราะทรัพยากรที่แย่งกันคือ RAM และ CPU ของเครื่อง ไม่ใช่ตัว repo ให้เปิดและปิดเซสชันผ่าน `./scripts/pw-session.sh` ซึ่งถือล็อกร่วมนั้นไว้ เอเจนต์ที่ทำงานพร้อมกันจะได้เลื่อนแล้วลองงานเบราว์เซอร์ใหม่ แทนที่จะใช้ทรัพยากรของเครื่องจนหมด หากตั้งใจข้ามเอนจินใด ให้บันทึกเหตุผลไว้

ระหว่างการปรับแก้ซ้ำไปมา ให้ใช้ Chrome/Blink อย่างเดียว แล้วรันลำดับ Chrome, Firefox และ WebKit ให้ครบเมื่อการเปลี่ยนแปลงพร้อมสำหรับการตรวจสอบขั้นสุดท้าย ใช้เซสชันของแต่ละเอนจินซ้ำทั้งบนเดสก์ท็อปและมือถือด้วยการปรับขนาดหน้าต่าง ปิดเซสชันในขั้นตอนเก็บกวาดแบบ finally แล้วจึงค่อยเปิดเอนจินถัดไป

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

เมื่อช่องเซสชันไม่ว่าง `open` จะออกด้วยรหัส 75 ให้รอด้วย `./scripts/pw-session.sh open --wait[=SECONDS] ...` (ค่าเริ่มต้น 300 วินาที) แทนการลองใหม่ด้วยมือ ล็อกที่ค้างอยู่จากเวิร์กโฟลว์ซึ่งถูกขัดจังหวะจะถูกทวงคืนอัตโนมัติ เพราะ `open` จะปล่อยช่องใดก็ตามที่เบราว์เซอร์ตามบันทึกไม่ได้ทำงานอยู่แล้ว ตรวจดูผู้ถือล็อกด้วย `./scripts/pw-session.sh status` ส่วน `release <session>` เป็นทางเลือกสุดท้ายสำหรับกรณีหายากที่ `status` ยืนยันสถานะของเบราว์เซอร์ไม่ได้

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

ตำแหน่งติดตั้งสกิล:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

สำหรับคำแนะนำเชิงลึกด้านประสิทธิภาพของ React/Next

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

ค้นหาและติดตั้งสกิลจากระบบนิเวศแบบเปิด

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## เหตุผลเบื้องหลังนโยบาย MCP

หลีกเลี่ยง GitHub MCP และเซิร์ฟเวอร์ MCP สำหรับเบราว์เซอร์ในโปรเจกต์นี้ เพราะเพิ่มภาระด้าน tool-schema และคอนเท็กซ์อย่างมาก

- การทำงานกับ GitHub: ใช้ `gh` CLI
- การทำงานกับเบราว์เซอร์: ใช้ `playwright-cli`

## ความพร้อมใช้งานของโมเดล

- `composer-2` ใช้ได้เฉพาะใน Cursor เท่านั้น อย่าตั้งค่ามันไว้ใต้ `.claude/` หรือ `.codex/`
- Codex ไม่ได้ระบุ alias ของโมเดลชื่อ `latest` ไว้ในเอกสาร ไฟล์ TOML ของ custom agent ที่คอมมิตไว้ใต้ `.codex/**/agents/*.toml` จึงละทั้ง `model` และ `model_reasoning_effort` เพื่อให้สืบทอดการตั้งค่าของเซสชันแม่ปัจจุบัน
