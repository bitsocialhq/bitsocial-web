# Penyiapan Hook Agen

Jika asisten pemrograman AI Anda mendukung hook siklus hidup, konfigurasikan hook berikut untuk repo ini.

## Hook yang Direkomendasikan

| Hook            | Perintah                                      | Tujuan                                                                                                                                                                                                                          |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Memformat berkas secara otomatis setelah AI menyunting                                                                                                                                                                          |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Menjalankan `corepack yarn install` ketika `package.json` berubah                                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Ketika sebuah diff menambahkan primitif `useEffect`/memo di `about/src/`, mengingatkan agen untuk menimbang ulang lewat skill peninjauan React                                                                                  |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Memangkas ref usang dan menghapus branch tugas sementara yang sudah terintegrasi                                                                                                                                                |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Memindai ulang diff saat ini untuk mencari effect/memo React baru di `about/src/` sebelum gerbang verifikasi akhir                                                                                                              |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Gerbang keras untuk verifikasi build tertarget, lint, typecheck, dan pemeriksaan format; jaga `yarn npm audit` tetap bersifat informasi dan jalankan `yarn knip` terpisah sebagai audit penasihat saat dependensi/impor berubah |

## Alasannya

- Pemformatan yang konsisten
- Lockfile tetap sinkron
- Penambahan `useEffect`/memo baru di situs about mendapat pemeriksaan kedua secara eksplisit sebelum agen selesai
- Masalah build/lint/tipe yang relevan dengan workspace tertangkap lebih awal tanpa memaksa build dokumentasi multi-locale penuh pada setiap tugas
- Visibilitas keamanan lewat `yarn npm audit`
- Penyimpangan dependensi/impor dapat diperiksa dengan `yarn knip` tanpa menjadikannya stop hook global yang berisik
- Satu implementasi hook bersama untuk Codex maupun Cursor
- Branch tugas sementara tetap selaras dengan alur kerja worktree repo

## Contoh Skrip Hook

### Hook Format

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

### Hook Verifikasi

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

Secara bawaan, `scripts/agent-hooks/verify.sh` keluar dengan kode bukan nol ketika sebuah pemeriksaan wajib gagal. Setel `AGENT_VERIFY_MODE=advisory` hanya ketika Anda memang sengaja butuh sinyal dari tree yang rusak tanpa memblokir hook. Jauhkan `yarn knip` dari gerbang keras kecuali repo secara eksplisit memutuskan untuk menggagalkan build karena masalah impor/dependensi yang sifatnya penasihat.

Hook siklus hidup tidak menggantikan verifikasi browser secara manual. Untuk perubahan UI atau visual, tetap jalankan pemeriksaan `playwright-cli` di `chrome`, `firefox`, dan `webkit`, ditambah alur viewport mobile pada setiap engine ketika responsivitas atau perilaku sentuh ikut berubah.

### Hook Yarn Install

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

Atur penyambungan hook sesuai dokumentasi alat agen yang Anda pakai (`hooks.json`, padanannya, dan sebagainya).

Di repo ini, `.codex/hooks/*.sh` dan `.cursor/hooks/*.sh` harus tetap menjadi pembungkus tipis yang mendelegasikan ke implementasi bersama di bawah `scripts/agent-hooks/`.
