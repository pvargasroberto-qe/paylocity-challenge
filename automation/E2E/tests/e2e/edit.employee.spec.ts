import { test } from '@playwright/test';
import { BenefitsDashboardPage } from '../../src/pages/BenefitDashboardPage.js';
import { makeEmployee } from '../../src/data/employeeFactory.js';
import { LoginPage } from '../../src/pages/LoginPage.js';

test('E2E - Edit Employee', async ({ page }) => {

  const login = new LoginPage(page);
  await login.goto();
  await login.login();

  const dashboard = new BenefitsDashboardPage(page);

  const emp = makeEmployee();
  await dashboard.createEmployee(emp.firstName, emp.lastName, emp.dependants);
  await dashboard.editEmployee(emp.firstName, emp.lastName, { dependents: 3 });

  //await page.pause();

});