# Beceriler ve Araçlar

Becerileri ve harici araçları kurarken veya ayarlarken bu el kitabını kullanın.

## Önerilen Beceriler

### Context7 (kütüphane belgeleri)

Kütüphanelerin güncel belgeleri için.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Tarayıcı otomasyonu (gezinme, etkileşim, ekran görüntüleri, testler, veri çıkarma) için `playwright-cli` kullanın.

Depodaki arayüz doğrulaması için `playwright-cli` kullanırken tek bir motorda durmayın. İlgili akışı üç ana tarayıcı motorunun tamamında çalıştırın:

- Blink için `chrome`
- Gecko için `firefox`
- Safari/WebKit kapsamı için `webkit`

Kanıtlar birbirine karışmasın diye her motora ayrı adlandırılmış bir oturum verin, ancak bu oturumları sırayla çalıştırın. Aynı anda makine genelinde yalnızca tek bir Playwright tarayıcı oturumu etkin olabilir; çünkü çekişme yaşanan kaynak depo değil, makinenin belleği ve işlemcisidir. Oturumları `./scripts/pw-session.sh` üzerinden açıp kapatın; bu betik söz konusu paylaşılan kilidi tuttuğu için eşzamanlı ajanlar makineyi doyurmak yerine tarayıcı işini erteleyip yeniden dener. Bir motor bilerek atlanıyorsa nedenini kayda geçirin.

Geliştirme sırasında yalnızca Chrome/Blink kullanın. Değişiklik son doğrulamaya hazır olduğunda Chrome, Firefox ve WebKit dizisini bir kez baştan sona çalıştırın. Her motorun oturumunu yeniden boyutlandırarak hem masaüstü hem mobil için tekrar kullanın, oturumu finally benzeri bir temizlik adımında kapatın ve ancak ondan sonra bir sonraki motoru açın.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Yuva meşgulken `open` 75 koduyla çıkar; elle yeniden denemek yerine `./scripts/pw-session.sh open --wait[=SECONDS] ...` ile bekleyin (varsayılan 300 sn). Yarıda kesilen bir iş akışından kalan kilit kendiliğinden geri alınır, çünkü `open` kaydettiği tarayıcı artık çalışmayan her yuvayı serbest bırakır. Kilidi tutanı `./scripts/pw-session.sh status` ile inceleyin; `release <session>` yalnızca `status` komutunun tarayıcı durumunu doğrulayamadığı ender durumlar için son çaredir.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Beceri kurulum konumları:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Daha derin React/Next performans rehberliği için.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Açık ekosistemden beceri keşfedin/kurun.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP Politikasının Gerekçesi

Bu projede GitHub MCP ve tarayıcı MCP sunucularından kaçının, çünkü ciddi miktarda araç şeması/bağlam yükü getiriyorlar.

- GitHub işlemleri: `gh` CLI kullanın.
- Tarayıcı işlemleri: `playwright-cli` kullanın.

## Model Kullanılabilirliği

- `composer-2` yalnızca Cursor'da mevcuttur. `.claude/` veya `.codex/` altında yapılandırmayın.
- Codex bir `latest` model takma adını belgelemiyor. `.codex/**/agents/*.toml` altındaki işlenmiş özel ajan TOML dosyaları, mevcut üst oturum ayarlarını devralsınlar diye hem `model` hem de `model_reasoning_effort` alanlarını dışarıda bırakır.
