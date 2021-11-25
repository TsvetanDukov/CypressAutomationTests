import {homePage} from "../support/page_objects/homePage";
import {womenPage} from "../support/page_objects/womenPage";

describe('Women Page Tests', () => {

    beforeEach('Open site', () => {
        cy.visit('/')
    })

    it(' should verify category message', () => {
        homePage.clickWomenLinkFromNavigationBar()
        womenPage.verifyCategoryMessage()
    })
})