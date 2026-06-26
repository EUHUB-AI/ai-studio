# Data Processing Agreement (DPA)

> **⚠️ DRAFT TEMPLATE — NOT YET LEGAL ADVICE.** This is a solid, GDPR Article 28-compliant starting point prepared for EuHub-AI (Engineers-incubator s.r.o.). **Have a qualified Slovak/EU data-protection lawyer review and finalise it before sending it to any client or relying on it.** Fields in `[BRACKETS]` are filled in per engagement.

### For your legal reviewer — please validate
- [ ] **Governing law & jurisdiction** (§12.3) — Slovak Republic / courts in Banská Bystrica: confirm it matches the Principal Agreement.
- [ ] **Breach-notification window** (§8) — currently **48 hours**; confirm acceptable (GDPR requires "without undue delay").
- [ ] **Sub-processor model** (§6) — general written authorisation + **14-day** objection window: confirm the model and notice period.
- [ ] **International transfers** (§9) — SCCs + Schrems II transfer impact assessment; confirm the EU-only-residency carve-out and that the correct SCC modules are referenced.
- [ ] **Return/deletion period** (§10) — **30 days** after termination; confirm.
- [ ] **Audit rights** (§11) — max once per 12 months absent breach/regulator request; confirm scope.
- [ ] **Annexes 1–3** — fill per-engagement processing details; confirm Annex 2 (TOMs) matches actual security controls; keep Annex 3 (sub-processors) current — Google Cloud `europe-west1`; model provider per engagement, or **none when self-hosted**.
- [ ] **Liability** — confirm alignment with the Principal Agreement's liability caps.

---

This Data Processing Agreement (the "**DPA**") forms part of the agreement for services (the "**Principal Agreement**") between:

- **Processor:** Engineers-incubator s.r.o., Company ID (IČO): 53 741 200, registered at Horná 67, 974 01 Banská Bystrica, Slovak Republic ("**EuHub-AI**", "we", "Processor"); and
- **Controller:** `[CLIENT LEGAL NAME]`, `[COMPANY ID]`, `[REGISTERED ADDRESS]` (the "**Client**", "Controller"),

each a "Party" and together the "Parties".

It reflects the Parties' obligations under **Regulation (EU) 2016/679 ("GDPR")** and the **Slovak Act No. 18/2018 Coll. on Personal Data Protection**.

## 1. Definitions

Terms such as "personal data", "processing", "controller", "processor", "sub-processor", "data subject", "personal data breach", and "supervisory authority" have the meanings given in the GDPR. "**Applicable Data Protection Law**" means the GDPR and the Slovak Act No. 18/2018 Coll., together with any binding guidance of the EDPB or the Slovak Office for Personal Data Protection.

## 2. Roles and scope

2.1 In respect of personal data processed under the Principal Agreement, the **Client acts as Controller** and **EuHub-AI acts as Processor**. Where the Client is itself a processor for a third-party controller, EuHub-AI acts as **sub-processor** and the Client warrants it has the necessary authority and instructions.

2.2 The subject-matter, duration, nature and purpose of the processing, the types of personal data, and the categories of data subjects are set out in **Annex 1**.

## 3. Processing on documented instructions

3.1 EuHub-AI shall process personal data **only on the Client's documented instructions**, including with regard to international transfers, unless required to do otherwise by EU or Slovak law (in which case EuHub-AI will inform the Client of that legal requirement before processing, unless the law prohibits it). The Principal Agreement and this DPA constitute the Client's initial documented instructions.

3.2 EuHub-AI shall inform the Client without undue delay if, in its opinion, an instruction infringes Applicable Data Protection Law.

## 4. Confidentiality

EuHub-AI shall ensure that persons authorised to process the personal data are bound by an appropriate duty of confidentiality and process the data only as instructed.

## 5. Security (Article 32)

EuHub-AI shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, as described in **Annex 2**, taking into account the state of the art, the costs of implementation, and the nature, scope, context and purposes of processing.

## 6. Sub-processors

6.1 The Client provides **general written authorisation** for EuHub-AI to engage the sub-processors listed in **Annex 3**.

6.2 EuHub-AI shall inform the Client of any intended addition or replacement of a sub-processor at least **fourteen (14) days** in advance, giving the Client the opportunity to **object** on reasonable, data-protection-related grounds. If the Parties cannot resolve a reasonable objection, the Client may terminate the affected services.

6.3 EuHub-AI shall impose on each sub-processor, by written contract, **data-protection obligations equivalent to those in this DPA**, and remains fully liable to the Client for the performance of each sub-processor's obligations.

6.4 **Self-hosted option.** Where the Client elects a fully self-hosted or on-premise model deployment, no third-party AI/model provider acts as a sub-processor for the Client's content, as no personal data is transmitted to an external model provider.

## 7. Assistance to the Controller

Taking into account the nature of the processing, EuHub-AI shall:

7.1 assist the Client, by appropriate technical and organisational measures and insofar as possible, to respond to **data-subject requests** (access, rectification, erasure, restriction, portability, objection); and

7.2 assist the Client in ensuring compliance with its obligations under **Articles 32–36 GDPR** (security, breach notification, data protection impact assessments, and prior consultation), taking into account the information available to EuHub-AI.

## 8. Personal data breach

EuHub-AI shall notify the Client **without undue delay, and in any event within forty-eight (48) hours**, after becoming aware of a personal data breach affecting the Client's personal data, and shall provide the information reasonably required for the Client to meet its own notification obligations under Articles 33–34 GDPR.

## 9. International transfers

9.1 EuHub-AI shall not transfer personal data outside the European Economic Area (EEA) without the Client's documented instruction.

9.2 Where a transfer to a third country occurs, it shall be governed by an appropriate transfer mechanism under Chapter V GDPR — in particular the **Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914)**, supplemented, following *Schrems II*, by a documented transfer impact assessment and any necessary supplementary measures.

9.3 **EU-residency option.** Where the Client selects EU-only deployment, personal data is stored and processed within the EEA and no such transfer occurs.

## 10. Deletion and return

On termination or expiry of the Principal Agreement, EuHub-AI shall, at the Client's choice, **return or delete all personal data** and existing copies within **thirty (30) days**, unless EU or Slovak law requires continued storage. EuHub-AI shall confirm deletion in writing on request.

## 11. Audits and records

EuHub-AI shall make available to the Client the information necessary to demonstrate compliance with Article 28 GDPR, and allow for and contribute to **audits**, including inspections, conducted by the Client or an auditor it mandates, subject to reasonable notice, confidentiality, and frequency limits (no more than once per 12 months absent a breach or regulator requirement).

## 12. Liability, term and governing law

12.1 This DPA takes effect on the effective date of the Principal Agreement and continues for as long as EuHub-AI processes personal data on the Client's behalf.

12.2 Liability under this DPA is subject to the limitations and exclusions in the Principal Agreement, to the extent permitted by Applicable Data Protection Law.

12.3 This DPA is governed by the laws of the **Slovak Republic**, and the courts of **Banská Bystrica, Slovak Republic** have exclusive jurisdiction, consistent with the Principal Agreement. In the event of conflict between this DPA and the Principal Agreement on data-protection matters, this DPA prevails.

---

## Annex 1 — Details of the processing

| Item | Detail |
|---|---|
| **Subject-matter** | Provision of the AI services described in the Principal Agreement |
| **Duration** | The term of the Principal Agreement |
| **Nature & purpose** | `[e.g. hosting/operating a custom AI assistant, RAG over Client knowledge base, workflow automation across Client ERP/CRM]` |
| **Types of personal data** | `[e.g. names, business contact details, account identifiers, support-ticket content, and any personal data contained in Client documents/records ingested by the system]` |
| **Special categories** | `[None / specify if applicable — extra safeguards required]` |
| **Categories of data subjects** | `[e.g. Client's employees, customers, end-users]` |

## Annex 2 — Technical and organisational measures (Article 32)

- **Encryption** of personal data in transit (TLS) and at rest.
- **Access control** — role-based access (RBAC), least-privilege, and individual authenticated accounts for authorised personnel.
- **Tenant isolation** — single-tenant deployment in the Client's chosen environment (EU-region cloud, private cloud, or on-premise).
- **Audit logging** — access and processing activity logged and retained for `[period]`.
- **Deployment integrity** — containerised deployments, monitoring, and change control managed by EuHub-AI's DevOps function.
- **Model boundary** — Client data is not used to train generalised third-party foundation models; where a self-hosted model is deployed, Client content does not leave the Client's environment.
- **Confidentiality** — personnel bound by confidentiality obligations; security awareness maintained.
- **Backup & resilience** — `[describe backup/restore and retention]`.

## Annex 3 — Authorised sub-processors

| Sub-processor | Purpose | Location |
|---|---|---|
| Google Cloud (Google Cloud EMEA Ltd.) | Cloud hosting / infrastructure | EU (`europe-west1`, Belgium) |
| `[Model/AI provider, if any — per engagement]` | LLM/model inference | `[region]` *(omit where self-hosted)* |
| `[Email/transactional, if used for this Client]` | `[purpose]` | `[region]` |

*For fully self-hosted deployments, no external AI/model sub-processor is engaged for Client content.*

---

*Template prepared for EuHub-AI. Review with legal counsel before use. Last drafted: 2026.*
