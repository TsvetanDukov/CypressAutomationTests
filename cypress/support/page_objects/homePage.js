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

}
export const homePage = new HomePage()