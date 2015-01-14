import Ember from "ember";

var TweetController = {
	isAdding: false,
	actions: {
		addTweet: function() {
			this.set('isAdding', true);
		},

		postTweet: function() {
			this.set('isAdding', false);
			this.get('store').commit();
			this.get('target.router').transitionTo('index');
		}, 

		tweetLimitReached: function() {
			if (this.get('tweetField').length == 140) {
				// TODO: Modify to do something more fancy
				alert('Maximum amount of characters reached');
			}
		}
	}
};

export default Ember.ObjectController.extend(TweetController);