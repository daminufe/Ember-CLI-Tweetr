import Ember from "ember";

var ApplicationController = {
	userName: "David Ferreira",
	userEmail: "daminufe.ti@gmail.com",
	searchQuery: '',
	actions: {
		searchAction: function() {
			var query = this.get('searchQuery');
			console.log(query);
		},

		searchByEmail: function() {

		}
	}
};

export default Ember.ObjectController.extend(ApplicationController);