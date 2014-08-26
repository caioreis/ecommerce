/*****************************************************************************/
/* Products: Event Handlers and Helpers */
/*****************************************************************************/
// Products Index
Template.ProductsIndex.events({});
Template.ProductsIndex.helpers({
    products : function(){
        return Products.find();
    },
    TranslateAvailability : function(val){
    var title = [
      {trans: 'Imediata', value: 'Immediate'},
      {trans: 'Sob Encomenda', value: 'Custom Made'},
      {trans: 'Indisponível', value: 'Unavailable'}
    ];

    return _.findWhere(title,{value : val}).trans;
  }
});
// Products new
Template.ProductsNew.events({});
Template.ProductsNew.helpers({});
// Products edit
Template.ProductsEdit.events({});
Template.ProductsEdit.helpers({
    ProductDoc : function(){
        return Products.findOne({_id:Session.get('Product_id')})
    }
});

/*****************************************************************************/
/* Products: Lifecycle Hooks */
/*****************************************************************************/
Template.ProductsIndex.created = function () {};
Template.ProductsIndex.rendered = function () {};
Template.ProductsIndex.destroyed = function () {};
