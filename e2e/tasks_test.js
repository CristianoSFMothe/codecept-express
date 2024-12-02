Feature('tasks')

Scenario('deve poder cadastrar uma nova tarefa',  ({ I, tasksPage }) => {
  const taskName = 'Estudar JavaScript'

  I.deleteByHelper(taskName)
  tasksPage.create(taskName)
  tasksPage.haveTask(taskName)
})

Scenario('não deve cadastrar tarefas com nome duplicado', ({ I, tasksPage }) => {
  const task = {
    name: 'Estudar Automação',
    is_done: false,
  }

  I.deleteByHelper(task.name)
  I.postTask(task)
  tasksPage.create(task.name)
  tasksPage.popUpHaveTask('Task already exists!')

})