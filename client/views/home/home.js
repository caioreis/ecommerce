/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Home.helpers({
  populate: function() {
  	console.log('Hello', Products.find({}, {reactive: true}).fetch());
    return Products.find({}, {reactive: false}).fetch();
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
