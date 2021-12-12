import {pageHeader} from "../support/page_objects/components/pageHeader";
import {loginPage} from "../support/page_objects/loginPage";
import {myAccountPage} from "../support/page_objects/myAccountPage";

describe('My Account page test suite', () => {

    beforeEach('Open site', () => {
       cy.visit('/');
    });

    /**
     * Test that fills "New user" registration form.
     */
    it('Make a new registration', () => {
        pageHeader.clickLoginLink();
        loginPage.useCreateNewAccountForm("someRandomEmail4@gmail.com");
        loginPage.fillCreateAnAccountForm("Tsvetan", "Dukov", "someRandomEmail4@gmail.com",
            "tainaparola", 11, "September", "1987", "Some random address", "Sofia",
            "New Mexico", "13093", "293-2088", "My home address");
        myAccountPage.verifyPageHeader();
    });

    /**
     * Test that verify successful login is possible with valid credentials.
     */
    it('Verify successful login with already created account', () =>{
        pageHeader.clickLoginLink();
        loginPage.loginToYourAccount("someRandomEmail4@gmail.com", "tainaparola");
        myAccountPage.verifyPageHeader();
    });

})