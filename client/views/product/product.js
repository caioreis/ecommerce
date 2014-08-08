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
  $(".editable").editable("destroy").editable({
    mode : 'inline',
    display: function() {},
    success: function(response, newValue) {
      var field = $(this).data('field');
      var set = {};
      set[field] = newValue;
      Products.update(Session.get('product_id_page'),{
        $set : set
      });
    }
  });

  $("#availability").editable("destroy").editable({
    source : [
      {text: 'Imediata', value: 'Immediate'},
      {text: 'Sob Encomenda', value: 'Custom Made'},
      {text: 'Indisponível', value: 'Unavailable'}
    ],
    mode : 'inline',
    display: function() {},
    success: function(response, newValue) {
      var field = $(this).data('field');
      Products.update(Session.get('product_id_page'),{
        $set : {
          availability : newValue
        }
      });
    }
  });
  initSlider();
};

Template.Product.destroyed = function () {
};
