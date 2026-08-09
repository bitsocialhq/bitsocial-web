---
title: Bitsocial Chain
description: A főterv 2. fázisa, amely a Bitsocial alkalmazásokhoz javasolt Ethereum L2 appchain gazdasági réteget mutatja be.
---

# Bitsocial Chain

A Bitsocial Chain a Bitsocial alkalmazásokhoz javasolt Ethereum L2 appchain gazdasági réteg. A lánccal
foglalkozó jelenlegi oldal a [chain.bitsocial.net](https://chain.bitsocial.net).

A peer-to-peer közösségi réteg lehetővé teszi, hogy a közösségek, az identitások és a tartalmak egy
központi platformadatbázison kívül mozogjanak. A Bitsocial Chain feladata, hogy ehhez hozzáadja azokat a
közös névadási, bevételszerzési és fizetési primitíveket, amelyekkel ezeket az alkalmazásokat nehezebb
pénzügyileg kiéheztetni.

## Mit hivatott működtetni

- decentralizált Bitsocial domainek, például a `.bso`
- díjazás és borravaló
- tartós bevételszerzési infrastruktúra
- alkalmazások közötti közös likviditás
- olyan pénzügyi struktúrák, amelyeket a bankok vagy a platformok nehezebben tudnak elfojtani
- hálózati hatások, amelyek nem attól függenek, hogy egyetlen vállalat birtokolja a teljes stacket

A cél nem az, hogy a tokenmechanika kerüljön előtérbe. A cél az, hogy a hasznos közösségi alkalmazások
tartósabbak és könnyebben finanszírozhatók legyenek, és kevésbé függjenek központosított fizetési vagy
névszolgáltatóktól.

## Jelenlegi proof of concept

Az első Bitsocial Chain proof of concept a natív `.bso` nevekre összpontosít. Azt bizonyítja, hogy egy
névregiszter levezethető az Ethereum L1 előzményeiből anélkül, hogy a közösségi tartalom a láncra kerülne:

- a felhasználók egyszerű Ethereum L1 tranzakciókban küldik be a regisztrációs, frissítési, átruházási
  és visszavonási szándékokat
- a levezető csomópontot bárki futtathatja, és ugyanazt a `.bso` regiszterállapotot állíthatja vissza
- egy feloldó a `.bso` nevet ahhoz a Bitsocial nyilvános kulcshoz rendeli, amelyet a kliensek a
  peer-to-peer protokollon már használnak
- a bejegyzések, a szavazatok, a moderáció, a hírfolyamok és a közösségi tartalom láncon kívül,
  peer-to-peer marad

Ez a proof of concept nem éles, Stage 2 szintű indulás. Egyelőre nincs hozzá bizonyítási rendszer,
kihívási játék, auditált kód, élő telepítés, végleges árazás vagy végleges irányítási modell. Hosszú távú
alapállása szerint alapértelmezés szerint átlátható és felépítésénél fogva adatvédelem-kompatibilis: az
alaplánc nyilvános, ugyanakkor a későbbi borravaló, fizetés, díjazás és likviditás ne kényszerítsen ki
állandó összekapcsolást a közösségi identitás és a pénztárcatörténet között.

## Miért fontos

A közösségek és az identitások decentralizálása szükséges, de a teljes közösségi média
decentralizálásához önmagában nem elég.

Ha a közösségi alkalmazások továbbra is néhány központosított gazdasági infrastruktúrára támaszkodnak,
akkor könnyen nyomás alá helyezhetők, leválaszthatók a platformról vagy pénzügyileg kiéheztethetők. A
Bitsocial Chain a javasolt válasz a függőség e második rétegére.

## Kapcsolat az alkalmazásokkal

A Bitsocial Chain a Bitsocial alkalmazások alatt helyezkedik el, nem pedig helyettesíti őket.

A nyilvánosság felé mutatkozó eredmény a következő:

- a közösségek peer-to-peer maradnak
- az alkalmazások megőrzik egyedi jellegüket
- a felhasználók gyakorlatias névadási és bevételszerzési funkciókat kapnak
- az alkotók és a közösségek több kliensen keresztül is kaphatnak támogatást
- az érték mozoghat az ökoszisztémán belül anélkül, hogy újra létrejönne egy központi platformtulajdonos

## Miért kerül ez ilyen korán sorra

A jelenlegi főterv a Bitsocial Chaint közvetlenül az első belépési kategóriák után helyezi el: a
képtáblák, a fórumok és az a nyilvános RPC-réteg után, amely ezeket az alkalmazásokat több felhasználó
számára is használhatóvá teszi.

Ez az időzítés azért számít, mert a közösségi alkalmazásoknak erős hálózati hatásra van szükségük. Ha a
névadás, a támogatás, a díjazás, a borravaló és a bevételszerzés túl későn érkezik meg, a központosított
versenytársak túl sokáig őrzik meg a legnagyobb előnyüket.

## Tervezési elvek

Mivel a Bitsocial Chain még javasolt infrastruktúra, nem pedig elindított termék, a tervnek fegyelmezettnek
kell maradnia:

- Először az alkalmazások és a közösségek. A hálózati rétegnek erősebbé kell tennie a valódi közösségi
  termékeket.
- Először a gyakorlatias funkciók. A neveket, a díjazást, a borravalót és a fizetést könnyebb
  elmagyarázni, mint az elvont pénzügyi architektúrát.
- Valódi hozzájárulás a hype helyett. A gazdasági primitíveknek a részvételt, az építkezést és a
  közösségi támogatást kell jutalmazniuk.
- A kurálás megengedett. Az alkalmazások alakíthatják a rangsorokat, az alapértelmezéseket és a
  felfedezést úgy, hogy a tartós közösségeket részesítsék előnyben.
- A pontos mechanizmusok továbbra is nyitottak. Ez az oldal a Bitsocial Chain szerepét magyarázza el, nem
  pedig egy rögzített ígéretet a végleges gazdasági modellről.
