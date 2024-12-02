Feature('tasks')

Scenario('deve poder cadastrar uma nova tarefa',  ({ I }) => {
  const taskName = 'Estudar JavaScript'

  I.deleteByHelper(taskName)
  I.createTask(taskName)
  
  I.see(taskName, '.task-item')
})

Scenario('não deve cadastrar tarefas com nome duplicado', ({ I }) => {
  const task = {
    name: 'Estudar Automação',
    is_done: false,
  }

  I.deleteByHelper(task.name)
  I.postTask(task)
  I.createTask(task.name)

  I.see('Task already exists!', '.swal2-html-container')

})