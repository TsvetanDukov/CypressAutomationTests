export class MyAccountPage {

    /**
     * Method to verify "My Account"page page header.
     */
    verifyPageHeader() {
        cy.get('#center_column h1').invoke('text').should('contain', 'My account');
    }

    /**
     * Method to click on "Order History and Details" link.
     */
    clickOnOrderHistoryLink() {
        cy.get('[title = "Orders"]').invoke('text')
            .should('contain', 'Order history and details');
        cy.get('[title = "Orders"]').click();
    }

}

export const myAccountPage = new MyAccountPage();