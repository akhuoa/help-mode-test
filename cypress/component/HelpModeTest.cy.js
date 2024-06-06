import HelpModeTest from '../../src/components/HelpModeTest.vue'

describe('<HelpModeTest />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelpModeTest)
  })
})
