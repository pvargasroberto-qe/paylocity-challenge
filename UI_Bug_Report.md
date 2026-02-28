
# UI Bug Report – Benefits Dashboard

## Summary
Total UI Bugs Identified: 11  
Critical: 1  
Major: 6  
Minor: 3  
Trivial: 1  

--------------------------------------

## BUG-UI-01 – Login returns 405 when username is incorrect

**Severity:** Major  
**Priority:** High  

### Description:
When attempting to log in with an incorrect username but correct password, the system returns HTTP 405 – Method Not Allowed.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter incorrect username in the "Username" field. For example "User123"
3. Enter the password correct in the "Password" field.
4. Click the "Log In" button.
   
### Expected Result:
System should return a proper authentication error (401/403) with user-friendly message.

### Actual Result:
Returns 405 Method Not Allowed.

### Impact:
Improper error handling and confusing UX.

### Evidence:
evidence/UI/BUG-UI-01.png

--------------------------------------

## BUG-UI-02 – Add Employee doesn´t show mandatory fields

**Severity:** Major  
**Priority:** High

### Description:
No validation messages appear when required fields are empty.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Click the "Add Employee" button.
6. Clck the "Add" button in the popup.

### Expected:
Inline validation indicating required fields.

### Actual:
Form submits without visible validation.

### Evidence:
evidence/UI/BUG-UI-02.png

--------------------------------------

## BUG-UI-03 – First Name, Last Name and Dependents fields have no character limit

**Severity:** Major  
**Priority:** High

### Description:
Fields allow extremely long strings without restriction.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Click the "Add Employee" button.
6. Enter a very long string in the "First Name" field.
7. Enter a very long string in the "Last Name" field.
8. Enter a very long string in the "Dependents" field.

### Expected:
Reasonable max length (e.g., 50–100 chars).

### Impact:
Potential DB overflow or UI breakage.

### Evidence:
evidence/UI/BUG-UI-03.png

--------------------------------------

## BUG-UI-04 – First Name and Last Name allow special characters

**Severity:** Minor  
**Priority:** Middle

### Description:
Special characters accepted in name fields.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Click the "Add Employee" button.
6. Enter a special character string in the "First Name" field.
7. Enter a special character string in the "Last Name" field.
8. Click the "Add" button.
9. New employee reflected in the data table.

### Expected:
Only alphabetic characters allowed.

### Impact:
Data integrity concerns.

### Evidence:
evidence/UI/BUG-UI-04.png

--------------------------------------

## BUG-UI-05 – Dependents field accepts decimal values

**Severity:** Major  
**Priority:** High

### Description:
Dependents field allows decimals but internally converts to integer.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Click the "Add Employee" button.
6. Enter a text in the "First Name" field.
7. Enter a text in the "Last Name" field.
8. Enter a decimal value in the "Dependents" field. 
9. Click the "Add" button.
10. New employee reflected in the data table. 

### Expected:
Field should accept only whole numbers.

### Impact:
User confusion and inconsistent validation.

### Evidence:
evidence/UI/BUG-UI-05.png

--------------------------------------

## BUG-UI-06 – Double clicking Add button creates duplicate employee

**Severity:** Critical  
**Priority:** Highest

### Description:
Rapid double-click generates duplicate records.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Click the "Add Employee" button.
6. Enter a text in the "First Name" field.
7. Enter a text in the "Last Name" field.
8. Enter an integer value in the "Dependents" field. 
9. Double click the "Add" button.
10. Duplicate employee reflected in the data table. Same data, but different ID. 

### Expected:
Button should disable after first click.

### Impact:
Data duplication and payroll inconsistencies.

### Evidence:
evidence/UI/BUG-UI-06.png

--------------------------------------

## BUG-UI-07 – Application is not responsive on mobile devices

**Severity:** Minor
**Priority:** Middle

### Description:
UI layout breaks when viewed on mobile resolution.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Change visualization in the browser settings (Developer Mode)

### Impact:
Poor user experience.

### Evidence:
evidence/UI/BUG-UI-07.png

--------------------------------------

## BUG-UI-08 – No search functionality for employees

**Severity:** Minor
**Priority:** Middle

### Description:
No search mechanism available.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Show data table with employee list. 

### Impact:
Poor usability with large datasets.

### Evidence:
evidence/UI/BUG-UI-08.png

--------------------------------------

## BUG-UI-09 – No sorting option in employee table

**Severity:** Minor
**Priority:** Middle

### Description:
Table is ordered by ID only.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Show data table with employee list. 

### Impact:
Reduces usability.

### Evidence:
evidence/UI/BUG-UI-09.png

--------------------------------------

## BUG-UI-10 – GET employees sometimes fails on refresh and logout disappears

**Severity:** Critical  
**Priority:** Highest


### Description:
Refreshing sometimes results in empty table and logout link disappearing.

#### Steps to Reproduce:
1. Navigate to the site URL: "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
2. Enter the username in the "Username" field.
3. Enter the password in the "Password" field.
4. Click the "Log In" button.
5. Create/Edit an Employee.
6. Refresh Dashboard in the browser. Repeat the process. 

### Impact:
Session instability.

### Evidence:
evidence/UI/BUG-UI-10.png

--------------------------------------

## BUG-UI-11 – Missing favicon

**Severity:** Trivial  
**Priority:** Low

### Description:
No favicon displayed.

### Impact:
Branding issue.

### Evidence:
evidence/UI/BUG-UI-11.png
