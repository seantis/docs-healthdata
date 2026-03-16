---
title: Plattform-Übersicht
---

# Modulübersicht

HealthData.ai ist eine webbasierte Plattform für klinisches Datenmanagement und medizinische Forschung.

<div class="grid cards" markdown>

-   :material-clipboard-text-outline:{ .lg .middle } **Klinische Dokumentation**

	---

	Strukturierte SOAP-basierte Dokumentation und Berichte.

	[:octicons-arrow-right-24: Mehr erfahren](clinical-documentation.md)

-   :material-database-outline:{ .lg .middle } **Datenerhebung**

	---

	Einheitliche multizentrische Erfassung und Validierung.

	[:octicons-arrow-right-24: Mehr erfahren](data-collection.md)

-   :material-flask-outline:{ .lg .middle } **Medizinische Forschung**

	---

	Studiengeeignete Datensätze mit geregeltem Zugriff.

	[:octicons-arrow-right-24: Mehr erfahren](medical-research.md)

-   :material-test-tube:{ .lg .middle } **Biobanking**

	---

	Durchgängige Verwaltung des Probenlebenszyklus.

	[:octicons-arrow-right-24: Mehr erfahren](biobanking.md)

-   :material-image-multiple-outline:{ .lg .middle } **Medizinische Bildgebung**

	---

	PACS-Integration und strukturierte Bildgebungsprozesse.

	[:octicons-arrow-right-24: Mehr erfahren](medical-imaging.md)

-   :material-brain:{ .lg .middle } **Maschinelles Lernen**

	---

	Modellentwicklung und reproduzierbare Evaluation.

	[:octicons-arrow-right-24: Mehr erfahren](machine-learning.md)

-   :material-account-heart-outline:{ .lg .middle } **Patientenzugang**

	---

	Digitale Kontaktpunkte für Fragebögen und Follow-up.

	[:octicons-arrow-right-24: Mehr erfahren](patient-access.md)

-   :material-table-large:{ .lg .middle } **Datenmodell**

	---

	Flexibles EAV-basiertes Modell für klinische Daten und Forschung.

	[:octicons-arrow-right-24: Mehr erfahren](../data-model.md)

</div>

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
