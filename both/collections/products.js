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
            label: "Disponibilidade",
            allowedValues: ['Immediate','Custom Made', 'Unavailable'],
            autoform: {
                options: [
                    {label: "Imediata", value: "Immediate"},
                    {label: "Sob Encomenda", value: "Custom Made"},
                    {label: "Indisponível", value: "Unavailable"}
                ]
            }
        },
        price: {
            type: Number,
            label: "Preço",
            decimal : true
        }
    }
});
