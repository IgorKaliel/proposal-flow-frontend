# Proposal SaaS — Frontend

Frontend application for a SaaS platform focused on **intelligent proposal generation for freelancers and agencies**.
This system helps professionals create structured, professional, and profitable commercial proposals in minutes.

---

## Product Overview

The platform enables service providers to:

- Standardize their proposals
- Avoid pricing mistakes
- Reuse structured service scopes
- Present proposals in a professional format
- Track proposal lifecycle

**Target users:** Freelancers, consultants, and small agencies offering digital or creative services.

---

## Product Scope

### Included in MVP

- Client management
- Service template library
- Proposal creation and editing
- Automatic price calculation
- Proposal status management
- Shareable proposal view

### Out of Scope (current phase)

- Online payments
- Legal digital signature
- External integrations
- Multi-user teams

---

## Tech Stack

| Layer           | Technology                  |
| --------------- | --------------------------- |
| Framework       | React + Vite                |
| Language        | TypeScript                  |
| Form Handling   | React Hook Form             |
| Server State    | TanStack Query              |
| Architecture    | MVVM (Model–View–ViewModel) |
| UI Strategy     | Custom Design System        |
| Dev Environment | Docker                      |
| Deployment      | Vercel                      |
| CI/CD           | GitHub Actions              |

---

## Architecture Overview

The frontend follows an **MVVM architectural pattern** to ensure:

- Clear separation of responsibilities
- Testability of business logic
- Scalability
- Maintainability

### Folder Structure (conceptual)

```
src/
 ├── modules/
 │   ├── proposals/
 │   │   ├── views/
 │   │   ├── viewmodels/
 │   │   ├── services/
 │   │   ├── types/
 │   │   └── components/
 │   ├── clients/
 │   └── services/
 ├── shared/
 │   ├── design-system/
 │   ├── hooks/
 │   ├── utils/
 │   └── api/
```

### Responsibility Layers

| Layer     | Responsibility                         |
| --------- | -------------------------------------- |
| View      | UI rendering only                      |
| ViewModel | State orchestration and business logic |
| Services  | API communication                      |
| Types     | Domain modeling                        |

---

## Functional Requirements

| ID    | Description                                 |
| ----- | ------------------------------------------- |
| FR-01 | Users can register and log in               |
| FR-02 | Users can manage clients                    |
| FR-03 | Users can create reusable service templates |
| FR-04 | Users can create proposals                  |
| FR-05 | System calculates totals automatically      |
| FR-06 | Proposals have lifecycle statuses           |

---

## Business Rules

| ID    | Rule                                            |
| ----- | ----------------------------------------------- |
| BR-01 | A proposal must be linked to a client           |
| BR-02 | Proposal total = sum of items − discount        |
| BR-03 | Each proposal item must have price and quantity |
| BR-04 | Sent proposals change status to “sent”          |
| BR-05 | Approved proposals become read-only             |

---

## Non-Functional Requirements

| Category    | Requirement                                  |
| ----------- | -------------------------------------------- |
| Performance | Initial screen load under 2 seconds          |
| Security    | Data must be isolated per authenticated user |
| Usability   | Interface focused on productivity            |
| Scalability | Modular architecture for future expansion    |

---

## Engineering Quality Standards

- Strong typing with TypeScript
- Business logic isolated from UI
- Reusable components via Design System
- Predictable server state management
- Modular domain-driven structure

---

## Running the Project with Docker

The application is containerized to ensure consistent environments and simplify onboarding.

### Build image

```
docker build -t proposal-frontend .
```

### Run container

```
docker run -p 5173:5173 proposal-frontend
```

---

## CI/CD Pipeline

Deployment flow:

```
Push to main → GitHub Actions → Build → Deploy automatically to Vercel
```

Goals:

- Ensure build integrity
- Prevent broken deployments
- Automate delivery

---

## License

This project is licensed under the **MIT License**.

---

## Future Roadmap

- Subscription plans
- Payment integration
- Proposal analytics
- Digital signature
- Team collaboration

---

## Author

Developed as a portfolio-grade SaaS architecture project demonstrating product thinking, frontend architecture, and engineering practices.
