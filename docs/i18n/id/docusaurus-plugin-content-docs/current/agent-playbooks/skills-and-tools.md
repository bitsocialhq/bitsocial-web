# Skill dan Alat

Gunakan playbook ini saat menyiapkan atau menyesuaikan skill dan perkakas eksternal.

## Skill yang Direkomendasikan

### Context7 (dokumentasi pustaka)

Untuk dokumentasi pustaka yang selalu mutakhir.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Gunakan `playwright-cli` untuk otomasi browser (navigasi, interaksi, tangkapan layar, pengujian, ekstraksi).

Saat memakai `playwright-cli` untuk verifikasi UI repo, jangan berhenti setelah satu engine. Jalankan alur yang relevan di ketiga engine browser utama:

- `chrome` untuk Blink
- `firefox` untuk Gecko
- `webkit` untuk cakupan Safari/WebKit

Gunakan sesi bernama terpisah untuk tiap engine agar buktinya tetap terpisah, tetapi jalankan sesi-sesi tersebut secara berurutan. Hanya satu sesi browser Playwright yang boleh aktif pada satu waktu, untuk seluruh mesin, karena sumber daya yang diperebutkan adalah RAM dan CPU mesin, bukan repositorinya. Buka dan tutup sesi melalui `./scripts/pw-session.sh`; skrip itu memegang kunci bersama tersebut sehingga agen yang berjalan bersamaan menunda dan mencoba lagi pekerjaan browser alih-alih membuat mesin kewalahan. Jika sebuah engine sengaja dilewati, catat alasannya.

Selama iterasi, pakai Chrome/Blink saja. Jalankan rangkaian penuh Chrome, Firefox, dan WebKit setelah perubahan siap untuk verifikasi akhir. Pakai ulang sesi tiap engine untuk desktop dan mobile dengan mengubah ukurannya, tutup sesi itu sebagai pembersihan bergaya finally, lalu barulah buka engine berikutnya.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Ketika slotnya sedang terpakai, `open` keluar dengan kode 75; tunggu dengan `./scripts/pw-session.sh open --wait[=SECONDS] ...` (bawaan 300 detik) alih-alih mencoba ulang secara manual. Kunci yang tertinggal dari alur kerja yang terputus akan diambil alih secara otomatis, karena `open` melepas slot mana pun yang browser tercatatnya sudah tidak berjalan. Periksa pemegang slot dengan `./scripts/pw-session.sh status`; `release <session>` adalah upaya terakhir untuk kasus langka ketika `status` tidak dapat memastikan keadaan browser.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Lokasi pemasangan skill:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Untuk panduan performa React/Next yang lebih mendalam.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Menemukan dan memasang skill dari ekosistem terbuka.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Alasan Kebijakan MCP

Hindari GitHub MCP dan server MCP untuk browser pada proyek ini karena keduanya menambah beban skema alat dan konteks yang signifikan.

- Operasi GitHub: gunakan `gh` CLI.
- Operasi browser: gunakan `playwright-cli`.

## Ketersediaan Model

- `composer-2` hanya tersedia di Cursor. Jangan mengonfigurasinya di bawah `.claude/` atau `.codex/`.
- Codex tidak mendokumentasikan alias model `latest`. TOML custom-agent yang di-commit di bawah `.codex/**/agents/*.toml` menghilangkan baik `model` maupun `model_reasoning_effort` sehingga mewarisi pengaturan sesi induk yang sedang berjalan.
