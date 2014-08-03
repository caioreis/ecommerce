ProductsIndex = RouteController.extend({
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
ProductsEdit = RouteController.extend({
  waitOn: function () {
      Meteor.subscribe('SingleProduct',this.params._id);
  },

  data: function () {
      return Session.set('Product_id',this.params._id);
  },

  action: function () {
    this.render();
  }
});
