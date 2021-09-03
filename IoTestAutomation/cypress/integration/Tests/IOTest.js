
/// <reference types="cypress" />




describe('IO Test Automation Suite',function()
{

it('Login', function()
{
 cy.visit("https://staging.hotshot.site/customer/login");
 cy.url().should('include','customer');
 cy.get('input[aria-label=Email]').should('be.visible').should('be.enabled').type("testuser2424@io.co.za");
 cy.get('input[aria-label=Password]').should('be.visible').should('be.enabled').type("Password!@!@2424");
 cy.wait(500);
 cy.get('.q-btn__content').should('be.visible').click();
 cy.title().should('eq','Hotshot');
})

it('DashBoard Test', function()
{
    cy.get('.self-center > .dashboard-subtitle').should('have.text','Today');
    cy.get(':nth-child(1) > .dashboard-overview-box').should('have.text','Active Properties');
    cy.get(':nth-child(2) > .dashboard-overview-box').should('have.text','Active Internet Users');
    cy.get(':nth-child(3) > .dashboard-overview-box').should('have.text','GB Usage');
    cy.get('[class=dashboard-subtitle q-pt-lg]').should('have.text','Overview');
    //cy.get('.col-4 > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click();
    //cy.get('.q-manual-focusable--focused').click();
    cy.get(':nth-child(3) > .q-select__dropdown-icon').click();
    //cy.get('.q-manual-focusable--focused > .q-item__section > .q-item__label').click();
    cy.get(':nth-child(3) > .q-select__dropdown-icon').should('have.vlue',['Hotel','Student Accomodation','Residential']);
    //cy.get('.q-manual-focusable--focused > .q-item__section > .q-item__label').click();
    cy.get(':nth-child(1) > .overview-box > .overview-title').should('have.text','Total # of Accounts Activated');
    cy.get(':nth-child(2) > .overview-box > .overview-title').should('have.text','Total # of Devices');
    cy.get(':nth-child(3) > .overview-box > .overview-title').should('have.text','GB Usage Total');
})


it('Group Test', function()
{
    cy.get(':nth-child(2) > .col-12 > .dash-menu-item').click();
    cy.get('.top-menu-button > .q-btn > .q-btn__wrapper > .q-btn__content').click();
    cy.get('[data-cy=name]').clear();
    cy.get('[data-cy=name]').type('My New Test Group');
    cy.get('[data-cy=contact-email]').clear();
    cy.get('[data-cy=contact-email]').type('my-new-test-group@io.co.za');
    cy.get('.block').click();
    cy.get('.later-button > .q-btn__wrapper > .q-btn__content > .block').click();
    cy.get('[data-cy=portal-id]').click();
    cy.get('.q-item__label').click();
    cy.get('.q-stepper__nav > .q-btn > .q-btn__wrapper > .q-btn__content').click();
    cy.get(':nth-child(2) > [style="width: 260px; text-transform: capitalize;"]').click();
})
 
 
 it('Properties Test', function()
 {
    cy.get(':nth-child(3) > .col-12 > .dash-menu-item').click();
    cy.get('.top-menu-button > .q-btn > .q-btn__wrapper > .q-btn__content').click();
    cy.get(':nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click();
    cy.get('.q-manual-focusable--focused > .q-item__section > .q-item__label').click();
    cy.get('.q-stepper__step-inner').click();
    cy.get('[data-cy=property-name]').clear();
    cy.get('[data-cy=property-name]').type('My Test Hotel');
    cy.get('[data-v-666419f7=""][data-v-393c5658=""] > :nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container').click();
    cy.get('.q-manual-focusable--focused > .q-item__section > .q-item__label').click();
    cy.get('.q-stepper__step-inner').click();
    cy.get('[data-cy=external-reference]').clear();
    cy.get('[data-cy=external-reference]').type('123');
    cy.get('[data-cy=package-id]').click();
    cy.get('.q-item__label').click();
    cy.get('[data-cy=send-email] > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg').click();
    cy.get('[data-cy=send-sms] > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg').click();
    cy.get('[data-cy=street-address]').clear();
    cy.get('[data-cy=street-address]').type('berger road');
    cy.get('[data-cy=city]').clear();
    cy.get('[data-cy=city]').type('Midrand');
    cy.get('[data-cy=zip-code]').clear();
    cy.get('[data-cy=zip-code]').type('1686');
    cy.get('[data-v-91b1d368=""][data-v-393c5658=""] > :nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click();
    cy.get('.q-field__native > [data-cy=country]').clear();
    cy.get('.q-field__native > [data-cy=country]').type('so');
    cy.get('.q-manual-focusable--focused > .q-item__section > .q-item__label').click();
    cy.get('[data-cy=email]').clear();
    cy.get('[data-cy=email]').type('sri@gmail.com');
    cy.get('.q-stepper__nav > .q-btn > .q-btn__wrapper > .q-btn__content').click();
    cy.get('.q-select__dropdown-icon').click();
    cy.get('.q-item__label').click();
    cy.get('[data-cy=mac-address]').clear();
    cy.get('[data-cy=mac-address]').type('2c:54:91:88:C9:E3');
    cy.get('[data-cy=ip-address]').clear();
    cy.get('[data-cy=ip-address]').type('17.5.7.8');
    cy.get('[data-cy=dns-name]').clear();
    cy.get('[data-cy=dns-name]').type('mytest.com');
    cy.get('[data-cy=username]').clear();
    cy.get('[data-cy=username]').type('sree');
    cy.get('[data-cy=password]').clear();
    cy.get('[data-cy=password]').type('raj@$');
    cy.get('.finish-button-black > .q-btn__wrapper > .q-btn__content').click();
    cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click();
    cy.get('.q-manual-focusable--focused > .q-item__section > .q-item__label').click();
    cy.get('[data-cy=host]').clear();
    cy.get('[data-cy=host]').type('234');
    cy.get('[data-cy=package-id]').click();
    cy.get('.q-item__label').click();
    cy.get('[data-cy=port]').clear();
    cy.get('[data-cy=port]').type('3452');
    cy.get('[data-cy=sales-outlet]').clear();
    cy.get('[data-cy=sales-outlet]').type('sdd');
    cy.get('.finish-button-black > .q-btn__wrapper > .q-btn__content').click();
    cy.get('[data-cy=host]').clear();
    cy.get('[data-cy=host]').type('234456');
    cy.get('.finish-button-black > .q-btn__wrapper > .q-btn__content').click();
    cy.get('[data-cy=portal-id]').click();
    cy.get('.q-item__label').click();
    cy.get('.finish-button-black > .q-btn__wrapper > .q-btn__content > .block').click();
    cy.get(':nth-child(2) > [style="width: 260px; text-transform: capitalize;"]').click();
    cy.get(':nth-child(2) > .q-td.text-left').click();
    cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
    cy.get(':nth-child(2) > .q-td.text-center').click();
 })
 
})





