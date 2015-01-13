import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource("application", function() {
		this.resource('tweet');
	});

	this.resource("tweet", function() {
		this.resource('tweet', { path: ':tweet_id' });
	});
});

export default Router;
