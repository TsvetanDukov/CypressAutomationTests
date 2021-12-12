export class HomePage {

    /**
     * Method to verify Home Page logo.
     */
    verifyHeaderLogo() {
        cy.get('#header_logo').find('a').invoke('attr', 'title')
            .should('contain', 'My Store',
                'Incorrect Header Logo!')
    }

    /**
     * Method to click on "Women" link from "Navigation Bar"
     */
    clickWomenLinkFromNavigationBar() {
        cy.contains('a', 'Women').click()
        cy.get('.breadcrumb').find('.navigation_page').then(text => {
            cy.wrap(text.text()).should('contain', 'Women',
                'We were redirected on a different page!')
        })
    }

    /**
     * Method to type in "Search" field and search for specific product.
     * It will verify that displayed results are same as search criteria.
     * @param searchCriteria Specific product to search for.
     */
    searchForProduct(searchCriteria) {
        cy.get('#search_query_top').type(searchCriteria);
        cy.get('.button-search').click()
        cy.get('#center_column h1').should('contain', 'dress')
    }

}
export const homePage = new HomePage()