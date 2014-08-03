/*****************************************************************************/
/* Products: Event Handlers and Helpers */
/*****************************************************************************/
// Products Index
Template.ProductsIndex.events({});
Template.ProductsIndex.helpers({});
// Products new
Template.ProductsNew.events({
    'click #submit_form_product' : function(e,tpl){
        e.preventDefault();
        alert('ok')
    }
});
Template.ProductsNew.helpers({});

/*****************************************************************************/
/* Products: Lifecycle Hooks */
/*****************************************************************************/
Template.Products.created = function () {};
Template.Products.rendered = function () {};
Template.Products.destroyed = function () {};
