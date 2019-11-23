module.exports = function(app) {
  var controller = require('./Controller.js');

  // Users Routes
  app.route('/users')
    .get(controller.list_all_users)
    .post(controller.create_a_user);
    
  app.route('/users/:userId')
    .get(controller.read_a_user)
    .put(controller.update_a_user)
    .delete(controller.delete_a_user);
};