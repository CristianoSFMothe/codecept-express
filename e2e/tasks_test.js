Feature('tasks');

Scenario('deve poder cadastrar uma nova tarefa',  ({ I }) => {
  I.amOnPage('/');
  I.fillField('input[placeholder$=Task]', 'Estudar JavaScript');
  I.click('Create');
  I.see('Estudar JavaScript', '.task-item');
  I.wait(1)
});
