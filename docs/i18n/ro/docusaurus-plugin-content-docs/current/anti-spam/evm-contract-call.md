---
title: EVM Contract Call Challenge
description: Provocare anti-spam care verifică condiții on-chain prin apelarea unui contract inteligent EVM.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge verifică starea on-chain a unui autor înainte de a permite o publicare. Proprietarii de comunități pot cere ca un portofel sau o identitate rezolvată să îndeplinească o condiție de contract inteligent verificată doar prin citire — de exemplu deținerea unui sold minim de tokenuri — înainte de a putea posta.

- **Cod sursă și README actual:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Pachet npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalare

```bash
npm install @bitsocial/evm-contract-challenge
```

## Unde se potrivește

Folosește această provocare pentru comunitățile în care participarea ar trebui să depindă de un semnal EVM extern: deținerea de tokenuri, deținerea de NFT-uri, scoruri de tip proof-of-personhood, apartenența la un organism de guvernanță sau o altă condiție care poate fi citită dintr-un contract.

Odată configurată, provocarea este automată din perspectiva autorului. Verifică sursele eligibile de portofel sau de identitate, apelează metoda de contract configurată și compară valoarea returnată cu condiția stabilită de comunitate.

## Referința actuală a pachetului

Această pagină este intenționat o prezentare generală, nu o copie a referinței de configurare. README-ul pachetului este sursa de adevăr pentru numele provocărilor, exemplele de Bitsocial CLI, înregistrarea în pkc-js, valorile implicite ale opțiunilor, exemplele de ABI, comportamentul RPC și sursele de portofel acceptate:

- [README-ul EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Preferă README-ul din amonte atunci când configurezi o comunitate activă, deoarece opțiunile de contract și exemplele sunt versionate împreună cu acel pachet, nu cu acest site.

## Când să o folosești

EVM Contract Call Challenge este ideală pentru:

- **Comunități restricționate prin tokenuri**, care limitează postarea la deținătorii de tokenuri.
- **Acces restricționat prin NFT**, unde este necesară deținerea unui anumit NFT.
- **Spații de guvernanță DAO**, unde participarea este limitată la deținătorii tokenului de guvernanță.

Pentru comunitățile care nu se bazează pe identitate on-chain, ia în calcul în schimb [Spam Blocker](./spam-blocker.md) sau [Voucher Challenge](./voucher-challenge.md).
