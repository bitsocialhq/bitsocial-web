---
title: Výzva voláním EVM kontraktu
description: Antispamová výzva, která ověřuje on-chain podmínky voláním chytrého kontraktu EVM.
sidebar_position: 4
---

# Výzva voláním EVM kontraktu

EVM Contract Call Challenge ověří on-chain stav autora dřív, než povolí publikaci. Vlastníci komunit mohou před publikováním vyžadovat, aby peněženka nebo rozpoznaná identita splnila podmínku čtenou z chytrého kontraktu, například držení minimálního zůstatku tokenu.

- **Zdrojový kód a aktuální README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Balíček na npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalace

```bash
npm install @bitsocial/evm-contract-challenge
```

## Kde se hodí

Tuto výzvu použijte pro komunity, kde má účast záviset na externím signálu z EVM: vlastnictví tokenu, vlastnictví NFT, skóre potvrzující lidskost, členství ve správě projektu nebo jiné podmínce čitelné z kontraktu.

Z pohledu autora je výzva po nastavení automatická. Zkontroluje způsobilé zdroje peněženek či identit, zavolá nakonfigurovanou metodu kontraktu a vrácenou hodnotu porovná s podmínkou komunity.

## Aktuální dokumentace balíčku

Tato stránka je záměrně přehledem, nikoli zrcadlenou referencí konfigurace. Zdrojem pravdy pro názvy výzev, příklady pro Bitsocial CLI, registraci v pkc-js, výchozí hodnoty voleb, příklady ABI, chování RPC a podporované zdroje peněženek je README balíčku:

- [README balíčku EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Při konfiguraci živé komunity dávejte přednost upstream README, protože volby kontraktu a příklady jsou verzované spolu s balíčkem, nikoli s tímto webem.

## Kdy ji použít

Výzva voláním EVM kontraktu je ideální pro:

- **Komunity s přístupem podle tokenu**, které publikování omezují na držitele tokenu.
- **Přístup podle NFT**, kde je vyžadováno vlastnictví konkrétního NFT.
- **Prostory pro správu DAO**, kde je účast omezena na držitele governance tokenu.

Pro komunity, které se na on-chain identitu nespoléhají, zvažte místo toho [Blokátor spamu](./spam-blocker.md) nebo [Výzvu s voucherem](./voucher-challenge.md).
