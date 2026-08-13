# Plan: Add LOS Loan Origination System project to the portfolio

## Objective
Add a new experience entry for the LOS (Loan Origination System) project developed during a 6-month internship at UPTIQ.ai as a Software Development Engineer Intern, and show the major features built across backend, frontend, and intake-portal work.

## Scope
This is a portfolio/content update only. No code behavior changes will be made until the plan is approved in chat.

## Proposed work

### 1. Add a new project card / case study entry
Update the main project list and detail experience so a new LOS project appears alongside the current items.

Files likely to be touched:
- src/pages/Projects.tsx
- src/pages/ProjectDetails.tsx
- src/App.tsx

Planned content change:
- Add a new project object with title such as "LOS Loan Origination System"
- Add a short tagline and summary explaining it was built during a 6-month internship at UPTIQ.ai
- Add role context: "Software Development Engineer Intern"
- Add duration: "6 months"
- Include the relevant stack and product category

### 2. Update the experience section / portfolio narrative
Add the internship as a formal professional experience item so the project is presented as real work, not just a personal project.

Files likely to be touched:
- src/pages/AboutUs.tsx or the relevant experience section component
- src/App.tsx if the portfolio content is centralized there

Planned content change:
- Add an experience block like:
  - Company: UPTIQ.ai
  - Role: Software Development Engineer Intern
  - Duration: 6 months
  - Description: worked on a Loan Origination System covering co-borrower onboarding, KYC flows, auto-loan valuation, geocoding, liability and DTI calculations, and offer/closing workflow improvements
- Keep the emphasis on production-facing work and business impact

### 3. Add project detail content that reflects the LOS feature log
The detailed project page will describe the major work done in the internship.

Files likely to be touched:
- src/pages/ProjectDetails.tsx
- possibly a project data array or project metadata object if the portfolio stores project data there

Planned content change:
- Create a detailed project description for LOS with categories like:
  - Overview
  - Problem solved
  - Key capabilities
  - Core modules delivered
  - Result / business impact
- Highlight major features from the feature log, such as:
  - Co-borrower / co-guarantor onboarding and KYC flow
  - J.D. Power vehicle valuation integration
  - Census geocoding and address enrichment
  - Personal liabilities, DTI, and net worth tracking
  - Multi-party application completion logic
  - Offer and closing workflow improvements
  - Security hardening and auth updates
- Summarize the impact in language suited to a portfolio: product delivery, underwriting workflow modernization, operational efficiency, and security improvements

### 4. Add project tags / highlights
Make the project easy to scan at a glance.

Files likely to be touched:
- src/pages/Projects.tsx
- src/pages/ProjectDetails.tsx

Planned content change:
- Add tags like:
  - FastAPI
  - React
  - TypeScript
  - SQLModel
  - KYC
  - Loan Origination
  - Underwriting
  - Security
  - Product workflow

### 5. Ensure consistency with existing portfolio tone
Keep the writing aligned with the current portfolio theme: crisp, polished, engineering-focused, product impact oriented.

Files likely to be touched:
- Existing project copy in src/pages/ProjectDetails.tsx
- Any experience text in src/pages/AboutUs.tsx or related sections

Planned content change:
- Use concise and professional wording
- Focus on what was built and the value delivered, not just the raw feature list
- Keep the internship wording truthful and anchored to the work described in the feature log

## Files to modify
Primary files expected to be changed:
- src/App.tsx
- src/pages/Projects.tsx
- src/pages/ProjectDetails.tsx
- src/pages/AboutUs.tsx

Possible additional adjustment:
- src/components/Navbar.tsx or footer links only if the project list is surfaced elsewhere in navigation

## Draft result after implementation
After approval, the portfolio will include:
- a new LOS project card in the project section
- a detailed case-study description in the project details page
- a work experience entry for UPTIQ.ai showing the 6-month internship and key responsibilities
- stronger evidence that the work was real-world, product-driven, and full-stack

## Important note
This plan deliberately does not change code or logic yet. It only prepares the exact content and file-level edits to be applied after approval.
