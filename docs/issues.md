# YieldVault RWA - GitHub Issues for Phases 2-4

*Since the GitHub CLI (gh) was unavailable in the current environment, please create the following issues manually in your repository to track the remaining phases of the project.*

---

## Issue 1: [Phase 2] Develop Soroban Vault Smart Contract
**Title:** Phase 2: Implement Soroban Smart Contracts for Vault Operations
**Labels:** `smart-contracts`, `rust`, `soroban`, `phase-2`
**Body:**
```markdown
### Description
Implement the core logic for the YieldVault using Rust and the Soroban SDK.

### Tasks
- [ ] Initialize a new Soroban contract workspace in `/contracts/vault`.
- [ ] Implement `deposit` functionality: Accepts USDC and mints fractional `yvUSDC` shares to the user.
- [ ] Implement `withdraw` functionality: Burns `yvUSDC` shares and returns underlying USDC + yield.
- [ ] Implement Admin functions to re-allocate funds into mock Stellar RWA strategies.
- [ ] Write exhaustive unit tests for all contract logic.

### Acceptance Criteria
- 100% test coverage on contract logic.
- Contract compiles successfully to WASM.
```

---

## Issue 2: [Phase 3] Testnet Deployment and Frontend Integration
**Title:** Phase 3: Deploy to Testnet and Integrate with React Frontend
**Labels:** `frontend`, `testnet`, `integration`, `phase-3`
**Body:**
```markdown
### Description
Deploy the completed Soroban contracts to the Stellar Testnet and integrate them with the Next.js/Vite frontend using `@stellar/stellar-sdk`.

### Tasks
- [ ] Deploy the Vault contract WASM to the Stellar Testnet.
- [ ] Fund a test account and initialize the contract.
- [ ] Update `/frontend/src/components/VaultDashboard.tsx` to read real state from the Testnet contract instead of mock data.
- [ ] Update `VaultDashboard.tsx` to submit actual signed deposit and withdraw transactions using Freighter.

### Acceptance Criteria
- End-to-end deposit and withdrawal flow works successfully on the Stellar Testnet via the web UI.
```

---

## Issue 3: [Phase 4] Mainnet Launch and Security Audit
**Title:** Phase 4: Security Audit & Mainnet Launch
**Labels:** `mainnet`, `audit`, `release`, `phase-4`
**Body:**
```markdown
### Description
Prepare the application for production by auditing the smart contracts and deploying them to the Stellar Mainnet.

### Tasks
- [ ] Conduct a final review/audit of the Soroban contract code.
- [ ] Deploy the Vault contract to Stellar Mainnet.
- [ ] Configure the frontend to point to the Mainnet RPC and Contract IDs.
- [ ] Deploy the frontend to Vercel/Netlify.

### Acceptance Criteria
- Application is live and accessible on an official custom domain.
- Users can deposit real USDC on Stellar Mainnet.
```
