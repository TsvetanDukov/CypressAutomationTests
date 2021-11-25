import {homePage} from "../support/page_objects/homePage";

describe('Home Page Tests', () => {

    beforeEach('Open site', () => {
        cy.visit('/')
    })

    it('Verify Home Page Logo', () => {
        homePage.verifyHeaderLogo()
    })

    it.only('Test "Women" link from "Navigation bar"', () => {
        homePage.clickWomenLinkFromNavigationBar()
    })
})