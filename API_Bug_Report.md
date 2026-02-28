# API Bug Report – Benefits Dashboard API

## Summary
Total API Bugs Identified: 7  
Critical: 2  
Major: 5  

---

## BUG-API-01 – POST /api/Employees accepts unknown properties

**Severity:** Major 
**Priority:** High

### Description:
API accepts additional properties despite schema defining additionalProperties=false.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set extra propertie in the body of POST /api/Employee. Example:
   {
  "firstName": "Test",
  "lastName": "Employee",
  "username": "Test",
  "dependants": 1,
  "expiration": "2026-07-01T16:39.520Z",
  "salary": 2000.30787,
  "hacker": true,
  "test": 1,
  "something": "test"
  }
5. Send request.

### Expected:
Return 400 Bad Request.

### Actual:
Returns 200 and creates employee.

### Impact:
Contract violation.

### Evidence:
evidence/API/BUG-API-01.png

---

## BUG-API-02 – POST allows empty username

**Severity:** Major  
**Priority:** High

### Description:
username is required but accepts empty string.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set empty value for username attribute in the body of POST /api/Employee. Example:
   {
  "firstName": "Test",
  "lastName": "Employee",
  "username": "",
  "dependants": 1,
  "expiration": "2026-07-01T16",
  "salary": 2000.30787,
  "hacker": true,
  "test": 1,
  "something": "test"
  }
5. Send request.

### Impact:
Invalid records created.

### Evidence:
evidence/API/BUG-API-02.png

---

## BUG-API-03 – GET by ID returns 200 when ID does not exist

**Severity:** Major  
**Priority:** High

### Description:
If the ID not exists, GET method by ID returns 200 code.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set uuid value for Id in the value of GET /api/Employee/id. Example:
   318b3918-fef8-47b2-bde6-6177cdec16d5
5. Send request.

### Expected:
404 Not Found

### Actual:
200 OK with empty result.

### Evidence:
evidence/API/BUG-API-03.png

---

## BUG-API-04 – GET by ID returns 500 when ID starts with letter

**Severity:** Critical  
**Priority:** Highest

### Description:
Server error instead of validation error.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set uuid value for Id in the value of GET /api/Employee/id. Example:
   z18b3918-fef8-87b2-bde6-6177cdec16d5
5. Send request.

### Impact:
Server instability.

### Evidence:
evidence/API/BUG-API-04.png

---

## BUG-API-05 – PUT ignores request id and creates new record

**Severity:** Critical  
**Priority:** Highest

### Description:
PUT returns different id and behaves as create.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set propertie with correct ID in the body of PUT /api/Employee. Example:
  {
  "firstName": "Test",
  "lastName": "LastName",
  "username": "Test",
  "id": "8ea06917-822c-4b02-b169-70d7cc8407d4",
  "dependants": 1,
  "expiration": "2022-07-01T16:31:39.520Z",
  "salary": 52000
  }
5. Send request.

### Impact:
Data integrity violation.

### Evidence:
evidence/API/BUG-API-05.png

---

## BUG-API-06 – Negative net salary allowed in PUT api/Employee

**Severity:** Major 
**Priority:** High

### Description:
API allows salary that results in negative net pay.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set low salary in the propertie "salary" in the body of PUT /api/Employee. Example:
  {
  "firstName": "Test",
  "lastName": "LastName",
  "username": "Test",
  "id": "1b090aac-d555-469f-9fb4-9f20dd186c46",
  "dependants": 1,
  "expiration": "2022-07-01T16:39.520Z",
  "salary": 50
  }
5. Send request.

### Impact:
Business rule violation.

### Evidence:
evidence/API/BUG-API-06.png

---

## BUG-API-07 – DELETE returns 200 for non-existent ID

**Severity:** Major  
**Priority:** High

### Description:
DELETE request show success status with a wrong Id.

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set incorrect value for Id of DELETE /api/Employee. Example:
  ff6978ec-56ef-4a64-b820-d1d371f7b3b0
5. Send request.
   
### Expected:
404 Not Found

### Actual:
200 OK with empty response.

### Evidence:
evidence/API/BUG-API-07.png

---

## BUG-API-08 – POST /api/Employees accepts special characters for properties firstName and lastName

**Severity:** Major 
**Priority:** High

### Description:
API accepts special characters for the firstName and lastName properties

#### Steps to Reproduce:
1. Import collection API in Postman with URL "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json"
2. Configure authorization as a "API Key" with token value.
3. Set extra propertie in the body of POST /api/Employee. Example:
   {
  "firstName": "(/&%&/(",
  "lastName": ")&%#$%&/(",
  "username": "Test",
  "dependants": 1,
  "expiration": "2026-07-01T16:39.520Z",
  "salary": 2000.30787
  }
5. Send request.

### Expected:
Return 400 Bad Request.

### Actual:
Returns 200 and creates employee.

### Evidence:
evidence/API/BUG-API-08.png


