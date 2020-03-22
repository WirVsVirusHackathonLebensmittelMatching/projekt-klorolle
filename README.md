# Klopa project

> Klopa - deine digitale Fastlane zum Einkaufen. Mit unserer Lösung können Läden freie Zeitslots vergeben, in denen Einkäufe abgeholt sowie getätigt werden können. 

[![Docker Image CI](https://github.com/WirVsVirusHackathonLebensmittelMatching/projekt-klorolle/workflows/Docker%20Image%20CI/badge.svg)](https://github.com/WirVsVirusHackathonLebensmittelMatching/projekt-klorolle/actions?query=workflow%3A%22Docker+Image+CI%22)

## Inspiration

In Zeiten von Corona werden selbst alltägliche Aufgaben wie zum Beispiel das Einkaufen zu einer immer größeren Herausforderung. Zum einen sind die Regale der Märkte häufig leer und die Kunden bekommen folglich nicht die Produkte, die sie haben möchten. Außerdem sind meist viele Menschen zur gleichen Zeit im Supermarkt, was gewisse Infektionsrisiken mit sich bringen. In solchen Notfallsituationen besteht daher der dringende Bedarf an einer digitalen Lösung, die es den Kunden weitestgehend ermöglicht, große Menschenmengen zu vermeiden und trotzdem den eigenen Bedarf an Lebensmitteln und Hygieneartikeln decken zu können. Aus diesem Grund haben wir Klopa - eine digitale Fastlane zum Einkaufen - entwickelt.

## What it does

Nach erfolgreicher Registrierung können Ladenbesitzer verschiedene Zeitslots anbieten und den Verfügbarkeitsstatus fest definierter Produktgruppen laufend aktuell halten. Dabei kann jeder Laden selbst entscheiden, wann Zeitslots angeboten werden und wann nicht.

Kunden können in der App ihre Postleitzahl eingeben und erhalten daraufhin eine Liste von Supermärkte in der Umgebung angezeigt. Der Kunde kann dann einen freien Zeitslot im Supermarkt seiner Wahl auswählen und genau zu dieser Uhrzeit zusammen mit einer beschränkten Personenanzahl im Markt einkaufen gehen. So kann stets der nötige Mindestabstand zwischen den Kunden im Markt gewährleistet werden und physische Warteschlangen vor dem Markt vermieden werden.

Alternativ kann ein Kunde über die App eine persönliche Einkaufsliste zusammenstellen. Anschließend erhält er einen Zeitslot von einem Supermarkt in seiner Nähe zur Verfügung gestellt, in dem er die bestellten Produkte in einem dedizierten Drive-Through Bereich abholen kann und von Mitarbeitern des Marktes direkt in sein Auto geladen bekommt.

Dadurch bekommt der Kunde die Produkte, die er kaufen möchte und minimiert gleichzeitig das Gesundheitsrisiko für sich, seine Mitmenschen und die Mitarbeiter der Märkte.

## How we built it

## Challenges we ran into

* Kontakt zu betroffenen Personengruppen herstellen, um Bedarf und Anforderungen zu ermitteln

## Accomplishments that we're proud of

Es wurden zwei verschiedene App Prototypen entwickelt: Eine Kunden App und eine Shop App.

**Shop App**
* Supermärkte können sich in einer Startmaske registrieren bzw. danach einloggen.
* Verfügbarkeiten zu Produkten können gepflegt werden (knapp, leer, verfügbar, keine Angabe)
* Wenn Bestellungen von Kunden eingehen, bekommt der Supermarkt die Bestellung direkt in der App angezeigt.

**Kunden App**
* Anzeige eines Login-Screens für bereits registrierte Kunden oder Neuregistrierung
* Kunde gibt seine PLZ an
* Dem Kunden wird eine Liste an registrierten Märkten in seiner Region angezeigt
* Nach Auswahl eines Marktes werden Shopinfos angezeigt, z.B. Verfügbarkeitsstatus zu verschiedenen Produkten
* Wahl zwischen Shop yourself bzw. PickUp
* Kunde bekommt Timeslot zur Abholung/Einkaufen zugewiesen.

## What we learned & future outlook

**Effizienter Ablauf des Bestellprozesses muss gewährleistet werden**
* Authentifizierungsprozess für Kunden
* Kompatibilität zwischen Kassensystem und Bezahlmethode
* Anbindung Warenwirtschaftssystem / Schnittstelle App und Marktsystem
* Personenbeschränkung und Mindesabstand muss gewährleistet werden

**Produktauswahl**
* Produktvielfalt muss eingeschränkt werden (z.B. gekühlte Produkte)
* Wie kann eine Preis- und Qualitätsstruktur der Produkte eingebunden werden?

**Wirtschaftlichkeit**
* Rentabilität für Supermärkte?

**Ressourcen**
* Überlastung Mitarbeiter
* Warenverfügbarkeiten

**Community**
* Job-Börse
* Private Nachbarschaftshilfe
* Sammelbestellungen über Vereine


## What's next for 1_001_b_lebensmittel-matching_Projekt-Klorolle

* Rollout Prozess mit Einzelhändlern anstoßen.

**Zusätzliche Funktionen in die App integrieren**
* Timeslots für den Kunden auswählbar machen
* E-Mail Notifications einrichten

## Links
- [Docs](https://wirvsvirushackathonlebensmittelmatching.github.io/projekt-klorolle/)
- [Click Dummy](https://www.figma.com/proto/vX7wGCbmJiXXseFhnChrDI/Endkunde)
- [Demo index](http://klopa-ci.dreier.cloud/)
- [Demo Consumer App](http://klopa-ci.dreier.cloud/consumer/)
- [Demo Shop App](http://klopa-ci.dreier.cloud/shops/)
- [Swagger docs](http://klopa-ci.dreier.cloud/api/docs/)

## Development
```
cd backend/
yarn
yarn watch
```

## License

Licensed under MIT.
