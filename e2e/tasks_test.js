const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario('deve poder cadastrar uma nova tarefa',  ({ I }) => {
  const tasksName = faker.company.name()

  I.amOnPage('/')
  I.fillField('input[placeholder$=Task]', tasksName)
  I.click('Create')
  I.see(tasksName, '.task-item')

  I.wait(3)
});
