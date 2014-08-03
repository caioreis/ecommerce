/*****************************************************************************/
/* Products Publish Functions
/*****************************************************************************/

Meteor.publish('products', function () {
	return Products.find({});
});

Meteor.publish('singleProduct', function (_id) {
	return Products.find({_id: _id});
});
