import { test } from '@playwright/test';
import { BenefitsDashboardPage } from '../../src/pages/BenefitDashboardPage.js';
import { makeEmployee } from '../../src/data/employeeFactory.js';
import { LoginPage } from '../../src/pages/LoginPage.js';
import { log } from 'node:console';

test('E2E - Add Employee', async ({ page }, testInfo) => {

    const login = new LoginPage(page);
    await login.goto();
    await login.login();

    const dashboard = new BenefitsDashboardPage(page);
    const emp = makeEmployee();

    await test.step('Create employee', async () => {
        await dashboard.createEmployee(emp.firstName, emp.lastName, emp.dependants);

        const screenshot = await page.screenshot();
        await testInfo.attach('Employee Created', {
            body: screenshot,
            contentType: 'image/png'
        });
    });

    await dashboard.createEmployee(emp.firstName, emp.lastName, emp.dependants);

    //await page.pause();

});