---
title: Výzva s voucherem
description: Antispamová výzva, která podmiňuje publikování unikátními kódy voucherů rozdávanými vlastníky komunit.
sidebar_position: 3
---

# Výzva s voucherem

Voucher Challenge podmiňuje publikování obsahu unikátními kódy voucherů, které rozdává vlastník komunity. Místo spoléhání na automatické hodnocení přesouvá důvěru k ručnímu procesu pozvánek, ve kterém známí lidé dostávají kódy kanálem, jejž vlastník ovládá.

- **Zdrojový kód a aktuální README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Balíček na npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalace

```bash
npm install @bitsocial/voucher-challenge
```

## Jak to funguje

1. Vlastník komunity vygeneruje jeden nebo více unikátních kódů voucherů.
2. Tyto kódy rozdá důvěryhodným autorům kanálem dle vlastní volby (přímá zpráva, e-mail, osobně a podobně).
3. Když se autor pokusí publikovat, systém výzev jej požádá o kód voucheru.
4. Kód se ověří – pokud je pravý a dosud nebyl použit, publikace je přijata.

Každý kód voucheru je po uplatnění navázán na konkrétního autora, což brání jeho opětovnému použití někým jiným.

## Aktuální dokumentace balíčku

Tato stránka je záměrně přehledem, nikoli zrcadleným návodem k nastavení. Zdrojem pravdy pro aktuální názvy výzev, příklady pro Bitsocial CLI, registraci v pkc-js, podporované volby a chování při uplatnění kódu je README balíčku:

- [README balíčku Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Při konfiguraci živé komunity dávejte přednost upstream README, protože volby voucherů a instalační postupy jsou verzované spolu s balíčkem, nikoli s tímto webem.

## Kdy ji použít

Výzva s voucherem se nejlépe hodí pro:

- **Komunity jen na pozvánku**, kde je členství záměrně omezené.
- **Kurátorované prostory**, kde vlastník osobně prověřuje každého účastníka.
- **Prostředí s vysokou mírou důvěry**, kde je automatické hodnocení spamu zbytečné nebo nežádoucí.

Protože vyžaduje ruční rozdávání kódů, neškáluje se na velké otevřené komunity. Pro takové situace zvažte místo toho [Blokátor spamu](./spam-blocker.md) nebo [Výzvu voláním EVM kontraktu](./evm-contract-call.md).
