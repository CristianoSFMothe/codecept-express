Feature('tasks')

Scenario('deve poder cadastrar uma nova tarefa',  ({ I }) => {
  const tasksName = 'Estudar JavaScript'

  I.sendDeleteRequest('http://localhost:3333/helper/tasks/' + tasksName)
  I.seeResponseCodeIsSuccessful()

  I.amOnPage('/')
  I.fillField('input[placeholder$=Task]', tasksName)
  I.click('Create')
  I.see(tasksName, '.task-item')

  I.wait(3)
})
