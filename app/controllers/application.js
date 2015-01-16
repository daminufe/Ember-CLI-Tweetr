import Ember from "ember";

var ApplicationController = {
	userName: Ember.$.cookie("userName") || "",
	userEmail: Ember.$.cookie("userEmail") || "",
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
			Ember.$.cookie("userName", this.get('userName'));
			Ember.$.cookie("userEmail", this.get('userEmail'));

			this.set('isEditingUserData', false);
		}
	}
};

export default Ember.ObjectController.extend(ApplicationController);