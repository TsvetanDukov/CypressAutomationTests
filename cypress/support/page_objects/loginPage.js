export class LoginPage {

    /**
     * Method which fill email address field in "Create and Account" form.
     * It verify form name and submit button name, in order to gain confidence that we use correct form.
     * @param accountEmail Desired email address to make a registration.
     */
    useCreateNewAccountForm(accountEmail) {
        cy.get('#create-account_form').should('contain', 'Create an account')
            .then(form => {
            cy.wrap(form).find('#email_create').type(accountEmail);
            cy.wrap(form).find('#SubmitCreate').should('contain', 'Create an account')
                .then(submitButton => {
                    cy.wrap(submitButton).click();
                });
        });
    }

    /**
     * This method fills "Create an account form"
     * @param firstName User first name
     * @param lastName User last name
     * @param email User email address
     * @param password User password
     * @param day User day of birth
     * @param month User month of birth
     * @param year User year of birth
     * @param address User address
     * @param city User city
     * @param state User state
     * @param postcode User postal code
     * @param phoneNumber User phoneNumber
     * @param addressAlias User address alias
     */
    fillCreateAnAccountForm(firstName, lastName, email, password, day, month, year, address, city, state, postcode,
                            phoneNumber, addressAlias) {
        cy.get('#account-creation_form').should('contain', 'Your personal information')
            .then(createAccountForm => {
                cy.wrap(createAccountForm).find('[for = "id_gender1"]').should('contain', 'Mr.')
                    .click();
                cy.wrap(createAccountForm).find('#customer_firstname').then(firstNameField => {
                    cy.wrap(firstNameField).invoke('attr', 'data-validate')
                        .should('contain', 'isName');
                    cy.wrap(firstNameField).type(firstName);
                });
                cy.wrap(createAccountForm).find('#customer_lastname').then(lastNameField => {
                    cy.wrap(lastNameField).invoke('attr', 'data-validate')
                        .should('contain', 'isName');
                    cy.wrap(lastNameField).type(lastName);
                });
                cy.wrap(createAccountForm).find('#email').then(emailField => {
                    cy.wrap(emailField).invoke('attr', 'data-validate')
                        .should('contain', 'isEmail');
                    cy.wrap(emailField).clear().type(email);
                });
                cy.wrap(createAccountForm).find('#passwd').then(passwordField => {
                    cy.wrap(passwordField).invoke('attr', 'data-validate')
                        .should('contain', 'isPasswd');
                    cy.wrap(passwordField).type(password);
                });
                cy.wrap(createAccountForm).find("#days").select(day);
                cy.wrap(createAccountForm).find("#months").select(month);
                cy.wrap(createAccountForm).find("#years").select(year);

                cy.wrap(createAccountForm).find('#address1').type(address);
                cy.wrap(createAccountForm).find('#city').type(city);
                cy.wrap(createAccountForm).find('#id_state').select(state);
                cy.wrap(createAccountForm).find('#postcode').type(postcode)

                cy.wrap(createAccountForm).find('#id_country').invoke('text')
                    .should('contain', 'United States');
                cy.wrap(createAccountForm).find('#phone_mobile').type(phoneNumber);
                cy.wrap(createAccountForm).find('#alias').clear().type(addressAlias);
                cy.wrap(createAccountForm).find('#submitAccount').click();
            });
    }
}
export const loginPage = new LoginPage();