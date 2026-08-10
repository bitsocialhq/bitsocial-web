---
title: Hook-uri React
description: Bibliotecă de hook-uri React pentru construirea de aplicații sociale descentralizate pe protocolul Bitsocial.
sidebar_position: 1
---

# Hook-uri React

Pachetul `bitsocial-react-hooks` oferă un API familiar, bazat pe hook-uri React, pentru interacțiunea cu protocolul Bitsocial. Se ocupă de preluarea fluxurilor, a comentariilor și a profilurilor autorilor, de gestionarea conturilor, de publicarea conținutului și de abonarea la comunități -- totul fără a depinde de un server central.

Această bibliotecă este interfața principală folosită de [5chan](/apps/5chan/) și de alte aplicații client Bitsocial.

:::note
`bitsocial-react-hooks` se instalează în prezent direct de pe GitHub, nu dintr-un pachet publicat pe npm.
:::

## Instalare

Deoarece pachetul nu se află încă pe npm, instalați-l direct de pe GitHub, fixând un hash de commit specific:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

Înlocuiți `<commit-hash>` cu commitul pe care doriți să îl folosiți.

## Prezentare generală a API-ului

Hook-urile sunt organizate pe categorii funcționale. Mai jos găsiți un rezumat al celor mai des folosite hook-uri din fiecare categorie. Pentru semnături complete, parametri și tipuri returnate, consultați [referința completă a API-ului pe GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Conturi

Gestionarea conturilor locale de utilizator, a identității și a setărilor.

- `useAccount(accountName?)` -- returnează obiectul contului activ (sau al celui indicat prin nume)
- `useAccounts()` -- returnează toate conturile stocate local
- `useAccountComments(options?)` -- returnează comentariile publicate de contul activ

### Comentarii

Preluarea comentariilor individuale și a discuțiilor și interacțiunea cu acestea.

- `useComment(commentCid?)` -- preia un singur comentariu după CID-ul său
- `useComments(commentCids?)` -- preia mai multe comentarii într-un singur lot
- `useEditedComment(comment?)` -- returnează cea mai recentă versiune editată a unui comentariu

### Comunități

Obținerea metadatelor și a setărilor unei comunități.

- Hook pentru căutarea unei singure comunități -- preia o comunitate după adresă
- Hook pentru căutarea mai multor comunități -- preia mai multe comunități
- Hook pentru statisticile comunității -- returnează numărul de abonați și de postări

### Autori

Consultarea profilurilor și a metadatelor autorilor.

- `useAuthor(authorAddress?)` -- preia profilul unui autor
- `useAuthorComments(options?)` -- returnează comentariile unui anumit autor
- `useResolvedAuthorAddress(authorAddress?)` -- rezolvă o adresă lizibilă pentru oameni (de exemplu ENS) în adresa sa de protocol

### Fluxuri

Abonarea la fluxuri de conținut și paginarea acestora.

- `useFeed(options?)` -- returnează un flux paginat de postări din una sau mai multe comunități
- `useBufferedFeeds(feedOptions?)` -- încarcă în avans mai multe fluxuri într-un buffer, pentru o randare mai rapidă
- `useAuthorFeed(authorAddress?)` -- returnează un flux cu postările unui anumit autor

### Acțiuni

Publicarea de conținut și efectuarea operațiunilor de scriere.

- `usePublishComment(options?)` -- publică un comentariu nou sau un răspuns
- `usePublishVote(options?)` -- trimite un vot pozitiv sau negativ
- `useSubscribe(options?)` -- abonează sau dezabonează de la o comunitate

### Stări și RPC

Monitorizarea stării conexiunii și interacțiunea cu un daemon Bitsocial la distanță.

- `useClientsStates(options?)` -- returnează starea conexiunii clienților IPFS/pubsub
- Hook pentru setările RPC -- returnează configurația curentă a daemonului RPC

## Dezvoltare

Pentru a lucra local la biblioteca de hook-uri:

**Cerințe preliminare:** Node.js, Corepack activat, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Consultați fișierul README al depozitului pentru comenzile de testare și de build.

## Linkuri

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Licență:** GPL-2.0-only
