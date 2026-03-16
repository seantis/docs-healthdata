---
title: Plattform-Übersicht
---

# Modulübersicht

HealthData.ai ist eine webbasierte Plattform für klinisches Datenmanagement und medizinische Forschung.

- **[Klinische Dokumentation](clinical-documentation.md)**
- **[Datenerhebung](data-collection.md)**
- **[Medizinische Forschung](medical-research.md)**
- **[Biobanking](biobanking.md)**
- **[Medizinische Bildgebung](medical-imaging.md)**
- **[Maschinelles Lernen](machine-learning.md)**
- **[Patientenzugang](patient-access.md)**

## Internationalisierung und Benutzeroberfläche

Die Benutzeroberfläche kann in mehreren Sprachen bereitgestellt werden und orientiert sich automatisch an den Spracheinstellungen des Browsers. Die Webanwendung basiert auf offenen Standards (HTTP(S), HTML, CSS, JavaScript) und benötigt clientseitig lediglich einen modernen Browser.

## Performance, Skalierbarkeit und Erweiterbarkeit

Die Architektur folgt einem bewährten Webanwendungsansatz mit zentraler Datenhaltung und skalierbaren Webservern. Bei steigender Last kann die Plattform horizontal auf mehrere Server verteilt werden, um Performance und Ausfallsicherheit zu erhöhen.

Das flexible Datenmodell erlaubt das Ergänzen oder Anpassen von Feldern und Metadaten ohne Eingriffe in die Kernlogik. Konfigurierbare Fragebögen und Protokolle unterstützen fachliche Erweiterungen im laufenden Betrieb.

## EAV-Datenmodell

HealthData.ai nutzt den Entity-Attribute-Value-Ansatz (EAV), bei dem Attribute als Datensätze statt als feste Spalten geführt werden. Dadurch können neue Merkmale ohne Schemaänderung ergänzt und mit Metadaten wie Autor oder Erfassungszeit historisiert werden.

Für forschungsnahe Analysen werden Daten periodisch in tabellarische Strukturen überführt und als aufbereitete Exporte, etwa im CSV-Format, bereitgestellt.

## Standards und Schnittstellen (FHIR)

Die integrierte REST-API basiert auf dem HL7-FHIR-Standard und ermöglicht den strukturierten, sicheren Datenaustausch mit externen Systemen wie ERP, Archiv oder MPI. Durch die ressourcenbasierte Modellierung eignet sich FHIR besonders für interoperable, auch mobile Anwendungsfälle.
