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

    /**
     * Method to click on "My Credit Slips" link.
     */
    clickOnMyCreditSlips() {
        cy.get('[title = "Credit slips"]').then(creditLink => {
            cy.wrap(creditLink).invoke('text').should('contain', 'My credit slips');
            cy.wrap(creditLink).click();
        });
    }

    /**
     * Method to click on "My Address" link.
     */
    clickOnMyAddress() {
        cy.get('[title = "Addresses"]').then(myAddress => {
            cy.wrap(myAddress).invoke('text').should('contain', 'My addresses');
            cy.wrap(myAddress).click()
        });
    }
}

export const myAccountPage = new MyAccountPage();