Products = new Meteor.Collection('products', {
    schema : {
        name: {
            type: String
        },
        description: {
            type: String
        },
        measures: {
            type: [Object]
        },
        "measures.$.width": {
            type: Number
        },
        "measures.$.height": {
            type: Number
        },
        "measures.$.depth": {
            type: Number
        },
        "measures.$.weight": {
            type: Number
        },
        stock: {
            type: Number
        },
        availability: {
            type: String
        },
        price: {
            type: Number
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }
    }
});
