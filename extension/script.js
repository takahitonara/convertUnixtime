chrome.contextMenus.create({
    "title": "Convert Unixtime to timestamp",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        var ts = encodeURIComponent(info.selectionText);

        if ( ts.match(/^\d{10}$/) ) {
	        var d = new Date( ts * 1000 );
	        var year  = d.getFullYear();
	        var month = d.getMonth() + 1;
	        var day  = d.getDate();
	        var hour = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
	        var min  = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
	        var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
	        alert(year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec);
        } else {
        	alert("The selected string don't matches the Unixtime format.");
        }
    }
});