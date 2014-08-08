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

this.$('#textArea.editable').editable({
  success: function(response, newValue) {
    Products.update(Session.get('product_id_page'),{
      $set : {
        name : newValue
      }
    });
    $(this).editable('destroy').editable();
  }
});
  initSlider();
};

Template.Product.destroyed = function () {
};
