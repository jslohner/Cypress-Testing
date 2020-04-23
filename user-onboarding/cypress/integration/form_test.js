import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 6)
const email = `${username}@lambda.com`
const password = uuid().slice(0, 10)

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
})
