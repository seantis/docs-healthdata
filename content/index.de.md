---
title: HealthData.ai Dokumentation
description: Dokumentation der medizinischen Forschungsplattform HealthData.ai.
hide:
  - toc
---

# HealthData.ai Dokumentation

HealthData.ai ist eine digitale Plattform für die Integration und Analyse von Gesundheitsdaten. Sie unterstützt medizinische Fachpersonen bei digitalen Registern, multizentrischen Kohortenstudien und Krankheitsregistern mit strukturierter elektronischer Dokumentation nach der SOAP-Methode. Die Plattform bietet zudem Biobanking, medizinische Bildarchivierung (PACS) sowie maschinelles Lernen für komplexe Datenanalysen – mit Echtzeitzugriff auf anonymisierte Daten für Forschung und Qualitätsmanagement.



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