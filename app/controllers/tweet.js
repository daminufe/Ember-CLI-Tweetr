import Ember from "ember";

var TweetController = {
	needs: ['application'],
	sorting: ['created:desc'],
	sortedContent: Em.computed.sort('@this', 'sorting'),
	userName: Ember.computed.alias('controllers.application.userName'),
	userEmail: Ember.computed.alias('controllers.application.userEmail'),
	isAdding: false,
	isValidEmail: false,
	isValidContent: false,
	isNotValidTweet: Ember.computed.not('isValidEmail') && Ember.computed.not('isValidContent'),
	emailField: Ember.computed.alias('controllers.application.userEmail') || '',
	tweetField: '',
	actions: {
		addTweet: function() {

			this.set('isAdding', true);
		},

		cancelTweet: function() {
			this.set('isAdding', false);
		},

		postTweet: function() {
			this.set('isAdding', false);
			var newTweet = this.store.createRecord('tweet', {
				email: this.get('emailField'),
				content: this.get('tweetField')
			});

			newTweet.save();
		}, 

		checkEmailField: function() {
			var patt = new RegExp(/[^@]+@[^@]+\.[^@]+/);
			var isValid = patt.test(this.get('emailField'));
			this.set('isValidEmail', isValid);
		}, 

		checkTweetField: function() {
			var tweet_len = this.get('tweetField').length;

			if (tweet_len >= 5 && tweet_len <= 140) {
				this.set('isValidContent', true);
			} else {
				this.set('isValidContent', false);
			}

			if (tweet_len === 140) {
				// TODO: Modify to do something more fancy
				alert('Maximum amount of characters reached');
			}
		}
	}
};

export default Ember.ObjectController.extend(TweetController);