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

  app.route('/advisors')
    .get(controller.list_all_advisors)
    .post(controller.create_a_advisor);
    
  app.route('/advisors/:advisorId')
    .get(controller.read_a_advisor)
    .put(controller.update_a_advisor)
    .delete(controller.delete_a_advisor);
};