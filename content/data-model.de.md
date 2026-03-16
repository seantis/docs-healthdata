---
title: Datenmodell
---

# Datenmodell

HealthData.ai verwendet ein flexibles, metadatengesteuertes Datenmodell auf Basis des **Entity–Attribute–Value (EAV)**-Prinzips. Dadurch können Institutionen eigene Datenstrukturen definieren und erweitern, ohne Schema-Migrationen oder Software-Deployments durchführen zu müssen.

## Entity–Attribute–Value (EAV)

Das EAV-Prinzip trennt die Struktur der Daten von ihrem Inhalt. Anstelle fixer Spalten in einer relationalen Tabelle wird jeder Datenpunkt als Tripel gespeichert:

| Komponente | Beschreibung |
|------------|--------------|
| **Entity** | Das Subjekt der Daten, z. B. eine Patientin oder ein Patient, eine Konsultation oder eine Probe |
| **Attribute** | Die Definition des Datenfeldes, inklusive Typ, Bezeichnung und Validierungsregeln |
| **Value** | Der tatsächlich erfasste Wert für eine bestimmte Entity und ein bestimmtes Attribut |

Dieser Ansatz erlaubt es, beliebig viele Attribute pro Entity-Typ zu definieren und neue Felder zur Laufzeit hinzuzufügen, ohne das zugrundeliegende Datenbankschema zu ändern.

## Feldtypen

Attribute lassen sich mit verschiedenen Feldtypen konfigurieren, um der Art der erfassten Daten gerecht zu werden:

* **Text** — Freitexteingabe mit optionaler Längenbeschränkung
* **Zahl** — Ganzzahl oder Dezimalwert mit optionaler Bereichsvalidierung
* **Datum / Datum+Zeit** — mit konfigurierbarem Format und Plausibilitätsprüfungen
* **Boolean** — Ja/Nein- oder Wahr/Falsch-Felder
* **Einfachauswahl** — vordefinierte Optionsliste (kodierte Werte)
* **Mehrfachauswahl** — mehrere Auswahlen aus einer vordefinierten Liste
* **Code** — strukturierte Werte mit Systemreferenz, z. B. ICD, SNOMED CT, LOINC
* **Datei** — Anhang-Upload mit Typ- und Grössenbeschränkungen

## Versionierung und Nachvollziehbarkeit

Jede Änderung an einem Wert wird mit Zeitstempel, Benutzerreferenz und Änderungsgrund gespeichert. Damit entsteht ein vollständiger Audit-Trail, der klinischen und regulatorischen Anforderungen genügt.

Auch Attributdefinitionen werden versioniert, sodass Formulare und Fragebögen sich über die Zeit weiterentwickeln können, während historische Daten weiterhin korrekt interpretierbar bleiben — bezogen auf die zum Zeitpunkt der Erfassung aktive Definitionsversion.

## Formulare und Fragebögen

Attribute werden in **Formulare** gruppiert, welche Struktur und Layout der Eingabemasken definieren. Formulare können in Abschnitte gegliedert werden, unterstützen bedingte Sichtbarkeitsregeln und können Vollständigkeitsanforderungen pro Rolle oder Workflow-Status durchsetzen.

Fragebögen folgen demselben zugrundeliegenden Modell und können direkt auf **HL7 FHIR Questionnaire**-Ressourcen abgebildet werden.

## Kodierte Werte und Terminologien

Code-Felder referenzieren externe oder interne Terminologiesysteme. Unterstützte Referenzsysteme umfassen:

* **ICD-10 / ICD-11** — Diagnosekodierung
* **SNOMED CT** — klinische Konzepte
* **LOINC** — Labor- und klinische Beobachtungen
* **ATC** — Medikamentenklassifikation
* Eigene institutionelle Kodelisten

Mappings zwischen internen Codes und externen Systemen können unabhängig von der Formulardefinition gepflegt und versioniert werden.

## Forschungsexport

Für Forschungszwecke werden EAV-Daten in eine flache, tabellarische Struktur überführt. Jedes Attribut wird zu einer Spalte, jede Entity zu einer Zeile. Die Transformation ist reproduzierbar und dokumentiert, sodass exportierte Datensätze auf die ursprünglichen Definitionen zurückgeführt werden können.

Vor dem Export wird eine Pseudonymisierung angewendet, bei der direkte Identifikatoren durch forschungsspezifische Pseudonyme ersetzt werden.

---

Siehe auch: [Klinische Dokumentation](modules/clinical-documentation.md) · [Datenerhebung](modules/data-collection.md) · [Schnittstellen](interfaces.md)
