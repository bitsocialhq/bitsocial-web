---
title: EVM Contract Call Challenge
description: Hamon laban sa spam na nagve-verify ng mga kundisyon on-chain sa pamamagitan ng pagtawag sa isang EVM smart contract.
sidebar_position: 4
---

# EVM Contract Call Challenge

Sinusuri ng EVM Contract Call Challenge ang on-chain na kalagayan ng isang may-akda bago pahintulutan ang isang publikasyon. Maaaring hilingin ng mga may-ari ng komunidad na matugunan muna ng isang wallet o naresolbang pagkakakilanlan ang isang read-only na kundisyon sa smart contract, gaya ng paghawak ng pinakamababang balanse ng token, bago mag-post.

- **Source code at kasalukuyang README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Pakete sa npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Pag-install

```bash
npm install @bitsocial/evm-contract-challenge
```

## Saan Ito Bagay

Gamitin ang hamong ito para sa mga komunidad kung saan dapat nakadepende ang paglahok sa isang panlabas na signal mula sa EVM: pagmamay-ari ng token, pagmamay-ari ng NFT, mga marka ng proof-of-personhood, pagiging kasapi sa pamamahala, o iba pang kundisyong nababasa mula sa isang contract.

Awtomatiko ang hamon mula sa pananaw ng may-akda kapag na-configure na. Sinusuri nito ang mga karapat-dapat na pinagmulan ng wallet o pagkakakilanlan, tinatawag ang naka-configure na contract method, at inihahambing ang ibinalik na halaga sa kundisyon ng komunidad.

## Sanggunian sa Kasalukuyang Pakete

Sadyang isang pangkalahatang-ideya lamang ang pahinang ito, hindi isang kopya ng sanggunian sa configuration. Ang README ng pakete ang pinagmumulan ng katotohanan para sa mga pangalan ng hamon, mga halimbawa sa Bitsocial CLI, pagpaparehistro sa pkc-js, mga default na opsyon, mga halimbawa ng ABI, kilos ng RPC, at mga sinusuportahang pinagmulan ng wallet:

- [README ng EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Mas mainam ang upstream na README kapag nagko-configure ng isang live na komunidad, dahil ang mga opsyon at halimbawa ng contract ay may bersyong kaugnay ng paketeng iyon at hindi ng website na ito.

## Kailan Ito Gagamitin

Angkop ang EVM Contract Call Challenge para sa:

- **Mga komunidad na naka-gate sa token** na naglilimita ng pag-post sa mga may hawak ng token.
- **Access na naka-gate sa NFT** kung saan kinakailangan ang pagmamay-ari ng isang partikular na NFT.
- **Mga espasyo ng pamamahala ng DAO** kung saan limitado ang paglahok sa mga may hawak ng governance token.

Para sa mga komunidad na hindi umaasa sa on-chain na pagkakakilanlan, isaalang-alang ang [Spam Blocker](./spam-blocker.md) o [Voucher Challenge](./voucher-challenge.md) sa halip.
