import { test } from '@playwright/test';
import { BenefitsDashboardPage } from '../../src/pages/BenefitDashboardPage.js';
import { makeEmployee } from '../../src/data/employeeFactory.js';
import { LoginPage } from '../../src/pages/LoginPage.js';

test('E2E - Delete Employee', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login();

  const dashboard = new BenefitsDashboardPage(page);
  const emp = makeEmployee();
  await dashboard.createEmployee(emp.firstName, emp.lastName, emp.dependants);
  await dashboard.deleteEmployee(emp.firstName, emp.lastName);

  //await page.pause();
});