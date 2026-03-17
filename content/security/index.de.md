---
title: Informationssicherheit und Datenschutz
---

# Informationssicherheit und Datenschutz

Seantis AG legt grössten Wert auf Datenschutz und Informationssicherheit. Über die Plattform werden schützenswerte Gesundheitsdaten übertragen und verarbeitet. Entsprechend der jeweiligen Schutzstufe werden Daten mit angemessenen technischen und organisatorischen Massnahmen geschützt.

Auch Datenspeicherung und Datenhaltung orientieren sich konsequent an den Schutzanforderungen.

## Informationssicherheits-Management (ISO/IEC 27001:2022)

Qualität und Informationssicherheit gehören zu den zentralen Grundwerten der Seantis AG. Das Informationssicherheits-Managementsystem (ISMS) der Seantis AG ist gemäss ISO/IEC 27001:2022 aufgebaut und wird regelmässig auditiert.

!!! info "ISO/IEC 27001:2022"
    Weitere Informationen zur Zertifizierung und zum Sicherheitsansatz von Seantis AG:
    [Informationssicherheit ISO 27001](https://www.seantis.ch/portrait/informationssicherheit-iso-27001/)

ISO 27001 ist eine internationale Norm für Informationssicherheit und beschreibt Anforderungen für Aufbau, Betrieb und kontinuierliche Verbesserung eines dokumentierten ISMS.

## Benutzerverwaltung und Zugriffsrechte

Die Plattform bietet eine umfassende Benutzerverwaltung mit feingliedrigem Rollen- und Berechtigungskonzept. Alle Benutzerkonten arbeiten mit persönlichem Login; eine 2-Faktor-Authentifizierung ist per YubiKey oder mTAN möglich.

Zugriffsrechte sind auf Institutionsebene getrennt, sodass Benutzerinnen und Benutzer nur auf Daten der eigenen Institution zugreifen können. Innerhalb einer Institution sind kritische Aktionen, wie das Schliessen einer Konsultation, an definierte Rollen gebunden.

### Rollen- und Berechtigungskonzept

Das Zugriffskonzept basiert auf einem rollenbasierten Modell (RBAC). Benutzer erhalten Berechtigungen über definierte Rollen, die flexibel kombiniert werden können.

Grundprinzipien:

- Least Privilege mit minimal notwendigen Rechten
- Default Deny ohne explizite Freigabe kein Zugriff
- klare Trennung von Verantwortlichkeiten

Dieses Modell ermöglicht eine sichere und nachvollziehbare Steuerung von Zugriffsrechten.

### Institutionen und Zugriffskontext

HealthData.ai ist mandantenfähig aufgebaut. Der Zugriff auf Daten erfolgt im Kontext von Institutionen, wodurch eine klare Trennung zwischen Organisationen gewährleistet wird.

Eigenschaften:

- Datenisolierung zwischen Institutionen
- flexible Zuordnung von Benutzern zu mehreren Organisationen
- Unterstützung komplexer Netzwerkstrukturen

### Patientenzugriff und Freigaben

Der Zugriff auf Patientendaten wird zusätzlich auf individueller Ebene gesteuert. Dies ermöglicht eine feingranulare Kontrolle über sensible Informationen.

Funktionen:

- explizite Freigaben für Patientendaten
- Einschränkung auf bestimmte Datensätze
- Kombination von Rollen- und Objektberechtigungen

## Datensicherheit und Datenschutz

Die Kommunikation zwischen Browser und Server erfolgt verschlüsselt über 256-bit TLS. Besonders sensible personenbezogene Daten werden verschlüsselt in der Datenbank gespeichert (AES).

Als Schweizer Unternehmen unterliegt Seantis AG dem Bundesgesetz über den Datenschutz (DSG). Sensible Daten werden ausschliesslich bei einem Schweizer Cloud-Provider in zertifizierten Schweizer Rechenzentren verarbeitet.

## Authentifizierung und IAM

HealthData.ai unterstützt moderne Authentifizierungsverfahren:

- OAuth 2.0
- OpenID Connect
- SAML

Zusätzlich wird Multi-Factor Authentication unterstützt, unter anderem mit:

- SMS-basierten Codes
- Authenticator-Apps auf Basis von TOTP
- Hardware-Token wie YubiKey

## Verschlüsselung

- Verschlüsselung der Datenübertragung mittels TLS
- Verschlüsselung sensibler Daten im Ruhezustand

## Technische und organisatorische Massnahmen

Informationssicherheit ist kein Zustand, sondern ein kontinuierlicher Prozess. Deshalb setzt Seantis AG auf eine Kombination aus technischen und organisatorischen Massnahmen nach Best Practices:

- 2-Faktor-Authentifizierung (YubiKey oder mTAN)
- Verschlüsselung der Übertragung (TLS 256-bit)
- Netzwerksicherheit (Firewalls und Network Security)
- Intrusion Detection und Schutzmechanismen (z. B. Fail2ban)
- Zugriffskontrolle mit Role-Based Access Control (RBAC)
- Datenmaskierung und Anonymisierung (z. B. in Logfiles und Analytics)
- Aktive Systemüberwachung (Monitoring)
- Regelmässige Updates (Release- und Patch-Management)
- Automatisierte Schwachstellen-Scans
- Backups mit Wiederherstellungstests (inkl. Offsite-Strategien)
- Schulung und Training für Mitarbeitende (z. B. Tabletop-Übungen)
- Meldestelle für Schwachstellen (Vulnerability Disclosure Policy)
- Strukturierte Softwareauslieferung über DevOps-Prozesse
- Regelmässige Penetrationstests
- Datensparsamkeit und definierte Aufbewahrungsrichtlinien

## Audit Trail

Alle relevanten Aktivitäten, insbesondere Lesen und Schreiben, werden vollständig protokolliert. Der Audit Trail dokumentiert dabei:

- Wann: Zeitpunkt der Aktion
- Wer: Autorin oder Autor
- Wo: Kontext (z. B. Patient) und betroffenes Datenfeld
- Was: alter und neuer Wert

Zusätzlich stehen Benutzer- und Systemlogs für Audits, forensische Analysen und Compliance-Anforderungen zur Verfügung.

## Penetration Testing und Vulnerability Disclosure

- regelmässige Durchführung von Penetrationstests
- definierte Prozesse zur Meldung von Sicherheitslücken im Rahmen einer Vulnerability Disclosure Policy

## Hosting und Datenstandort

- Hosting in zertifizierten Rechenzentren in der Schweiz
- klare Trennung von Entwicklungs-, Test- und Produktionsumgebungen
