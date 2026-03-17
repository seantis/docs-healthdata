---
title: Schnittstellen
---

# Schnittstellen

Die Plattform ist für die Integration in bestehende klinische und forschungsnahe IT-Infrastrukturen ausgelegt. Im Vordergrund stehen offene, herstellerunabhängige Standards, die eine langfristige Interoperabilität und Investitionssicherheit gewährleisten.

## Unterstützte Standards

* **DICOM** — Übertragung, Abfrage und Archivierung von Bildserien mit PACS-Systemen
* **HL7 FHIR** — Austausch klinischer Daten und Befunde mit KIS, EPD und weiteren Systemen
* **REST-API** — Programmatischer Zugriff auf Daten für Drittsysteme und Forschungsapplikationen

## HL7 FHIR

**HL7 FHIR** (Fast Healthcare Interoperability Resources) ist der führende internationale Standard für den Austausch klinischer Daten. Er definiert ein einheitliches, webbasiertes Modell zur Darstellung von Gesundheitsinformationen als einzelne Ressourcen — etwa Patienten, Konsultationen, Diagnosen, Medikamente, Beobachtungen und Dokumente.

FHIR-Ressourcen werden als JSON oder XML über standardäres HTTP ausgetauscht, was die Integration technologieunabhängig und unkompliziert macht. Jeder Ressourcentyp hat eine definierte Struktur und kann über Profile an nationale oder institutionelle Anforderungen angepasst werden.

### Integration klinischer Systeme

Die Plattform lässt sich mit Krankenhausinformationssystemen (KIS), elektronischen Patientendossiers (EPD) und Laborsystemen über HL7 FHIR verbinden. Strukturierte Daten wie Diagnosen, Medikamente, Befunde und Konsultationen können bidirektional ausgetauscht werden.

Die Abbildung auf lokal verwendete Terminologien und Kodiersysteme (z. B. SNOMED CT, LOINC, ICD) wird unterstützt, sodass institutionsspezifische Implementierungen ohne Einschränkung der Interoperabilität möglich sind.

### Unterstützte FHIR-Ressourcen

Folgende FHIR-Ressourcentypen werden für Austausch und Mapping unterstützt:

* **Patient** — demografische Angaben und Identifikatoren
* **Encounter** — Konsultationen und stationäre Aufenthalte
* **Condition** — Diagnosen und Problemlisteneinträge
* **Observation** — Vitalparameter, Laborwerte und Messbefunde
* **MedicationRequest / MedicationStatement** — Verschreibungen und Medikationshistorie
* **DiagnosticReport** — strukturierte Berichte inklusive Bildbefunde
* **ImagingStudy** — Referenzen auf DICOM-Bildserien
* **Questionnaire / QuestionnaireResponse** — strukturierte Formulare und PROs
* **Consent** — Einwilligungsdokumente

### Vorteile von FHIR

- standardisierte Kommunikation mit anderen Systemen
- einfache Integration in bestehende IT-Landschaften
- Unterstützung klinischer Datenmodelle und etablierter Terminologien

## REST API

Zusätzlich zu FHIR stellt die Plattform eine REST-basierte API bereit. Diese ermöglicht Entwicklern den direkten Zugriff auf Daten und Funktionen.

Eigenschaften:

- sichere Authentifizierung über tokenbasierte Verfahren
- strukturierte Endpunkte für Daten und Prozessfunktionen
- flexible Integration in Drittsysteme, Portale und Analysewerkzeuge

## Bildgebungsintegration

DICOM-Schnittstellen ermöglichen die direkte Anbindung an PACS-Systeme. Bildserien können abgefragt, abgerufen und im Kontext strukturierter klinischer Daten dargestellt werden.

Unterstützte DICOM-Funktionen umfassen:

* Abfrage und Abruf von Bildserien (DICOM Query/Retrieve)
* Referenzierung von Studien und Serien über UIDs
* Strukturierte Befundverknüpfung mit Bilddaten

## Forschungs- und Exportschnittstellen

Plattformspezifische Exportformate für Studien und Register lassen sich konfigurieren, inklusive Pseudonymisierung und Auditpfaden gemäss Datenschutzanforderungen.

Daten können in tabellarischen Formaten (CSV) sowie in strukturierten Formaten wie FHIR-Bundles oder JSON für nachgelagerte Analysepipelines exportiert werden.

## Datenintegration

Die Plattform kann in bestehende Systemlandschaften integriert werden, beispielsweise in:

- klinische Informationssysteme
- Registersysteme
- Forschungssysteme

Dies ermöglicht einen nahtlosen Datenaustausch und reduziert manuelle Aufwände.

## API-Zugang

Die REST-API ermöglicht den programmatischen Zugriff auf Plattformdaten für Drittsysteme, eigene Dashboards und Forschungstools. Die Authentifizierung erfolgt über Token-basierte Mechanismen mit rollenbasierter Zugriffssteuerung.

API-Dokumentation und Integrationsbeispiele sind auf Anfrage verfügbar.

---

Siehe auch: [Datenmodell](data-model.md) · [Medizinische Bildgebung](modules/medical-imaging.md) · [Klinische Dokumentation](modules/clinical-documentation.md)
