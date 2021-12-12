import {pageHeader} from "../support/page_objects/components/pageHeader";
import {loginPage} from "../support/page_objects/loginPage";
import {myAccountPage} from "../support/page_objects/myAccountPage";
import {orderHistoryPage} from "../support/page_objects/orderHistoryPage";
import {creditSlipsPage} from "../support/page_objects/creditSlipsPage";
import {myAddressPage} from "../support/page_objects/myAddressPage";

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
    it('Verify "Order History and Details" link and history message', () => {
        myAccountPage.clickOnOrderHistoryLink();
        orderHistoryPage.verifyPageHeader();
        orderHistoryPage.verifyOrderHistoryHistoryMessage();
    });

    /**
     * Test to verify "Credit Slips and Details" link is working.
     */
    it('Verify "My Credit Slips" link and history message', () => {
        myAccountPage.clickOnMyCreditSlips();
        creditSlipsPage.verifyPageHeader();
        creditSlipsPage.verifyCreditSlipHistoryMessage();
    });

    /**
     * Test to verify "My Address" link is working and verify "My Home Address" form.
     */
    it.only('Verify "My Address" link and current address', () => {
        myAccountPage.clickOnMyAddress();
        myAddressPage.verifyPageHeader();
        myAddressPage.verifyCurrentHomeAddressForm("Tsvetan", "Dukov", "Some random address",
            "Sofia New Mexico 13093", "United States", "293-2088");
    });

    /**
     * TODO write tests for the last two links
     */
});