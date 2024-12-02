// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    deleteByHelper: function(taskName) {
      this.sendDeleteRequest('/helper/tasks/' + taskName)
      this.seeResponseCodeIsSuccessful()
    },

    postTask: function(task) {
      this.sendPostRequest('/tasks/', task)
      this.seeResponseCodeIsSuccessful()
    },
  });
}
