chrome.contextMenus.create({
	"title" : "Convert Unixtime to timestamp",
	"type" : "normal",
	"contexts" : ["selection"],
	"onclick" : function(info) {
		var ts = encodeURIComponent(info.selectionText);

		if (ts.match(/^\d{10}$/)) {
			var d = new Date(ts * 1000);

			// Get Local date data
			var yearLocal = d.getFullYear();
			var monthLocal = d.getMonth() + 1;
			var dayLocal = d.getDate();
			var hourLocal = d.getHours();
			var minuteLocal = d.getMinutes();
			var secondLocal = d.getSeconds();

			// Get UTC date data
			var yearUTC = d.getUTCFullYear();
			var monthUTC = d.getUTCMonth() + 1;
			var dayUTC = d.getUTCDate();
			var hourUTC = d.getUTCHours();
			var minuteUTC = d.getUTCMinutes();
			var secondUTC = d.getUTCSeconds();

			var outputLocal = dateOutput(yearLocal, monthLocal, dayLocal, hourLocal, minuteLocal, secondLocal);
			var outputUTC = dateOutput(yearUTC, monthUTC, dayUTC, hourUTC, minuteUTC, secondUTC);
			
			alert(outputLocal + " (Local)" + "\n" + outputUTC + " (UTC)");
		} else {
			alert("The selected string don't matches the Unixtime format.");
		}
	}
});

function dateOutput(year, month, day, hour, minute, second) {
	// Set output string
	var output = '';

	output += year;
	output += '-';
	output += (month < 10 ) ? '0' + month : month;
	output += '-';
	output += (day < 10 ) ? '0' + day : day;
	output += ' ';
	output += (hour < 10 ) ? '0' + hour : hour;
	output += ':';
	output += (minute < 10 ) ? '0' + minute : minute;
	output += ':';
	output += (second < 10 ) ? '0' + second : second;

	return output;
}

