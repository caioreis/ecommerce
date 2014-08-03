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
	this.route('products', {path: '/products'});
	this.route('product',{path: '/product/:name'});
});
