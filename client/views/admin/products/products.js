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
Template.ProductsIndex.created = function () {};
Template.ProductsIndex.rendered = function () {};
Template.ProductsIndex.destroyed = function () {};
