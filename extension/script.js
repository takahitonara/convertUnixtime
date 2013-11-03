chrome.contextMenus.create({
    "title": "Convert Unixtime to timestamp",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        var ts = encodeURIComponent(info.selectionText);

        if ( ts.match(/^\d{10}$/) ) {
	        var d = new Date( ts * 1000 );
	        
	        // Get date data
	        var year   = d.getFullYear();
	        var month  = d.getMonth() + 1;
	        var day    = d.getDate();
	        var hour   = d.getHours();
	        var minute = d.getMinutes();
	        var second = d.getSeconds();
	        
	        // Set output string
	        var output = '';
	        
	        output += year;
	        output += '-';
	        output += ( month  > 10 ) ? month  : '0' + month;
	        output += '-';
	        output += ( day    > 10 ) ? day    : '0' + day;
	        output += ' ';
	        output += ( hour   > 10 ) ? hour   : '0' + hour;
	        output += ':';
	        output += ( minute > 10 ) ? minute : '0' + minute;
	        output += ':';
	        output += ( second > 10 ) ? second : '0' + second;

 	        alert(output);
        } else {
        	alert("The selected string don't matches the Unixtime format.");
        }
    }
});