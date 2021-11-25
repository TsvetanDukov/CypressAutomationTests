export class WomenPage {

    /**
     * Method to verify category message.
     */
    verifyCategoryMessage() {
        cy.get('.content_scene_cat>div>div').find('.category-name').invoke('text')
            .then(text => {
                assert.equal(text.trim(), 'Women',
                    'Incorrect category!')
            })
    }

}
export const womenPage = new WomenPage()