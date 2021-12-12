export class CreditSlipsPage {

    /**
     * Method to verify "Credit Slips Page" page header.
     */
    verifyPageHeader() {
        cy.get('#center_column h1').invoke('text').should('contain', 'Credit slips');
    }

    /**
     * Method to verify "Credit Slips" history message.
     */
    verifyCreditSlipHistoryMessage() {
        cy.get('#block-history p').invoke('text').should('contain',
            'You have not received any credit slips.');
    }
}
export const creditSlipsPage = new CreditSlipsPage();