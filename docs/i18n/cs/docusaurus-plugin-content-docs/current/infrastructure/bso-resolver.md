---
title: BSO Resolver
description: Překlad doménových jmen .bso na veřejné klíče pomocí TXT záznamů Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver převádí doménová jména `.bso` na odpovídající veřejné klíče tím, že čte TXT záznamy Bitsocial. Je to balíček pro překlad jmen, který nástroje Bitsocial používají ve chvíli, kdy se jméno `.bso` určené pro uživatele musí stát klíčovým materiálem srozumitelným peer-to-peer vrstvě.

- **Zdrojový kód a aktuální README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Balíček npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalace

```bash
npm install @bitsocial/bso-resolver
```

## Kam zapadá

Jména Bitsocial mají být čitelné vstupní body ke komunitám a autorům. Resolver drží tuto pojmenovací vrstvu odděleně od kódu aplikace, takže se klient může nejdřív zeptat, zda je jméno podporované, a pak ho přeložit přes vstupní bod odpovídající danému běhovému prostředí.

Sáhněte po něm, když integrujete klienta, nástroj příkazové řádky nebo službu, které mají rozumět Bitsocial a přijímat jména `.bso`, ne jen holé veřejné klíče.

## Aktuální dokumentace balíčku

Tato stránka je záměrně přehledem, ne zrcadlem API dokumentace. Zdrojem pravdy pro volby konstruktoru, návratové typy, chování mezipaměti, vstupní body, ukázky poskytovatelů a podporovanou sémantiku ukončení je README balíčku:

- [README balíčku BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Když kód kopírujete do projektu, dávejte přednost upstreamovému README, protože chování resolveru je verzované spolu s balíčkem, ne s tímto webem.
