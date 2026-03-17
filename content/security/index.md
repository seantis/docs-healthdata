---
title: Information Security and Data Protection
---

# Information Security and Data Protection

Seantis AG places the highest priority on data protection and information security. Sensitive health data is transmitted and processed through the platform. Data is protected with appropriate technical and organizational measures based on its protection level.

Data storage and hosting are also consistently aligned with applicable protection requirements.

## Information Security Management (ISO/IEC 27001:2022)

Quality and information security are core values of Seantis AG. The Seantis AG Information Security Management System (ISMS) is built in line with ISO/IEC 27001:2022 and is audited regularly.

!!! info "ISO/IEC 27001:2022"
	Learn more about Seantis AG certification and security approach:
	[Information Security ISO 27001](https://www.seantis.ch/portrait/informationssicherheit-iso-27001/)

ISO 27001 is an international standard for information security and defines requirements for establishing, operating, and continuously improving a documented ISMS.

## User Management and Access Rights

The platform provides comprehensive user management with a granular role and permission model. All user accounts require a personal login; optional two-factor authentication is available via YubiKey or mTAN.

Access rights are separated at the institution level, so users can only access data from their own institution. Within an institution, critical actions, such as closing a consultation, are restricted to defined roles.

### Roles and Permission Model

The access model is based on role-based access control (RBAC). Users receive permissions through defined roles, which can be combined flexibly.

Core principles:

- least privilege with only the rights required for a task
- default deny unless access is explicitly granted
- clear separation of responsibilities

This model enables secure and traceable control of access rights.

### Institutions and Access Context

HealthData.ai is designed as a multi-tenant platform. Access to data happens in the context of institutions, ensuring clear separation between organizations.

Characteristics:

- data isolation between institutions
- flexible assignment of users to multiple organizations
- support for complex network structures

### Patient Access and Approvals

Access to patient data is also controlled at the individual level. This enables fine-grained control over sensitive information.

Capabilities:

- explicit approvals for patient data
- restriction to specific records
- combination of role-based and object-level permissions

## Data Security and Privacy

Communication between browser and server is encrypted using 256-bit TLS. Highly sensitive personal data is encrypted in the database (AES).

As a Swiss company, Seantis AG is subject to the Swiss Federal Act on Data Protection (FADP). Sensitive data is processed exclusively with a Swiss cloud provider in certified Swiss data centers.

## Authentication and IAM

HealthData.ai supports modern authentication mechanisms:

- OAuth 2.0
- OpenID Connect
- SAML

Multi-factor authentication is also supported, including:

- SMS-based codes
- authenticator apps based on TOTP
- hardware tokens such as YubiKey

## Encryption

- encryption of data in transit using TLS
- encryption of sensitive data at rest

## Technical and Organizational Measures

Information security is not a fixed state but a continuous process. Seantis AG therefore applies a combination of technical and organizational best-practice measures:

- Two-factor authentication (YubiKey or mTAN)
- Encrypted data transmission (TLS 256-bit)
- Network security (firewalls and network security controls)
- Intrusion detection and protective mechanisms (e.g., Fail2ban)
- Access control with role-based access control (RBAC)
- Data masking and anonymization (e.g., in logs and analytics)
- Active system monitoring
- Regular updates (release and patch management)
- Automated vulnerability scans
- Backups with restore testing (including offsite strategies)
- Employee awareness and training (e.g., tabletop exercises)
- Vulnerability disclosure process
- Structured software delivery via DevOps processes
- Regular penetration testing
- Data minimization and defined retention policies

## Audit Trail

All relevant activities, especially read and write operations, are fully logged. The audit trail documents:

- When: timestamp of the action
- Who: author
- Where: context (e.g., patient) and affected data field
- What: old and new value

In addition, user and system logs are available to support audits, forensic analysis, and compliance requirements.

## Penetration Testing and Vulnerability Disclosure

- regular penetration testing
- defined processes for reporting security vulnerabilities under a vulnerability disclosure policy

## Hosting and Data Location

- hosting in certified data centers in Switzerland
- clear separation of development, test, and production environments
