HomeController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe('products');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
