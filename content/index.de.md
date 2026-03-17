---
title: HealthData.ai Dokumentation
description: Dokumentation der medizinischen Forschungsplattform HealthData.ai.
hide:
  - toc
---

# HealthData.ai Dokumentation

HealthData.ai ist eine modulare, webbasierte Plattform zur strukturierten Erfassung, Verwaltung und Auswertung von Gesundheitsdaten. Sie wurde entwickelt, um klinische Versorgung und Forschung effizient miteinander zu verbinden und dabei hohe Anforderungen an Datenschutz, Sicherheit und Skalierbarkeit zu erfüllen.

Die Plattform ermöglicht es Organisationen, komplexe medizinische Prozesse digital abzubilden, Daten standardisiert zu erfassen und in Echtzeit auszuwerten. Durch ihre flexible Architektur kann HealthData.ai sowohl in kleineren Projekten als auch in grossen, internationalen Netzwerken eingesetzt werden.

Zu den zentralen Funktionen gehören:

- strukturierte Datenerfassung über konfigurierbare Formulare
- rollenbasierte Zugriffskontrolle für unterschiedliche Nutzergruppen
- flexible Workflows zur Abbildung medizinischer Prozesse
- Echtzeitauswertungen und Dashboards
- standardisierte Schnittstellen für den Datenaustausch

## HealthData.ai in Zahlen

HealthData.ai ist auf den Einsatz in grossen und komplexen Umgebungen ausgelegt. Die Plattform unterstützt eine hohe Anzahl an Nutzern, Institutionen und Datensätzen und kann flexibel an wachsende Anforderungen angepasst werden.

Typische Einsatzszenarien umfassen:

- mehrere tausend bis Millionen Patientendatensätze
- internationale Nutzung über verschiedene Institutionen hinweg
- grosse Mengen strukturierter und unstrukturierter Daten
- Integration von Bilddaten und Biosamples

Diese Skalierbarkeit stellt sicher, dass die Plattform sowohl für einzelne Kliniken als auch für nationale oder internationale Register geeignet ist.



**[www.healthdata.ai](https://www.healthdata.ai)**

<div class="grid cards" markdown>

-   :material-rocket-launch-outline:{ .lg .middle } **Klinische Dokumentation**

    ---

    SOAP-basierte elektronische Krankenakten.

    [:octicons-arrow-right-24: Mehr erfahren](modules/clinical-documentation.md)

-   :material-database-outline:{ .lg .middle } **Datenerhebung**

    ---

    Sichere multizentrische Datenerhebung.

    [:octicons-arrow-right-24: Mehr erfahren](modules/data-collection.md)

-   :material-flask-outline:{ .lg .middle } **Medizinische Forschung**

    ---

    Anonymisierte klinische Daten für die Forschung.

    [:octicons-arrow-right-24: Mehr erfahren](modules/medical-research.md)

-   :material-shield-lock-outline:{ .lg .middle } **Informationssicherheit und Datenschutz**

    ---

    YubiKey, SSL, AES, ISO 27001.

    [:octicons-arrow-right-24: Mehr erfahren](security/index.md)


-   :material-transit-connection-variant:{ .lg .middle } **Schnittstellen**

    ---

    FHIR, DICOM, REST-API.

    [:octicons-arrow-right-24: Mehr erfahren](interfaces.md)

-   :material-email-outline:{ .lg .middle } **Kontakt & Support**

    ---

    Direkter Kontakt für Fragen und Unterstützung.

    [:octicons-arrow-right-24: Kontakt](about/contact.md)

</div>

![HealthData.ai Architektur](img/Architecture.png)

Ärzte und Patientengeräte greifen auf das System zu und authentifizieren sich sicher über IAM mit Zwei-Faktor-Authentifizierung. 

Nach der Anmeldung interagieren sie mit dem Portal, wo sie Daten eingeben, Berichte einsehen und Arbeitsabläufe verwalten können. Das Portal kommuniziert mit einer zentralen Datenschicht, die klinische Informationen, Bilddaten, Biobankdaten und pseudonymisierte Forschungsdaten speichert.

Diese Datenschicht tauscht über eine REST-API auch Informationen mit externen Systemen wie ERP und Archiven aus. Gleichzeitig werden die gespeicherten Daten durch Deep-Learning-Modelle analysiert, um Erkenntnisse für die klinische Entscheidungsunterstützung und Forschung zu gewinnen. Diese Erkenntnisse fließen zurück ins Portal, wo sie den Nutzern als Berichte, Statistiken und verwertbare Informationen präsentiert werden.