---
title: Bitsocial Chain
description: Faza 2 planu głównego, opisująca warstwę ekonomiczną zaproponowaną dla aplikacji Bitsocial w postaci appchaina L2 na Ethereum.
---

# Bitsocial Chain

Bitsocial Chain to warstwa ekonomiczna zaproponowana dla aplikacji Bitsocial w postaci appchaina L2
na Ethereum. Obecna strona poświęcona samej sieci to
[chain.bitsocial.net](https://chain.bitsocial.net).

Warstwa społecznościowa peer-to-peer pozwala społecznościom, tożsamościom i treściom funkcjonować
poza centralną bazą danych platformy. Bitsocial Chain ma dołożyć do tego wspólne prymitywy
nazewnictwa, monetyzacji i płatności, dzięki którym trudniej będzie zagłodzić te aplikacje finansowo.

## Co ma napędzać

- zdecentralizowane domeny Bitsocial, takie jak `.bso`
- nagrody i napiwki
- trwałe kanały monetyzacji
- wspólna płynność dostępna dla wszystkich aplikacji
- struktury finansowe, które bankom i platformom trudniej odciąć
- efekty sieciowe, które nie zależą od tego, by jedna firma była właścicielem całego stosu

Celem nie jest wysuwanie na pierwszy plan mechaniki tokena. Celem jest sprawienie, by użyteczne
aplikacje społecznościowe były trwalsze, łatwiejsze do sfinansowania i mniej zależne od
scentralizowanych dostawców płatności i nazw.

## Obecny proof of concept

Pierwszy proof of concept Bitsocial Chain skupia się na natywnych nazwach `.bso`. Pokazuje, że
rejestr nazw da się wyprowadzić z historii Ethereum L1 bez umieszczania treści społecznościowych
w łańcuchu:

- użytkownicy zgłaszają intencje rejestracji, aktualizacji, przeniesienia i unieważnienia zwykłymi
  transakcjami na Ethereum L1
- każdy może uruchomić węzeł derywacji i odtworzyć dokładnie ten sam stan rejestru `.bso`
- resolver odwzorowuje nazwę `.bso` na klucz publiczny Bitsocial, którego klienci już używają
  w protokole peer-to-peer
- posty, głosy, moderacja, kanały i treści społeczności pozostają poza łańcuchem i w trybie
  peer-to-peer

Ten proof of concept nie jest produkcyjnym uruchomieniem w standardzie Stage 2. Nie ma jeszcze
systemu dowodów, mechanizmu podważania, zaudytowanego kodu, działającego wdrożenia, ostatecznych
cen ani ostatecznego modelu zarządzania. Docelowo ma być domyślnie przejrzysty i z założenia zgodny
z prywatnością: rdzeń łańcucha jest publiczny, a przyszłe napiwki, płatności, nagrody i płynność nie
powinny wymuszać trwałych powiązań między tożsamością społecznościową a historią portfela.

## Dlaczego to ma znaczenie

Decentralizacja społeczności i tożsamości jest konieczna, ale nie wystarczy, by zdecentralizować
wszystkie media społecznościowe.

Jeśli aplikacje społecznościowe nadal zależą od kilku scentralizowanych kanałów ekonomicznych, łatwo
na nie naciskać, odciąć je od tej infrastruktury albo zagłodzić finansowo. Bitsocial Chain to
proponowana odpowiedź na tę drugą warstwę zależności.

## Relacja do aplikacji

Bitsocial Chain ma znajdować się pod aplikacjami Bitsocial, a nie je zastępować.

Efekt widoczny dla użytkowników powinien być następujący:

- społeczności pozostają peer-to-peer
- aplikacje pozostają zróżnicowane
- użytkownicy dostają praktyczne funkcje nazewnictwa i monetyzacji
- twórcy i społeczności mogą otrzymywać wsparcie niezależnie od używanego klienta
- wartość może przepływać przez ekosystem bez odtwarzania scentralizowanego właściciela platformy

## Dlaczego ten etap wypada tak wcześnie

Obecny plan główny umieszcza Bitsocial Chain zaraz po pierwszych kategoriach wejściowych:
imageboardach, forach i publicznej warstwie RPC, dzięki której te aplikacje stają się praktyczne dla
większej liczby użytkowników.

Ten moment ma znaczenie, ponieważ aplikacje społecznościowe potrzebują silnych efektów sieciowych.
Jeśli nazewnictwo, wsparcie, nagrody, napiwki i monetyzacja pojawią się zbyt późno, scentralizowana
konkurencja zbyt długo zachowa swoją największą przewagę.

## Zasady projektowe

Ponieważ Bitsocial Chain to wciąż proponowana infrastruktura, a nie uruchomiony produkt, plan
powinien pozostać zdyscyplinowany:

- Najpierw aplikacje i społeczności. Warstwa sieciowa ma wzmacniać realne produkty społecznościowe.
- Najpierw praktyczne funkcje. Nazwy, nagrody, napiwki i płatności łatwiej wyjaśnić niż abstrakcyjną
  architekturę finansową.
- Realny wkład ponad szum. Prymitywy ekonomiczne powinny nagradzać uczestnictwo, budowanie
  i wspieranie społeczności.
- Kuracja jest dozwolona. Aplikacje mogą kształtować rankingi, ustawienia domyślne i odkrywanie
  treści tak, by sprzyjały trwałym społecznościom.
- Dokładne mechanizmy pozostają otwarte. Ta strona wyjaśnia rolę Bitsocial Chain, a nie składa
  wiążącej obietnicy dotyczącej ostatecznej ekonomii.
