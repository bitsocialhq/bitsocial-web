---
title: Voucher Challenge
description: Hamon laban sa spam na naglalagay ng hadlang sa paglalathala gamit ang natatanging voucher code na ipinamamahagi ng mga may-ari ng komunidad.
sidebar_position: 3
---

# Voucher Challenge

Nilalagyan ng Voucher Challenge ng hadlang ang paglalathala ng nilalaman sa pamamagitan ng natatanging voucher code na ipinamamahagi ng may-ari ng komunidad. Sa halip na umasa sa awtomatikong pagmamarka, inililipat nito ang tiwala sa isang manwal na daloy ng imbitasyon kung saan tumatanggap ng code ang mga kilalang tao sa pamamagitan ng channel na kontrolado ng may-ari.

- **Source code at kasalukuyang README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Pakete sa npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Pag-install

```bash
npm install @bitsocial/voucher-challenge
```

## Paano Ito Gumagana

1. Gumagawa ang may-ari ng komunidad ng isa o higit pang natatanging voucher code.
2. Ipinamamahagi ng may-ari ang mga code na iyon sa mga pinagkakatiwalaang may-akda sa pamamagitan ng channel na kanilang pinili (direct message, email, personal, atbp.).
3. Kapag sumubok maglathala ang isang may-akda, hinihingan siya ng sistema ng hamon ng voucher code.
4. Bine-validate ang code -- kung tunay ito at hindi pa nagagamit, tinatanggap ang publikasyon.

Naiuugnay ang bawat voucher code sa isang partikular na may-akda kapag na-redeem na, kaya hindi na ito magagamit muli ng iba.

## Sanggunian sa Kasalukuyang Pakete

Sadyang isang pangkalahatang-ideya lamang ang pahinang ito, hindi isang kopya ng gabay sa pag-setup. Ang README ng pakete ang pinagmumulan ng katotohanan para sa kasalukuyang mga pangalan ng hamon, mga halimbawa sa Bitsocial CLI, pagpaparehistro sa pkc-js, mga sinusuportahang opsyon, at kilos sa pag-redeem:

- [README ng Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Mas mainam ang upstream na README kapag nagko-configure ng isang live na komunidad, dahil ang mga opsyon ng voucher at ang daloy ng pag-install ay may bersyong kaugnay ng paketeng iyon at hindi ng website na ito.

## Kailan Ito Gagamitin

Pinakaangkop ang Voucher Challenge para sa:

- **Mga komunidad na puro imbitasyon** kung saan sadyang limitado ang pagiging kasapi.
- **Mga piling espasyo** kung saan personal na sinusuri ng may-ari ang bawat kalahok.
- **Mga kapaligirang mataas ang tiwala** kung saan hindi kailangan o hindi kanais-nais ang awtomatikong pagmamarka ng spam.

Dahil nangangailangan ito ng manwal na pamamahagi ng code, hindi ito angkop sa malalaki at bukas na komunidad. Para sa mga ganoong sitwasyon, isaalang-alang ang [Spam Blocker](./spam-blocker.md) o [EVM Contract Call Challenge](./evm-contract-call.md) sa halip.
