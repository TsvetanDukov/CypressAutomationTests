import {homePage} from "../support/page_objects/homePage";
import {pageHeader} from "../support/page_objects/components/pageHeader";

describe('Home Page Tests', () => {

    beforeEach('Open site', () => {
        cy.visit('/')
    });

    it('Verify Home Page Logo', () => {
        homePage.verifyHeaderLogo()
    });

    it('Test "Women" link from "Navigation bar"', () => {
        homePage.clickWomenLinkFromNavigationBar()
    });

    it('Search for specific product', () => {
        homePage.searchForProduct('dress')
    });

    it.only('Test "Sign In" link from "Page Header"', () => {
        pageHeader.clickLoginLink()
    });

})