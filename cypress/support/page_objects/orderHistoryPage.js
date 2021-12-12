export class OrderHistoryPage {

    /**
     * Method to verify "Order History Page" page header.
     */
    verifyPageHeader() {
        cy.get('#center_column h1').invoke('text').should('contain', 'Order history');
    }

}
export const orderHistoryPage = new OrderHistoryPage();