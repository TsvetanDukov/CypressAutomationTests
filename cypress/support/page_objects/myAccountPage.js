export class MyAccountPage {

    /**
     * Method to verify "My Account"page page header.
     */
    verifyPageHeader() {
    cy.get('#center_column h1').invoke('text').should('contain', 'My account');
}

}
export const myAccountPage = new MyAccountPage();