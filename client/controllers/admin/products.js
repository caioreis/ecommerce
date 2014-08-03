ProductsController = RouteController.extend({
  waitOn: function () {
      Meteor.subscribe('products');
  },

  data: function () {
      return Products.find({})
  },

  action: function () {
    this.render();
  }
});
