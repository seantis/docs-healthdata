---
title: Platform Overview
---

# Modules Overview

HealthData.ai is a web-based platform for clinical data management and medical research.

<div class="grid cards" markdown>

-   :material-clipboard-text-outline:{ .lg .middle } **Clinical Documentation**

	---

	Structured SOAP-based records and reports.

	[:octicons-arrow-right-24: Learn more](clinical-documentation.md)

-   :material-database-outline:{ .lg .middle } **Data Collection**

	---

	Consistent multicentre data capture and validation.

	[:octicons-arrow-right-24: Learn more](data-collection.md)

-   :material-flask-outline:{ .lg .middle } **Medical Research**

	---

	Study-ready datasets with governed access.

	[:octicons-arrow-right-24: Learn more](medical-research.md)

-   :material-test-tube:{ .lg .middle } **Biobanking**

	---

	End-to-end sample lifecycle management.

	[:octicons-arrow-right-24: Learn more](biobanking.md)

-   :material-image-multiple-outline:{ .lg .middle } **Medical Imaging**

	---

	PACS integration and structured imaging workflows.

	[:octicons-arrow-right-24: Learn more](medical-imaging.md)

-   :material-brain:{ .lg .middle } **Machine Learning**

	---

	Model development and reproducible evaluation.

	[:octicons-arrow-right-24: Learn more](machine-learning.md)

-   :material-account-heart-outline:{ .lg .middle } **Patient Access**

	---

	Digital touchpoints for questionnaires and follow-up.

	[:octicons-arrow-right-24: Learn more](patient-access.md)

-   :material-table-large:{ .lg .middle } **Data Model**

	---

	Flexible EAV-based structures for clinical and research data.

	[:octicons-arrow-right-24: Learn more](../data-model.md)

</div>

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
