if (Products.find({}).count() == 0) {
	for (var i = 0; i < 4; i++){
		Products.insert({
			name: "Product " + i,
			description: "Descrição",
			measures : {
				width: 0.0 + i,
                height: 0.0 + i,
                depth: 0.0 + i,
                weight: 0.0 + i
			},
			stock: i,
			availability: "Immediate",
			price: "30" + i,
            createdAt : new Date(),
            updatedAt : new Date()
		});
	}
}