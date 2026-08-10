---
title: BSO Resolver
description: Rezolvați numele de domeniu .bso în chei publice prin înregistrările TXT Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver traduce numele de domeniu `.bso` în cheile publice corespunzătoare, citind înregistrările TXT Bitsocial. Este pachetul de rezolvare folosit de uneltele Bitsocial atunci când un nume `.bso` vizibil pentru utilizator trebuie să devină materialul de chei înțeles de stiva peer-to-peer.

- **Codul sursă și README-ul curent:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Pachet npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalare

```bash
npm install @bitsocial/bso-resolver
```

## Unde se încadrează

Numele Bitsocial sunt gândite ca puncte de intrare lizibile pentru oameni către comunități și autori. Resolverul păstrează acest strat de denumire separat de codul aplicației, astfel încât clienții pot întreba dacă un nume este acceptat și apoi îl pot rezolva prin punctul de intrare specific mediului de rulare al pachetului.

Folosiți-l când integrați un client, o unealtă de linie de comandă sau un serviciu compatibil Bitsocial, care trebuie să accepte nume `.bso`, nu doar chei publice brute.

## Referința pachetului curent

Această pagină este intenționat o prezentare generală, nu o copie a referinței API. README-ul pachetului este sursa de adevăr pentru opțiunile constructorului, tipurile returnate, comportamentul de caching, punctele de intrare, exemplele de furnizori și semantica de oprire acceptată:

- [README-ul BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Preferați README-ul din amonte când copiați cod într-un proiect, pentru că modul de funcționare al resolverului este versionat odată cu acel pachet, nu cu acest site.
