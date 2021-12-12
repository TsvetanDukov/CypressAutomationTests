export class OrderHistoryPage {

    /**
     * Method to verify "Order History Page" page header.
     */
    verifyPageHeader() {
        cy.get('#center_column h1').invoke('text').should('contain', 'Order history');
    }

    /**
     * Method to verify "Order History" history message.
     */
    verifyOrderHistoryHistoryMessage() {
        cy.get('#block-history p').invoke('text').should('contain',
            'You have not placed any orders.');
    }

}
export const orderHistoryPage = new OrderHistoryPage();