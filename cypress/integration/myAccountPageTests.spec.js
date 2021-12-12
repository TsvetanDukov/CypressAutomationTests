import {pageHeader} from "../support/page_objects/components/pageHeader";
import {loginPage} from "../support/page_objects/loginPage";
import {myAccountPage} from "../support/page_objects/myAccountPage";
import {orderHistoryPage} from "../support/page_objects/orderHistoryPage";

describe('My Account Page Tests Suite', () => {

    beforeEach('Open site and login to your account', () => {
        cy.visit('/');
        pageHeader.clickLoginLink();
        loginPage.loginToYourAccount("someRandomEmail4@gmail.com", "tainaparola");
        myAccountPage.verifyPageHeader();
    });

    /**
     * Test to verify "Order History and Details" link is working.
     */
    it.only('Verify "Order History and Details" link', () => {
        myAccountPage.clickOnOrderHistoryLink();
        orderHistoryPage.verifyPageHeader();
    });
});