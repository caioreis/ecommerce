/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'NotFound',
	templateNameConverter: 'upperCamelCase',
	routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
	this.route('home', {path: '/'});
	this.route('product',{path: '/product/:_id'});



  /* Admin Routes */

    // Products
    this.route('products.index', {
      path: '/products',
      layoutTemplate : 'Admin',
      controller: 'ProductsIndex'
    });
    this.route('products.new', {
      path: '/products/create',
      layoutTemplate : 'Admin',
      controller: 'ProductsNew'

    });
    this.route('products.edit', {
      path: '/products/:_id/edit',
      layoutTemplate : 'Admin',
      controller: 'ProductsEdit'
    });
  });
