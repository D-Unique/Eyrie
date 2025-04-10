# Contributing to EyrieNaija

Thank you for your interest in contributing to EyrieNaija! This document provides guidelines and instructions for contributing to our real estate marketplace platform.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Weekly Team Rotations](#weekly-team-rotations)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone involved. Please be considerate of differing viewpoints and experiences, and focus on what is best for the community and the project.

## Project Structure

EyrieNaija consists of several components:

- **Eyrie-web**: Frontend web application
- **Eyrie-mobile**: Mobile applications (iOS & Android)
- **FastApi-GraphQL**: GraphQL API implementation
- **MonoServer**: Main backend server

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- Git
- Docker (recommended)

### Setting Up the Development Environment

1. **Fork the repository**:
   - Visit [https://github.com/D-Unique/Eyrie](https://github.com/D-Unique/Eyrie)
   - Click the Fork button in the top right

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Eyrie.git
   cd Eyrie
   ```
3. **Set up upstream remote:**
```bash
git remote add upstream https://github.com/D-Unique/Eyrie.git
```

4. **Install dependencies:** For web frontend:
```bash
cd Eyrie-web
npm install
```
For mobile app:
```bash
cd Eyrie-mobile
npm install
```
For backend:
```bash
cd MonoServer
```
# Follow setup instructions in README


## Development Workflow

1. **Sync with upstream** before starting new work:
```bash
git checkout main
git pull upstream main
```

**Create a feature branch:**
```bash
git checkout -b feature/your-feature-name
```
3. **Make your changes** following our code style guidelines
4. **Run tests** to ensure your changes don't break existing functionality
5. **Commit your changes** using the commit guidelines below
6. **Push to your fork:**
```bash
git push origin feature/your-feature-name
```
7. **Create a Pull Request** from your branch to the main repository

## Branching Strategy
We follow **Git Flow** to maintain an organized workflow:

- **`main`**: The production-ready branch. Only tested and approved code is merged here.
- **`dev`**: The integration branch for ongoing development. All feature branches should be branched from and merged back into this branch.
- **Feature branches (`feat/<feature-name>`)**: Used for new features or enhancements. Always branch from `dev`.
- **Bugfix branches (`bugfix/<issue-name>`)**: Used for fixing bugs in `dev`.
- **Hotfix branches (`hotfix/<issue-name>`)**: Used for critical fixes on `main`. These are merged into both `main` and `dev`.
- **Release branches (`release/<version>`)**: Used to prepare for a new release. This is branched off `dev` and merged into `main` when stable.

## Commit Guidelines
We follow the Conventional Commits specification:
```bash
<type>(<scope>): <description>

[optional body]

[optional footer]
```
Types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code changes that neither fixes bug nor adds features
- `chore`: Maintenance tasks


Examples:
```
feat(auth): add JWT authentication

Implements user authentication using JWT tokens.

References: Issue #12
```

## Pull Request Process

1. **Create a Pull Request** from your feature branch to the appropriate branch in the main repository

2. **Fill out the PR template** with:

- Description of changes
- Related issue(s)
- Type of change
- Checklist of completed items


3. **Request reviews** from team members
4. **Address feedback** and make necessary changes
5. **The PR will be merged** once it receives approval and passes all CI checks


## Weekly Team Rotations
As mentioned in the project overview, teams will rotate weekly to encourage cross-functional collaboration and learning. Please be prepared to:

1. **Document your work thoroughly** before rotation
2, **Participate in knowledge transfer sessions** with the incoming team
3. **Be available for questions** from team members taking over your previous responsibilities




If you have any questions or need help, please don't hesitate to reach out to the project maintainers.
Thank you for contributing to EyrieNaija! 🏠 🇳🇬
