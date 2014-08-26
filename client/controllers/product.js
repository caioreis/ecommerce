ProductController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe('singleProduct', this.params._id);
  },

  data: function () {
  	Session.set('product_id_page',this.params._id);
  	return Products.findOne();
  },

  action: function () {
    this.render();
  }
});
