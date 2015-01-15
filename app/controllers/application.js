import Ember from "ember";

var ApplicationController = {
	userName: "David Ferreira",
	userEmail: "daminufe.ti@gmail.com",
	needs: ["tweet"],
	isAdding: Ember.computed.alias('controllers.tweet.isAdding'),
	isEditingUserData: false,
	actions: {
		addTweetBtn: function() {
			this.get('controllers.tweet').send('addTweet');
		},
		
		cancelTweetBtn: function() {
			this.get('controllers.tweet').send('cancelTweet');
		},
		
		editUserDetails: function() {
			this.set('isEditingUserData', true);
		},
		
		doneUserDetails: function() {
			this.set('isEditingUserData', false);
		}
	}
};

export default Ember.ObjectController.extend(ApplicationController);