function set_hour(hour){
	if (hour < 0) {hour = 0;}
	if (hour > 23) {hour = 23;}
		
	hour = '' + hour;
	
	if (hour.length == 0){
		hour = '00'; 
	}
	if (hour.length == 1){
		hour = '0' + hour; 
	}
	return hour;		
}

function set_minute(minute){
	if (minute < 0) {minute = 0;}
	if (minute > 59) {minute = 59;}
	
	minute = '' + minute;
	
	if (minute.length == 0){
		minute = '00'; 
	}
	if (minute.length == 1){
		minute = '0' + minute; 
	}
	
	return minute;
}
		
function set_date(year, month, day){
	var data = {};
	
	if (year < 1990) {year = 1990;}
	if (year > 3000) {year = 3000;}
	data.year = '' + year;

	if (month < 1) {month = '1';}
	if (month > 12) {month = '12';}
	month = '' + month;	
	if (month.length == 0){month = '01';}
	if (month.length == 1){month = '0' + month;}
	data.month = month;
	
	var days = 32 - new Date(parseInt(year), parseInt(month) - 1, 32).getDate();
	if (day > days) {day = '' + days;}
	if (day < 1) {day = '1';}
	day = '' + day;
	if (day.length == 0){day = '01';}
	if (day.length == 1){day = '0' + day;}
	data.day = day;
	
	return data;
}

function update_date(id){
	var hour_from;
	var minute_from;
	var sec_from;
	var year_from;
	var month_from;
	var day_from;
	
	var hour_to;
	var minute_to;
	var sec_to;
	var year_to;
	var month_to;
	var day_to;
	
	if (id == ''){
		var d = new Date();
		$( "#hour_from" ).val('00');
		hour_from = set_hour($( "#hour_from" ).val());
		$( "#hour_from" ).val(hour_from);
		
		$( "#minute_from" ).val('00');
		minute_from = set_minute($( "#minute_from" ).val());
		$( "#minute_from" ).val(minute_from);
		
		$( "#sec_from" ).val('00');
		sec_from = set_minute($( "#sec_from" ).val());
		$( "#sec_from" ).val(sec_from);
		
		$( "#year_from" ).val(d.getFullYear());
		year_from = $("#year_from").val();
		$( "#month_from" ).val(d.getMonth() + 1);
		month_from = $("#month_from").val();
		$( "#day_from" ).val(d.getDate());
		day_from = $("#day_from").val();
		
		var data = set_date(year_from, month_from, day_from);
	
		$( "#day_from" ).val(data.day);
		$( "#month_from" ).val(data.month);
		$( "#year_from" ).val(data.year);
		
		result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
		$( "#datepicker" ).html(result);

		$( "#hour_to" ).val(d.getHours());
		hour_to = set_hour($( "#hour_to" ).val());
		$( "#hour_to" ).val(hour_to);
		
		$( "#minute_to" ).val(d.getMinutes());
		minute_to = set_minute($( "#minute_to" ).val());
		$( "#minute_to" ).val(minute_to);
		
		$( "#sec_to" ).val(d.getSeconds());
		sec_to = set_minute($( "#sec_to" ).val());
		$( "#sec_to" ).val(sec_to);
		
		$( "#year_to" ).val(d.getFullYear());
		year_to = $("#year_to").val();
		$( "#month_to" ).val(d.getMonth() + 1);
		month_to = $("#month_to").val();
		$( "#day_to" ).val(d.getDate());
		day_to = $("#day_to").val();
		
		var data = set_date(year_to, month_to, day_to);
	
		$( "#day_to" ).val(data.day);
		$( "#month_to" ).val(data.month);
		$( "#year_to" ).val(data.year);
		
		result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
		$( "#datepicker2" ).html(result);
	}
	
	hour_from = $( "#hour_from" ).val();
	minute_from = $( "#minute_from" ).val();
	sec_from = $( "#sec_from" ).val();
	day_from = $( "#day_from" ).val();
	month_from = $( "#month_from" ).val();
	year_from = $( "#year_from" ).val();
	
	hour_to = $( "#hour_to" ).val();
	minute_to = $( "#minute_to" ).val();
	sec_to = $( "#sec_to" ).val();
	day_to = $( "#day_to" ).val();
	month_to = $( "#month_to" ).val();
	year_to = $( "#year_to" ).val();
	
	switch (id) {
		case "hour_up_first":
			hour_from++;
			hour_from = set_hour(hour_from);
			$( "#hour_from" ).val(hour_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "hour_down_first":
			hour_from--;
			hour_from = set_hour(hour_from);
			$( "#hour_from" ).val(hour_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "hour_change_first":
			hour_from = set_hour(hour_from);
			$( "#hour_from" ).val(hour_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "minute_up_first":
			minute_from++;
			minute_from = set_minute(minute_from);
			$( "#minute_from" ).val(minute_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;							
		case "minute_down_first":
			minute_from--;
			minute_from = set_minute(minute_from);
			$( "#minute_from" ).val(minute_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "minute_change_first":
			minute_from = set_minute(minute_from);
			$( "#minute_from" ).val(minute_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;							
		case "sec_up_first":
			sec_from++;
			sec_from = set_minute(sec_from);
			$( "#sec_from" ).val(sec_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;							
		case "sec_down_first":
			sec_from--;
			sec_from = set_minute(sec_from);
			$( "#sec_from" ).val(sec_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "sec_change_first":
			sec_from = set_minute(sec_from);
			$( "#sec_from" ).val(sec_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
				

		case "day_up_first":
			day_from++;
			var data = set_date(year_from, month_from, day_from);
			day_from = data.day;
			$( "#day_from" ).val(day_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;							
		case "day_down_first":
			day_from--;
			var data = set_date(year_from, month_from, day_from);
			day_from = data.day;
			$( "#day_from" ).val(day_from);
						
			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "day_change_first":
			var data = set_date(year_from, month_from, day_from);
			day_from = data.day;
			$( "#day_from" ).val(day_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
					
						
		case "month_up_first":
			month_from++;
			var data = set_date(year_from, month_from, day_from);
			month_from = data.month;
			$( "#month_from" ).val(month_from);
			
			day_from = data.day;
			$( "#day_from" ).val(day_from);
			
			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;							
		case "month_down_first":
			month_from--;
			var data = set_date(year_from, month_from, day_from);
			month_from = data.month;
			$( "#month_from" ).val(month_from);
			
			day_from = data.day;
			$( "#day_from" ).val(day_from);
			
			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "month_change_first":
			var data = set_date(year_from, month_from, day_from);
			month_from = data.month;
			$( "#month_from" ).val(month_from);

			day_from = data.day;
			$( "#day_from" ).val(day_from);

			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;


		case "year_up_first":
			year_from++;
			var data = set_date(year_from, month_from, day_from);
			year_from = data.year;
			$( "#year_from" ).val(year_from);
			
			day_from = data.day;
			$( "#day_from" ).val(day_from);
			
			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;							
		case "year_down_first":
			year_from--;
			
			var data = set_date(year_from, month_from, day_from);
			year_from = data.year;
			$( "#year_from" ).val(year_from);
			
			day_from = data.day;
			$( "#day_from" ).val(day_from);
			
			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;
		case "year_change_first":
			var data = set_date(year_from, month_from, day_from);
			year_from = data.year;
			$( "#year_from" ).val(year_from);
			
			day_from = data.day;
			$( "#day_from" ).val(day_from);
			
			result = year_from + '-' + month_from + '-' + day_from + ' ' + hour_from + ':' + minute_from + ':' + sec_from;
			$( "#datepicker" ).html(result);
			break;	


		case "hour_up_last":
			hour_to++;
			hour_to = set_hour(hour_to);
			$( "#hour_to" ).val(hour_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "hour_down_last":
			hour_to--;
			hour_to = set_hour(hour_to);
			$( "#hour_to" ).val(hour_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "hour_change_last":
			hour_to = set_hour(hour_to);
			$( "#hour_to" ).val(hour_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "minute_up_last":
			minute_to++;
			minute_to = set_minute(minute_to);
			$( "#minute_to" ).val(minute_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;							
		case "minute_down_last":
			minute_to--;
			minute_to = set_minute(minute_to);
			$( "#minute_to" ).val(minute_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "minute_change_last":
			minute_to = set_minute(minute_to);
			$( "#minute_to" ).val(minute_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;							
		case "sec_up_last":
			sec_to++;
			sec_to = set_minute(sec_to);
			$( "#sec_to" ).val(sec_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;							
		case "sec_down_last":
			sec_to--;
			sec_to = set_minute(sec_to);
			$( "#sec_to" ).val(sec_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "sec_change_last":
			sec_to = set_minute(sec_to);
			$( "#sec_to" ).val(sec_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
				

		case "day_up_last":
			day_to++;
			var data = set_date(year_to, month_to, day_to);
			day_to = data.day;
			$( "#day_to" ).val(day_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;							
		case "day_down_last":
			day_to--;
			var data = set_date(year_to, month_to, day_to);
			day_to = data.day;
			$( "#day_to" ).val(day_to);
						
			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "day_change_last":
			var data = set_date(year_to, month_to, day_to);
			day_to = data.day;
			$( "#day_to" ).val(day_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
					
						
		case "month_up_last":
			month_to++;
			var data = set_date(year_to, month_to, day_to);
			month_to = data.month;
			$( "#month_to" ).val(month_to);
			
			day_to = data.day;
			$( "#day_to" ).val(day_to);
			
			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;							
		case "month_down_last":
			month_to--;
			var data = set_date(year_to, month_to, day_to);
			month_to = data.month;
			$( "#month_to" ).val(month_to);
			
			day_to = data.day;
			$( "#day_to" ).val(day_to);
			
			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "month_change_last":
			var data = set_date(year_to, month_to, day_to);
			month_to = data.month;
			$( "#month_to" ).val(month_to);

			day_to = data.day;
			$( "#day_to" ).val(day_to);

			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;


		case "year_up_last":
			year_to++;
			var data = set_date(year_to, month_to, day_to);
			year_to = data.year;
			$( "#year_to" ).val(year_to);
			
			day_to = data.day;
			$( "#day_to" ).val(day_to);
			
			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;							
		case "year_down_last":
			year_to--;
			
			var data = set_date(year_to, month_to, day_to);
			year_to = data.year;
			$( "#year_to" ).val(year_to);
			
			day_to = data.day;
			$( "#day_to" ).val(day_to);
			
			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;
		case "year_change_last":
			var data = set_date(year_to, month_to, day_to);
			year_to = data.year;
			$( "#year_to" ).val(year_to);
			
			day_to = data.day;
			$( "#day_to" ).val(day_to);
			
			result = year_to + '-' + month_to + '-' + day_to + ' ' + hour_to + ':' + minute_to + ':' + sec_to;
			$( "#datepicker2" ).html(result);
			break;	
	}
};
				
$(document).ready(function() {					
	$("input[type='number']").click(function () {
		$(this).select();
	});

	$("#hour_up_first").click(function(event){
		update_date(event.target.id);
	});
	
	$("#hour_down_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#hour_from").on('change',function(event){
		update_date('hour_change_first');
	});	

	
	$("#minute_up_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#minute_down_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#minute_from").on('change',function(event){
		update_date('minute_change_first');
	});	
	
	
	$("#sec_up_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#sec_down_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#sec_from").on('change',function(event){
		update_date('sec_change_first');
	});
	
	
	$("#day_up_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#day_down_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#day_from").on('change',function(event){
		update_date('day_change_first');
	});	

	
	$("#month_up_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#month_down_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#month_from").on('change',function(event){
		update_date('month_change_first');
	});	
	

	$("#year_up_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#year_down_first").click(function(){
		update_date(event.target.id);
	});
	
	$("#year_from").on('change',function(event){
		update_date('year_change_first');
	});	

	$("#hour_up_last").click(function(event){
		update_date(event.target.id);
	});
	
	$("#hour_down_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#hour_to").on('change',function(event){
		update_date('hour_change_last');
	});	

	
	$("#minute_up_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#minute_down_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#minute_to").on('change',function(event){
		update_date('minute_change_last');
	});	
	
	
	$("#sec_up_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#sec_down_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#sec_to").on('change',function(event){
		update_date('sec_change_last');
	});
	
	
	$("#day_up_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#day_down_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#day_to").on('change',function(event){
		update_date('day_change_last');
	});	

	
	$("#month_up_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#month_down_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#month_to").on('change',function(event){
		update_date('month_change_last');
	});	
	

	$("#year_up_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#year_down_last").click(function(){
		update_date(event.target.id);
	});
	
	$("#year_to").on('change',function(event){
		update_date('year_change_last');
	});	
	
});