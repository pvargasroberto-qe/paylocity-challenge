
# Bug challenge

## Summary

Total Bugs Found:
- API: 8
- UI: 11

## Observations

- API contract validation gaps
- PUT behaves as UPSERT
- Missing input validation in UI
- Potential data integrity risks

---

# Automation Challenge - API

## Scope
API automation using Postman Collection.

## What is covered
- CRUD main flows
- Contract validation
- Negative scenarios
- Business rule validation
- Known bug detection

## How to run

1. Import the collection:
   postman/benefits-api-automation.postman_collection.json

2. Import environment:
   postman/benefits-prod.postman_environment.json

3. Set your AUTH_TOKEN in the environment.

4. Run the collection using Postman Runner.


## Notes
Some tests intentionally fail due to known API defects documented in API_Bug_Report.md.

---

# Automation Challenge - UI E2E

## Setup
```bash
npm init playwright@latest
```
1. select Typescript
2. folder "tests"
3. GitHub action flows: false
4. Install browsers: true

# Extension (optional)
Install - Playwright Test for VSCode -

## dotenv
```bash
npm install dotenv --save-dev
```

## faker
```bash
npm install @faker-js/faker --save-dev
```

## Run
```bash
npm test
```

## Report
```bash
npm run report
```
