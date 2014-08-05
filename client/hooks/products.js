AutoForm.hooks({
    ProductsForm: {
        before: {
            insert: function(doc, template) {
                doc.createdAt = new Date();
                doc.updatedAt = new Date();
                return doc;
            }
        },
        after: {
            insert: function(error, result, template) {
                if(error){
                    console.log(error)
                    Toast.error("Ocorreu um erro inesperado.");
                }
                Toast.success("Produto Salvo com sucesso.");
                Router.go('products.index');
            },
            update: function(error, result, template) {
                if(error){
                    console.log(error)
                    Toast.error("Ocorreu um erro inesperado.");
                }
                Toast.success("Produto Salvo com sucesso.");
                Router.go('products.index');
            },
            remove: function(error, result, template) {
                if(error){
                    console.log(error)
                    Toast.error("Ocorreu um erro inesperado.");
                }
                Toast.success("Produto removido com sucesso.");
                Router.go('products.index');
            }
        }
    }
});