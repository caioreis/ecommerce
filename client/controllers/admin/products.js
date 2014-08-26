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
ProductsNew = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    Session.set('docform',null);      
    Session.set('typeform','insert');      
  },

  action: function () {
    this.render();
  }
});
ProductsEdit = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('singleProduct',this.params._id);
  },

  data: function () {
    Session.set('typeform','update');      
    Session.set('Product_id',this.params._id);
  },

  action: function () {
    this.render();
  }
});
