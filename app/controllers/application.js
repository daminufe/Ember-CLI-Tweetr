import Ember from "ember";

var originalTweets;

var ApplicationController = {
	userName: Ember.$.cookie("userName") || "",
	userEmail: Ember.$.cookie("userEmail") || "",
	searchQuery: "",
	searchType: "",
	needs: ["tweet"],
	isAdding: Ember.computed.alias('controllers.tweet.isAdding'),
	isEditingUserData: false,
	hasSearchQuery: false,
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
	},
	searchAction: function() {
		var query = this.get('searchQuery');
		var model = this.get('controllers.tweet.model');
		originalTweets = originalTweets || model;

		if (query.length > 0) {
			this.set('hasSearchQuery', true);
			
			var isEmail = (new RegExp(/[^@]+@[^@]+\.[^@]+/)).test(this.get('searchQuery'));
			var filterField = isEmail ? 'email' : 'content';
			var result;

			if (isEmail) {
				result = this.store.find('tweet', { e: query });
			} else {
				result = this.store.find('tweet', { q: query });
			}

			var that = this;
			result.then(function(tweets) {
				that.set('controllers.tweet.model', tweets);
			});

			this.set('searchType', filterField);
		} else {
			this.set('controllers.tweet.model', this.store.all('tweet'));
			this.set('hasSearchQuery', false);

		}

	}.observes('searchQuery')
};

export default Ember.ObjectController.extend(ApplicationController);