
class Calendar
{
	constructor(e, docs, id, key, scope, url)
	{
		this.parentE = e;
		this.discovery_docs = docs;
		this.client_id = id;
		this.api_key = key;
		this.scopes = scope;
		this.calendar_id = url;

		gapi.load('client:auth2', function() {
	        	gapi.client.init({
	        		discoveryDocs: this.discovery_docs,
	        		clientId: this.client_id,
				apiKey: this.api_key,
	          		scope: this.scopes
	  		});

			$(this.parentE).load("/util/m_calendar.html", function() {
				gapi.client.calendar.events.list({
		        		'calendarId': this.calendar_id //'belmontschools.net_qucdk22mq5p84o573a88motvpk@group.calendar.google.com'
		        	}).then(function(response) {
		          		var events = response.result.items;

					//events.each(function() {

					//});
				});
			});
		});
	}
}
