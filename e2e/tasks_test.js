Feature('tasks')

Scenario('deve poder cadastrar uma nova tarefa',  ({ I }) => {
  const tasksName = 'Estudar JavaScript'

  I.sendDeleteRequest('/helper/tasks/' + tasksName)
  I.seeResponseCodeIsSuccessful()

  I.amOnPage('/')
  I.fillField('input[placeholder$=Task]', tasksName)
  I.click('Create')
  I.see(tasksName, '.task-item')

  I.wait(3)
})

Scenario.only('não deve cadastrar tarefas com nome duplicado', ({ I }) => {
  const task = {
    name: 'Estudar Automação',
    is_done: false,
  }

  I.sendDeleteRequest('/helper/tasks/' + task.name)
  I.seeResponseCodeIsSuccessful()

  I.sendPostRequest('/tasks/', task)
  I.seeResponseCodeIsSuccessful()

  I.amOnPage('/')
  I.fillField('input[placeholder$=Task]', task.name)
  I.click('Create')
  // I.see('Task already exists!', '.swal2-html-container')

  I.wait(3)
})