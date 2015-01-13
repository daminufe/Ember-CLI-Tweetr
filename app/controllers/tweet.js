import Ember from "ember";

var TweetController = {
	isAdding: false,
	actions: {
		add: function() {
			this.set('isAdding', true);
		},

		doneAdd: function() {
			this.set('isAdding', false);
		}
	}
};

export default Ember.ObjectController.extend(TweetController);