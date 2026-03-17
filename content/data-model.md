---
title: Data Model
---

# Data Model

HealthData.ai uses a flexible, metadata-driven data model based on the **Entity–Attribute–Value (EAV)** pattern. This enables institutions to define and extend their own data structures without requiring schema migrations or software deployments.

## System Architecture

HealthData.ai is based on a modern, modular web architecture. Individual components are clearly separated and can be developed independently.

Characteristics:

- multi-tenant architecture
- modular extensibility
- clear separation of frontend and backend

## Technology Stack

The platform uses proven technologies:

- Backend: Python with Pyramid Framework
- Database: PostgreSQL
- ORM: SQLAlchemy

These technologies ensure stability, maintainability, and strong performance.

## Entity–Attribute–Value (EAV)

The EAV pattern separates the structure of data from its content. Instead of fixed columns in a relational table, each data point is stored as a triple:

| Component | Description |
|-----------|-------------|
| **Entity** | The subject of the data, e.g. a patient, a consultation, or a sample |
| **Attribute** | The definition of the data field, including type, label, and validation rules |
| **Value** | The actual recorded value for a specific entity and attribute |

This approach allows any number of attributes to be defined per entity type, and new fields to be added at runtime without touching the underlying database schema.

The flexibility of the EAV model makes it possible to extend complex medical data structures dynamically without modifying the core application.

## Field Types

Attributes can be configured with different field types to match the nature of the data being captured:

* **Text** — free-text input with optional length constraints
* **Number** — integer or decimal values with optional range validation
* **Date / DateTime** — with configurable format and plausibility checks
* **Boolean** — yes/no or true/false fields
* **Single select** — predefined option list (coded values)
* **Multiple select** — multiple selections from a predefined list
* **Code** — structured values with system reference, e.g. ICD, SNOMED CT, LOINC
* **File** — attachment upload with type and size restrictions

## Versioning and Auditability

Every change to a value is stored with timestamp, user reference, and reason for change. This creates a full audit trail that satisfies clinical and regulatory requirements.

Attribute definitions are also versioned, allowing forms and questionnaires to evolve over time while historical data remains correctly interpretable against the definition version active at the time of entry.

## Forms and Questionnaires

Attributes are grouped into **forms**, which define the structure and layout of data entry screens. Forms can be organised into sections, support conditional visibility rules, and enforce completion requirements per role or workflow state.

Questionnaires follow the same underlying model and can map directly to **HL7 FHIR Questionnaire** resources for interoperability.

## Coded Values and Terminologies

Code-type fields reference external or internal terminology systems. Supported reference systems include:

* **ICD-10 / ICD-11** — diagnosis coding
* **SNOMED CT** — clinical concepts
* **LOINC** — laboratory and clinical observations
* **ATC** — medication classification
* Custom institutional code lists

Mappings between internal codes and external systems can be maintained and versioned independently of the form definition.

## Research Export

For research use, EAV data is transformed into a flat, tabular structure. Each attribute becomes a column, and each entity a row. The transformation is reproducible and documented, ensuring that exported datasets can be traced back to the original definitions.

Pseudonymisation is applied before export, substituting direct identifiers with research-specific pseudonyms.

## Scalability and Performance

HealthData.ai is optimized for high load and large data volumes.

Characteristics:

- horizontal scaling across multiple application nodes
- efficient processing of structured and unstructured data
- optimized database access for capture, search, and export

---

**See also:**
[Clinical Documentation](modules/clinical-documentation.md) &middot;
[Data Collection](modules/data-collection.md) &middot;
[Interfaces](interfaces.md)
