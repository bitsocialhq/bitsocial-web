# Ajan Kancaları Kurulumu

Yapay zeka kodlama asistanınız yaşam döngüsü kancalarını destekliyorsa, bu depo için aşağıdakileri yapılandırın.

## Önerilen Kancalar

| Kanca           | Komut                                         | Amaç                                                                                                                                                                                                                                                          |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Yapay zeka düzenlemelerinden sonra dosyaları otomatik biçimlendirir                                                                                                                                                                                           |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` değiştiğinde `corepack yarn install` çalıştırır                                                                                                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Bir diff `about/src/` içine `useEffect`/memo ilkelleri eklediğinde, ajana React inceleme becerileriyle konuyu yeniden değerlendirmesini hatırlatır                                                                                                            |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Eskimiş referansları budar ve entegre edilmiş geçici görev dallarını siler                                                                                                                                                                                    |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Son doğrulama kapısından önce mevcut diff'i `about/src/` içindeki yeni React efektleri/memo'ları açısından yeniden tarar                                                                                                                                      |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Hedefli derleme doğrulaması, lint, tip denetimi ve biçim kontrolleri için katı kapı uygular; `yarn npm audit`'i bilgilendirme amaçlı tutar, bağımlılıklar/içe aktarmalar değiştiğinde `yarn knip`'i ayrı ve tavsiye niteliğinde bir denetim olarak çalıştırır |

## Neden

- Tutarlı biçimlendirme
- Kilit dosyası senkronize kalır
- About sitesine eklenen yeni `useEffect`/memo kullanımları, ajan işi bitirmeden önce açıkça ikinci kez gözden geçirilir
- Her görevde tam çok dilli belge derlemesini zorunlu kılmadan, çalışma alanıyla ilgili derleme/lint/tip sorunları erkenden yakalanır
- `yarn npm audit` ile güvenlik görünürlüğü
- Bağımlılık/içe aktarma sapması, gürültülü bir küresel durdurma kancasına dönüştürülmeden `yarn knip` ile denetlenebilir
- Hem Codex hem de Cursor için tek bir paylaşılan kanca uygulaması
- Geçici görev dalları, deponun worktree iş akışıyla uyumlu kalır

## Örnek Kanca Komut Dosyaları

### Biçimlendirme Kancası

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

### Doğrulama Kancası

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

Varsayılan olarak `scripts/agent-hooks/verify.sh`, gerekli bir denetim başarısız olduğunda sıfırdan farklı bir kodla çıkar. `AGENT_VERIFY_MODE=advisory` değerini yalnızca kancayı engellemeden bozuk bir ağaçtan bilerek sinyal almanız gerektiğinde ayarlayın. Depo, tavsiye niteliğindeki içe aktarma/bağımlılık sorunlarında başarısız olmaya açıkça karar vermedikçe `yarn knip`'i katı kapının dışında bırakın.

Yaşam döngüsü kancaları, elle yapılan tarayıcı doğrulamasının yerini tutmaz. Arayüz veya görsel değişikliklerde yine de `chrome`, `firefox` ve `webkit` motorlarında `playwright-cli` kontrollerini çalıştırın; duyarlılık ya da dokunma davranışı değiştiyse her motorda ayrıca bir mobil görünüm akışı deneyin.

### Yarn Kurulum Kancası

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

Kanca bağlantılarını ajan aracınızın belgelerine göre yapılandırın (`hooks.json` veya eşdeğeri gibi).

Bu depoda `.codex/hooks/*.sh` ve `.cursor/hooks/*.sh` dosyaları, `scripts/agent-hooks/` altındaki paylaşılan uygulamalara yetki devreden ince sarmalayıcılar olarak kalmalıdır.
