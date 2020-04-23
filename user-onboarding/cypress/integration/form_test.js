import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 6)
const email = `${username}@lambda.com`
const password = uuid().slice(0, 10)

const errorMessages = {
	usrEmpty: 'Username is required',
	usrMinChars: 'Username must have at least 3 characters',
	emailEmpty: 'Email address is required',
	emailValid: 'Please enter a valid email address',
	passEmpty: 'Password is required',
	passMinChars: 'Password needs a minimum of 6 characters',
	terms: 'In order to proceed, you must agree to the terms of service by checking the checkbox'
}

describe('User Onboarding Form', () => {
	it('can navigate to site', () => {
		cy.visit('')

		cy.url().should('include', 'localhost')
	})

	it('can type a username', () => {
		cy.get('[data-username_input="username_input"]')
			.type(username)
			.should('have.value', username)
	})

	it('can type an email', () => {
		cy.get('[data-email_input="email_input"]')
			.type(email)
			.should('have.value', email)
	})

	it('can type a password', () => {
		cy.get('[data-password_input="password_input"]')
			.type(password)
			.should('have.value', password)
	})

	it('can check terms of service checkbox', () => {
		cy.get('[data-terms_state="terms_state"]')
			.check()
			.should('have.checked')
	})

	it('can submit form', () => {
		cy.get('[data-submit_button="submit_button"]')
			.click()
			.should('have.disabled')
	})

	it('check for username validation errors', () => {
		cy.get('[data-username_input="username_input"]')
			.type('1')
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.usrMinChars)
		cy.get('[data-username_input="username_input"]')
			.type('{selectall}{del}')
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.usrEmpty)
	})

	it('check for email validation errors', () => {
		cy.get('[data-email_input="email_input"]')
			.type('bingus')
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.emailValid)
		cy.get('[data-email_input="email_input"]')
			.type('{selectall}{del}')
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.emailEmpty)
	})

	it('check for password validation errors', () => {
		cy.get('[data-password_input="password_input"]')
			.type('1')
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.passMinChars)
		cy.get('[data-password_input="password_input"]')
			.type('{selectall}{del}')
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.passEmpty)
	})

	it('check for terms validation error', () => {
		cy.get('[data-terms_state="terms_state"]')
			.check()
			.uncheck()
		cy.get('[data-error_messages="error_messages"]')
			.contains(errorMessages.terms)
	})
})
