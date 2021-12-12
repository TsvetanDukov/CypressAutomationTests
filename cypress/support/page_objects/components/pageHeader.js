export class PageHeader {

    /**
     * This method will click on "Sign In" link located on "Page Header".
     * It will verify that we are successfully redirected to "My Account" page.
     */
    clickLoginLink() {
        cy.contains('a', 'Sign in').click()
        cy.url().should('include', 'my-account')
    }

}
export const pageHeader = new PageHeader()