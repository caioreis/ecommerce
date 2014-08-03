Products = new Meteor.Collection('products', {
    schema : {
        name: {
            type: String,
            label : "Nome"
        },
        description: {
            type: String,
            label: "Descrição"
        },
        measures: {
            type: Object
        },
        "measures.width": {
            type: Number,
            label: "Largura",
            decimal : true
        },
        "measures.height": {
            type: Number,
            label: "Altura",
            decimal : true
        },
        "measures.depth": {
            type: Number,
            label: "Profundidade",
            decimal : true
        },
        "measures.weight": {
            type: Number,
            label: "Peso",
            decimal : true
        },
        stock: {
            type: Number,
            label: "Estoque"
        },
        availability: {
            type: String,
            label: "Disponibilidade Imediata",
            allowedValues: ['Y', 'N'],
            autoform: {
                options: [
                    {label: "Sim", value: "Y"},
                    {label: "Não", value: "N"}
                ]
            }
        },
        price: {
            type: Number,
            label: "Preço",
            decimal : true
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }
    }
});
