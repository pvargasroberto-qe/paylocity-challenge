import { Page, Locator, expect } from '@playwright/test';

export class BenefitsDashboardPage {
    readonly page: Page;

    private readonly employeesTable: Locator;
    private readonly addEmployeeBtn: Locator;

    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly dependentsInput: Locator;
    private readonly saveBtn: Locator;
    private readonly updateBtn: Locator;
    private readonly deleteBtn: Locator;
    private readonly cancelBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.employeesTable = page.locator('#employeesTable');
        this.addEmployeeBtn = page.getByRole('button', { name: 'Add Employee' });

        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.dependentsInput = page.locator('#dependants');
        this.saveBtn = page.locator('#addEmployee');
        this.updateBtn = page.locator('#updateEmployee');
        this.deleteBtn = page.locator('#deleteEmployee');
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
        await expect(this.employeesTable).toBeVisible();
    }


    async createEmployee(first: string, last: string, dependents: number): Promise<void> {

        await this.addEmployeeBtn.waitFor({ state: 'visible' });
        await this.addEmployeeBtn.scrollIntoViewIfNeeded();
        await this.addEmployeeBtn.click();
        
        await expect(this.firstNameInput).toBeVisible();
        await this.firstNameInput.fill(first);
        await this.lastNameInput.fill(last);
        await this.dependentsInput.fill(String(dependents));

        await this.saveBtn.click();
        console.log(first, last);

        await expect(this.page.getByRole('cell', { name: first })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: last })).toBeVisible();
    }


    async editEmployee(first: string, last: string, updates: { dependents?: number; firstName?: string; lastName?: string }):
        Promise<{ firstName: string; lastName: string }> {

        const row = this.page.locator('//tr[td[contains(., "' + first + '")] and td[contains(., "' + last + '")]]');
        await expect(row).toBeVisible();

        await row.locator('i.fas.fa-edit').click();

        await expect(this.firstNameInput).toBeVisible();

        if (updates.firstName) await this.firstNameInput.fill(updates.firstName);
        if (updates.lastName) await this.lastNameInput.fill(updates.lastName);
        if (updates.dependents !== undefined) await this.dependentsInput.fill(String(updates.dependents));

        await this.updateBtn.click();

        const newFirst = updates.firstName ?? first;
        const newLast = updates.lastName ?? last;

        await expect(this.page.getByRole('cell', { name: newFirst })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: newLast })).toBeVisible();
        return { firstName: newFirst, lastName: newLast };

    }

    async deleteEmployee(first: string, last: string): Promise<void> {

        const row = this.page.locator('//tr[td[contains(., "' + first + '")] and td[contains(., "' + last + '")]]');
        await expect(row).toBeVisible();

        await row.locator('i.fas.fa-times').click();
        await this.deleteBtn.click();

        await expect(row).toHaveCount(0);
    }


}