---
title: Interfaces
---

# Interfaces

The platform is designed for integration into existing clinical and research IT infrastructures. The focus is on open, vendor-neutral standards that ensure long-term interoperability and vendor independence.

## Supported Standards

* **DICOM** — Transfer, query, and archiving of image series with PACS systems
* **HL7 FHIR** — Exchange of clinical data and findings with HIS, EPR, and other systems
* **REST API** — Programmatic access to data for third-party systems and research applications

## HL7 FHIR

**HL7 FHIR** (Fast Healthcare Interoperability Resources) is the leading international standard for the exchange of clinical data. It defines a uniform, web-based model for representing health information as discrete resources — such as patients, encounters, diagnoses, medications, observations, and documents.

FHIR resources are exchanged as JSON or XML over standard HTTP, making integration straightforward and technology-agnostic. Each resource type has a defined structure and can be extended with profiles for national or institutional requirements.

### Clinical System Integration

The platform connects to hospital information systems (HIS), electronic patient records (EPR), and laboratory systems via HL7 FHIR. Structured data such as diagnoses, medications, findings, and encounters can be exchanged bidirectionally.

Mapping to local terminology and coding systems (e.g. SNOMED CT, LOINC, ICD) is supported, allowing institution-specific implementations without compromising interoperability.

### Supported FHIR Resources

The following FHIR resource types are supported for exchange and mapping:

* **Patient** — demographics and identifiers
* **Encounter** — consultations and admissions
* **Condition** — diagnoses and problem list entries
* **Observation** — vital signs, laboratory values, and measurement findings
* **MedicationRequest / MedicationStatement** — prescriptions and medication history
* **DiagnosticReport** — structured reports including imaging findings
* **ImagingStudy** — references to DICOM image series
* **Questionnaire / QuestionnaireResponse** — structured forms and PROs
* **Consent** — patient consent records

### Benefits of FHIR

- standardized communication with other systems
- straightforward integration into existing IT landscapes
- support for clinical data models and established terminologies

## REST API

In addition to FHIR, the platform provides a REST-based API. This allows developers to access data and platform functions directly.

Key characteristics:

- secure authentication using token-based mechanisms
- structured endpoints for data and process functions
- flexible integration into third-party systems, portals, and analytics tools

## Imaging Integration

DICOM interfaces enable direct connectivity to PACS systems. Image series can be queried, retrieved, and displayed in context alongside structured clinical data.

Supported DICOM functions include:

* Query and retrieval of image series (DICOM Query/Retrieve)
* Referencing of studies and series via UIDs
* Structured finding links to image data

## Research and Export Interfaces

Platform-specific export formats for studies and registries can be configured, including pseudonymisation and audit trails in line with data protection requirements.

Data can be exported in tabular formats (CSV) as well as structured formats such as FHIR bundles or JSON for downstream analysis pipelines.

## Data Integration

The platform can be integrated into existing system landscapes, for example:

- hospital information systems
- registry systems
- research systems

This enables seamless data exchange and reduces manual effort.

## API Access

The REST API provides programmatic access to platform data for third-party applications, custom dashboards, and research tools. Authentication is handled via token-based mechanisms with role-based access controls.

API documentation and integration examples are available on request.

---

**See also:**
[Data Model](data-model.md) &middot;
[Medical Imaging](modules/medical-imaging.md) &middot;
[Clinical Documentation](modules/clinical-documentation.md)
