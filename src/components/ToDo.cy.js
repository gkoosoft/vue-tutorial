import ToDo from './ToDo.vue'

describe('<ToDo />', () => {
  const EAT = 'eat'
  const DEV = 'develop'
  const SLP = 'sleep'
  
  it('click of add todo should create todo list', () => {
    cy.mount(ToDo, { props: { msg: 'ToDo App' } })
    cy.get('#newTodo').type(EAT)
    cy.get('#btnAddTodo').click()

    cy.get('#newTodo').type(DEV)
    cy.get('#btnAddTodo').click()

    cy.get('#newTodo').type(SLP)
    cy.get('#btnAddTodo').click()

    cy.get('#todo_0').should('have.value', EAT)
    cy.get('#todo_1').should('have.value', DEV)
    cy.get('#todo_2').should('have.value', '')

  })

  it('todo list', () => {
    cy.mount(ToDo, { props: { msg: 'ToDo App' } })
    cy.get('#newTodo').type(DEV)
    cy.get('#btnAddTodo').click()
    cy.get('#todo_0').should('have.value', DEV)
    
    cy.get('#btnRemove_0').click()
    cy.get('#todo_').should('not.exist');
  })
})