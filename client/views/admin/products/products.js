/*****************************************************************************/
/* Products: Event Handlers and Helpers */
/*****************************************************************************/
// Products Index
Template.ProductsIndex.events({});
Template.ProductsIndex.helpers({
    products : function(){
        return Products.find();
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
