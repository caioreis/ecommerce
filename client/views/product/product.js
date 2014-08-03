/*****************************************************************************/
/* Product: Event Handlers and Helpers */
/*****************************************************************************/
Template.Product.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Product.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Product: Lifecycle Hooks */
/*****************************************************************************/
Template.Product.created = function () {
};

Template.Product.rendered = function () {
  initSlider();
};

Template.Product.destroyed = function () {
};
