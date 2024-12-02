Feature('tasks')

const tasks = new DataTable(['name'])

tasks.add(['Fazer compras'])
tasks.add(['Ler um livro de Javascript'])
tasks.add(['Estudar NodeJs'])
tasks.add(['Ler um livro de Node.js'])
tasks.add(['Ler um livro de Testes de Software'])

Data(tasks).Scenario('deve poder cadastrar uma nova tarefa',  ({ I, tasksPage, current }) => {
  const taskName = current.name

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