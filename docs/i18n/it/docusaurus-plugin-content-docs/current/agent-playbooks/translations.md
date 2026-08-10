# Flusso di lavoro per le traduzioni

Questo progetto usa i file di traduzione i18next in `public/translations/{lang}/default.json`.

## Regola

Non modificare manualmente tutti i file di lingua. Usa `scripts/update-translations.js`.

## Aggiungere o aggiornare una chiave

1. Crea un file dizionario temporaneo, ad esempio `translations-temp.json`:

```json
{
  "en": "English text",
  "es": "Spanish text",
  "fr": "French text",
  "de": "German text"
}
```

2. Applica la mappa delle traduzioni:

```bash
node scripts/update-translations.js --key my_new_key --map translations-temp.json --include-en --write
```

3. Elimina il file dizionario temporaneo.

## Altri comandi utili

```bash
# Copy a key from English to all languages (dry run then write)
node scripts/update-translations.js --key some_key --from en --dry
node scripts/update-translations.js --key some_key --from en --write

# Delete a key from all languages
node scripts/update-translations.js --key obsolete_key --delete --write

# Audit for unused translation keys
node scripts/update-translations.js --audit --dry
node scripts/update-translations.js --audit --write
```
