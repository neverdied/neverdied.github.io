$(function(){
	
	var note = $('#note'),
		ts = new Date(2018, 11, 23),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "距离考研还有"+days + " 天"  + ", ";
			message += hours + " 时"+ ", "+ " <br />";
			message += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+minutes + " 分"+ ", "+ " <br />";
			message += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+seconds + " 秒"+ " <br />";
			
			if(newYear){
				message += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp！！！";
			}
			else {
				message += "距离现在10天!";
			}
			
			note.html(message);
		}
	});
	
});
