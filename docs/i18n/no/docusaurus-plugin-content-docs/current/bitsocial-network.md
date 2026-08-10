---
title: Bitsocial Chain
description: Fase 2 av masterplanen, som dekker det foreslåtte økonomiske appchain-laget på Ethereum L2 for Bitsocial-apper.
---

# Bitsocial Chain

Bitsocial Chain er det foreslåtte økonomiske appchain-laget på Ethereum L2 for Bitsocial-apper. Det
nåværende kjedespesifikke nettstedet er [chain.bitsocial.net](https://chain.bitsocial.net).

Det peer-to-peer-baserte sosiale laget gjør at fellesskap, identiteter og innhold kan bevege seg
utenfor en sentral plattformdatabase. Bitsocial Chain skal legge til de delte primitivene for
navngivning, inntektsgenerering og betaling som gjør slike apper vanskeligere å sulte ut økonomisk.

## Hva det skal drive

- desentraliserte Bitsocial-domener som `.bso`
- utmerkelser og tips
- varig infrastruktur for inntektsgenerering
- delt likviditet på tvers av apper
- finansielle strukturer som er vanskeligere for banker eller plattformer å kvele
- nettverkseffekter som ikke avhenger av at ett selskap eier hele stakken

Målet er ikke å lede an med tokenmekanikk. Målet er å gjøre nyttige sosiale apper mer varige,
lettere å finansiere og mindre avhengige av sentraliserte betalings- eller navnetjenester.

## Nåværende konseptbevis

Det første konseptbeviset for Bitsocial Chain konsentrerer seg om native `.bso`-navn. Det viser at
et navneregister kan utledes fra historikken på Ethereum L1 uten å legge sosialt innhold på kjeden:

- brukere sender inn intensjoner om å registrere, oppdatere, overføre og tilbakekalle gjennom
  vanlige Ethereum L1-transaksjoner
- hvem som helst kan kjøre utledningsnoden og rekonstruere den samme `.bso`-registertilstanden
- en resolver kobler et `.bso`-navn til den offentlige Bitsocial-nøkkelen som klientene allerede
  bruker over peer-to-peer-protokollen
- innlegg, stemmer, moderering, feeder og fellesskapsinnhold forblir utenfor kjeden og peer-to-peer

Det konseptbeviset er ingen Stage 2-lansering i produksjon. Det har foreløpig verken bevissystem,
utfordringsmekanisme, revidert kode, live utrulling, endelig prising eller endelig styring. Den
langsiktige holdningen er transparent som standard og personvernkompatibel av design: kjernekjeden
er offentlig, mens fremtidige tips, betalinger, utmerkelser og likviditet bør unngå å tvinge fram
permanente koblinger mellom sosial identitet og lommebokhistorikk.

## Hvorfor det betyr noe

Å desentralisere fellesskap og identiteter er nødvendig, men det holder ikke til å desentralisere
alle sosiale medier.

Hvis sosiale apper fortsatt avhenger av noen få sentraliserte økonomiske kanaler, forblir de enkle å
presse, deplattformere eller sulte ut økonomisk. Bitsocial Chain er det foreslåtte svaret på det
andre laget av avhengighet.

## Forholdet til appene

Bitsocial Chain skal ligge under Bitsocial-appene, ikke erstatte dem.

Det utadrettede resultatet bør være:

- fellesskapene forblir peer-to-peer
- appene forblir differensierte
- brukerne får praktiske funksjoner for navngivning og inntektsgenerering
- skapere og fellesskap kan få støtte på tvers av klienter
- verdi kan bevege seg gjennom økosystemet uten å gjenskape en sentralisert plattformeier

## Hvorfor dette kommer tidlig

Den nåværende masterplanen plasserer Bitsocial Chain rett etter de første inngangskategoriene:
bildetavler, forumer og det offentlige RPC-laget som gjør de appene praktiske for flere brukere.

Den tidsplasseringen betyr noe fordi sosiale apper trenger sterke nettverkseffekter. Hvis
navngivning, støtte, utmerkelser, tips og inntektsgenerering kommer for sent, får sentraliserte
konkurrenter beholde sitt største fortrinn altfor lenge.

## Designprinsipper

Siden Bitsocial Chain fortsatt er foreslått infrastruktur og ikke et lansert produkt, bør planen
holdes disiplinert:

- Apper og fellesskap først. Nettverkslaget bør gjøre reelle sosiale produkter sterkere.
- Praktiske funksjoner først. Navn, utmerkelser, tips og betalinger er lettere å forklare enn
  abstrakt finansiell arkitektur.
- Reelt bidrag foran hype. Økonomiske primitiver bør belønne deltakelse, bygging og støtte til
  fellesskapene.
- Kuratering er tillatt. Apper kan forme rangeringer, standardvalg og oppdagelse slik at varige
  fellesskap prioriteres.
- De nøyaktige mekanismene er fortsatt åpne. Denne siden forklarer rollen til Bitsocial Chain, ikke
  et låst løfte om endelig økonomi.
