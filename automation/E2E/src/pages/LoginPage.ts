import { Locator, Page, expect } from '@playwright/test';
import { env } from '../config/env.js';


export class LoginPage {

    private readonly usernameField: Locator
    private readonly passwordField: Locator
    private readonly logInBtn: Locator

    constructor(private page: Page) {
        this.usernameField = page.locator('#Username')
        this.passwordField = page.locator('#Password')
        this.logInBtn = page.getByRole('button', { name: 'Log In' })
    }

    async goto(): Promise<void> {
        await this.page.goto('/Prod/Account/Login');
    }

    async login() {

        if (!env.uiUser || !env.uiPass) return;

        await this.usernameField.fill(env.uiUser);
        await this.passwordField.fill(env.uiPass);
        await this.logInBtn.click();

        await expect(this.page.locator('#employeesTable')).toBeVisible();
    }


}