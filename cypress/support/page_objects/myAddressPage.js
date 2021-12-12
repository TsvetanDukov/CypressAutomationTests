export class MyAddressPage {

    /**
     * Method to verify "Credit Slips Page" page header.
     */
    verifyPageHeader() {
        cy.get('#center_column h1').invoke('text').should('contain', 'My addresses');
    }

    /**
     * Method to verify user current "Home Address" form
     * @param firstName Expected user first name
     * @param lastName Expected user last name
     * @param address Expected user address
     * @param cityStatePostcode Expected user city, state and post code
     * @param country Expected user country
     * @param phoneNumber Expected user phone number
     */
    verifyCurrentHomeAddressForm(firstName, lastName, address, cityStatePostcode, country, phoneNumber) {
        cy.get('.last_item').then(currentAddress => {
            cy.wrap(currentAddress).find('.address_name:nth-of-type(1)').invoke('text')
                .should('contain', firstName);
            cy.wrap(currentAddress).find('.address_name:nth-of-type(2)').invoke('text')
                .should('contain', lastName);
            cy.wrap(currentAddress).find('.address_address1').invoke('text')
                .should('contain', address);
            cy.wrap(currentAddress).find('li:nth-of-type(5)').invoke('text')
                .should('contain', cityStatePostcode);
            cy.wrap(currentAddress).find('li:nth-of-type(6)').invoke('text')
                .should('contain', country);
            cy.wrap(currentAddress).find('.address_phone_mobile').invoke('text')
                .should('contain', phoneNumber);
        });
    }
}
export const myAddressPage = new MyAddressPage();