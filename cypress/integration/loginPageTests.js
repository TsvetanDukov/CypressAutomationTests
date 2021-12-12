import {pageHeader} from "../support/page_objects/components/pageHeader";
import {loginPage} from "../support/page_objects/loginPage";
import {myAccountPage} from "../support/page_objects/components/myAccountPage";

describe('My Account page test suite', () => {

    beforeEach('Open site', () => {
       cy.visit('/');
    });

    /**
     * Test that fills "New user" registration form.
     */
    it.only('Make a new registration', () => {
        pageHeader.clickLoginLink();
        loginPage.useCreateNewAccountForm("someRandomEmail4@gmail.com");
        loginPage.fillCreateAnAccountForm("Tsvetan", "Dukov", "someRandomEmail4@gmail.com",
            "tainaparola", 11, "September", "1987", "Some random address", "Sofia",
            "New Mexico", "13093", "293-2088", "My home address");
        myAccountPage.verifyPageHeader();
    });

})