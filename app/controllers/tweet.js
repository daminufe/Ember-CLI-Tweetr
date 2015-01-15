import Ember from "ember";

var TweetController = {
	isAdding: false,
	emailField: '',
	tweetField: '',
	actions: {
		addTweet: function() {
			this.set('isAdding', true);
		},

		postTweet: function() {
			this.set('isAdding', false);
			var newTweet = this.store.createRecord('tweet', {
				email: this.get('emailField'),
				content: this.get('tweetField')
			});

			newTweet.save();
		}, 

		tweetLimitReached: function() {
			if (this.get('tweetField').length === 140) {
				// TODO: Modify to do something more fancy
				alert('Maximum amount of characters reached');
			}
		}
	}
};

export default Ember.ObjectController.extend(TweetController);