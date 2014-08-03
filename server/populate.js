if (Products.find({}).count() == 0) {
	for (var i = 0; i < 4; i++){
		Products.insert({
			name: "Product " + i,
			description: "Descrição",
			measures : {
				size: "size", weight: "weight"
			}, 
			stock: i,  
			availability: "Ok", 
			price: "30" + i 
		});
	}
}