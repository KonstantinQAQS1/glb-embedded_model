it('should increase the counter of views', () => {

    for (var i = 0; i < 10; i++) {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.wait(1000);
    };
});