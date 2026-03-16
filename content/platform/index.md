---
title: Platform Overview
---

# Platform Overview

HealthData.ai is a web-based platform for clinical data management and medical research.

- **[Clinical Documentation](clinical-documentation.md)**
- **[Data Collection](data-collection.md)**
- **[Medical Research](medical-research.md)**
- **[Biobanking](biobanking.md)**
- **[Medical Imaging](medical-imaging.md)**
- **[Machine Learning](machine-learning.md)**
- **[Patient Access](patient-access.md)**

## Internationalization and User Interface

The user interface can be provided in multiple languages and automatically follows the visitor's browser language settings. The web application is built on open standards (HTTP(S), HTML, CSS, JavaScript) and requires only a modern browser on the client side.

## Performance, Scalability, and Extensibility

The architecture follows a proven web application model with centralized data storage and scalable web servers. As demand grows, the platform can scale horizontally across multiple servers to improve performance and availability.

The flexible data model allows fields and metadata to be added or adjusted without changes to core application logic. Configurable questionnaires and protocols support domain-specific extensions during ongoing operations.

## EAV Data Model

HealthData.ai uses an Entity-Attribute-Value (EAV) model, in which attributes are stored as records rather than fixed columns. This enables new attributes to be added without schema migrations and supports historization through metadata such as author and capture time.

For research-oriented analysis, data is periodically transformed into tabular structures and provided as prepared exports, for example in CSV format.

## Standards and Interfaces (FHIR)

The integrated REST API is based on the HL7 FHIR standard and enables structured, secure data exchange with external systems such as ERP, archive, or MPI. Its resource-based model is particularly suitable for interoperable, including mobile, use cases.
