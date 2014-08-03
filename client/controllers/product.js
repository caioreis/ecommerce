ProductController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe('singleProduct', this.params._id);
  },

  data: function () {
  	return Products.findOne();
  },

  action: function () {
    this.render();
  }
});
