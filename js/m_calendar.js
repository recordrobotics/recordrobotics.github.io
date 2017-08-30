
class Calendar
{
	constructor(e, docs, key, url)
	{
		this.parentE = e;
		this.discovery_docs = docs;
		this.api_key = key;
		this.calendar_id = url;

		this.parentE.html("<div class='wheel-loader-wrap'><div class='wheel-loader'></div></div>");

		gapi.load('client', function() {
	       		gapi.client.init({
	        		discoveryDocs: docs,
				apiKey: key
	  		}).then(function() {
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
				}, 1000);
			});
		});
	}
}
