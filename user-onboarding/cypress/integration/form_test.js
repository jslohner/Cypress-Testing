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
})
