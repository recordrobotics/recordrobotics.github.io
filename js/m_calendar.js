
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

		this.parentE.html("<div class='wheel-loader-wrap'><div class='wheel-loader'></div></div>");

		gapi.load('client:auth2', function() {
	        	gapi.client.init({
	        		discoveryDocs: docs,
	        		clientId: id,
				apiKey: key,
	          		scope: scope
	  		});

			setTimeout(function() {
				$(e).html("").load("/util/m_calendar.html", function() {
					console.log("loaded");
					gapi.client.calendar.events.list({
		        			'calendarId': url //'belmontschools.net_qucdk22mq5p84o573a88motvpk@group.calendar.google.com'
		        		}).then(function(response) {
		          			var events = response.result.items;

						console.log(events);

						//events.each(function() {

						//});
					});
				});
			}, 2000);
		});
	}
}
