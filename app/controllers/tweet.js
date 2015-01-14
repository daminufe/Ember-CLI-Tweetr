import Ember from "ember";

var TweetController = {
	isAdding: false,
	actions: {
		addTweet: function() {
			this.set('isAdding', true);
		},

		postTweet: function() {
			this.set('isAdding', false);
		}, 

		tweetLimitReached: function() {
			if (this.get('tweetField').length == 140) {
				// TODO: Modify to do something more fancy
				alert('Maximum amount of characters reached');
			}
		}//.observes('tweetField')
	}
};

export default Ember.ObjectController.extend(TweetController);