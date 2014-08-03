AutoForm.hooks({
  insertProductsForm: {
    onSuccess: function(operation, result, template) {
    	 Router.go('products.index');
    	 return false;
    }, 
    onError: function(operation, error, template) {
      console.log(error, template);
    }
  }
});
