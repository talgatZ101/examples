var var1;
var userdetid;
var options;
var cur_task_id;	
var address;
var date_end;
var host;
var current_city;
var host = "http://151.248.115.164";
var curcut = "dkfjkdnfjkdsfn33";





function getBids(task_id,auction_id){
	var data ={};
	data.var1 = 'getBid';
	data.task_id=task_id;
	data.auction_id = auction_id;
	var address = [];
	$.ajax({
		url: host+'/advanced/tasks-markers/get-bid',
		data: data,
		type: 'POST',
		dataType:'JSON',
		success: function(data){
			adr_array = data;
			for(var i in data){
				$( "#bids_"+task_id ).append( "<b></b>"+
				"Курьер"+data[i]["surname"]+data[i]["sum"]+" " );
														
			}
		}
		
	});
	
}

//ymap1
function getBidsModal(task_id,auction_id){
	var data2 ={};
	data2.var1 = 'get_auction_id';
	data2.task_id=task_id;
	data2.auction_id = auction_id;
	var address = [];
	$.ajax({
		url: host+'/advanced/tasks/get_auction_id',
		data: data2,
		type: 'POST',
		dataType:'JSON',
		success: function(data){
			console.log(data);
			auction_id11 = JSON.parse(data);
			adr_array = data;
			for(var i in data){
				var data ={};
				data.var1 = 'get_auction_id';
				data.task_id=task_id;
				data.auction_id = auction_id11;
				var address = [];
				$.ajax({
					url: host+'/advanced/tasks-markers/get-bid2',
					data: data,
					type: 'POST',
					dataType:'JSON',
					success: function(data){
						console.log(data);
						adr_array = data;
						$( "#cc1" ).html('');
						for(var i in data){
							$( "#cc1" ).append("<b></b>"+
							"откликнулся Курьер"+data[i]["surnme"]+"<br> сумма задания "+data[i]["sum"]+" ");
				
						}
							
					}
		
				});
					
			}
							
		}
		
	});
	
}



function tasks_customer_accept(task_id){
	var data ={};
	data.var1 = 'getBid';
	data.task_id=task_id;
	var address = [];
	$.ajax({
		url: host+'/advanced/tasks/customer111',
		data: data,
		type: 'POST',
		dataType:'JSON',
		success: function(data){
			console.log(data);
			adr_array = data;
			for(var i in data){
				$( "#bids_"+task_id ).append( "<b></b>Курьер"+data[i]["surname"]+data[i]["sum"]+" " );
								
			}
		}
		
	});
}



function get_addr(task_id){
					var data1 ={};
					var name1 = "getMarkers";
					data1.task_id= task_id;
					var address = [];
					$.ajax({
						url: host+'/advanced/tasks-markers/get-address',
						data: data1,
						type: 'POST',
						dataType:'JSON',
						success: function(data){
							adr_array = data;
							for(var i in data){
								for(var j in data[i]){
									if(data[i][j].marker_type == "0"){
										$( "#addr_list" ).append( "<b>забрать</b> "+data[i][j].address+" <b>" );
									
									}
									if(data[i][j].marker_type !== "0"){

										$( "#addr_list" ).append( "<b>доставить</b> "+data[i][j].address+" " );
									}
								}
								
						
							}
							
						}
		
					});
}

function getMarkers(task_id){
					var data1 ={};
					var name1 = "getMarkers";
					data1.task_id= task_id;
					var address = [];
					$.ajax({
						url: host+'/advanced/tasks-markers/get-address',
						data: data1,
						type: 'POST',
						dataType:'JSON',
						success: function(data){
				
							adr_array = data;
							
							for(var i in data){
								for(var j in data[i]){
								console.log(data[i][j].id);
								if(data[i][j].marker_type == "0"){
									console.log("#"+task_id);
									$( "#addr11_"+task_id ).append( "<b>забрать</b> "+data[i][j].address+" <b>" );
									
								}
								if(data[i][j].marker_type !== "0"){
									
									$( "#addr11_"+task_id ).append( "<b>доставить</b> "+data[i][j].address+" " );
								}
								}
								
								
						
							}
							
						}
		
					});
}


	
	
//грузим все активные задания,формируем список с заданиями
function task_get_count(){
	var btn1;
	var data ={};
	data.var1= 'task_get_all';
	$.ajax({
		url: host+'/2sd.php',
		data: data,
		type: 'POST',
		dataType:'JSON',
		success: function(data){
			$( "#tasks_list" ).html('');
			
			for(var i in data){
				$( "#tasks_list" ).append( '<li class="task_list_item" id="'+data[i][0]+'" style="">'+	
												'<div class="task_list_bid_add" id="dd'+data[i][0]+'">'+
													'<p id="'+data[i][2]+'" class="task_list_bid_sum"> # '+
														data[i][0]+''+
													'</p>'+
													'<div style="float:left">'+
														'<input type="image" style="background-image:url('+"ima/"+data[i][0]+'.jpg'+ ');height:50px;margin-top:10px;width:60px;display:inline-block;background-repeat:no-repeat;background-size:100%" class="task_list_bid_image"/>'+
													'</div>'+
														//'<p style="display:inline-block;font-size:medium;width:;background-color:yellow;">'+data[i][2]+'tenge'+'</p>'+
														'<input type="image" onclick="Android.showMap('+data[i][0]+')" style="background-image:url('+"ima/placeholder.svg"+');" id="task_bid_btn_map"/>'+
														
														'<input type="image"   class="bid_make" style="background-image:url('+"ima/plus.svg"+');" />'+
													'<div>'+
											'</li>' );
				task_id = data[i][0];
				get_addr(data[i][0]);		
				auction_id1 = data[i][4];
			}
	
		}
	});		
}
	
	
	function cabinet_my_tasks(){
		var color;
		var status_text;
		var data ={};
		data.user_id = user_id;
		data.var1= 'cabinet_task_get_all';
		$.ajax({
			url: host+'/2sd.php',
			data: data,
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				$( "#cabinet_my_tasks" ).html('');
				
				for(var i in data){
					if(data[i][6] == 1){
						color = 'white'; 
					}
					console.log(data[i][7]);
					if(data[i][7] == 2){
						status_text = "не доставлен";
					}
					if(data[i][6] == 2){
						status_text = "не доставлен";
					}
					if(data[i][8] == 2){
						status_text = "не доставлен";
					}
					
					$( "#cabinet_my_tasks" ).append( '<li class="cabinet task_list_item" id="'+data[i][0]+'" style="background-color:'+color+ ';text-align:center;padding-bottom:20px">'+
																			
															'<div class="task_list_bid_add" id="dd'+data[i][0]+'">'+
															'</div>'+
																'<div id="'+data[i][0]+'" class="addr1_1" style="display:inline-block;padding-right:80px">'+
																
																	'<button  class="cabinet_task_list_view btn btn-danger btn-circle btn-lg" id="view_task_'+data[i][0]+'">'+'№'+data[i][0]+'</button></td>'+
																	'<td>'+	
																		'<p class="cabinet_my_tasks_info" style="background-color:yellow;">'+status_text+'</p><td>'+' '+
																		'<p class="cabinet_my_tasks_info" style="">'+''+data[i][2]+'tenge'+'</p>'+' '+
																		'<p class="cabinet_my_tasks_info" style="background-color:">'+'weight '+data[i][7]+'</p>'+
																		

																'</div>'+
																''+
															'<div style="display:inline-block">'+' '+data[i][5]+'</div>'+
															'<div id="bids_'+data[i][0]+'"></div>'+
														
													'</li>' );
					$("#addr_list").append('<li id="'+data[i][0]+'"></li>');
					task_id = data[i][0];
					get_addr(data[i][0]);	
					//getBids(task_id,data[i][4]);
					
				}
	
			}
		});		
	}
	

				
	//view_bids_r
	
	$( "#profile" ).click(function() {
		console.log("profile click");
		var data ={};
		getuserdetid();
	});
	
	$( ".back_button" ).click(function() {
		$( "#tasks" ).show();
		$( "#map" ).hide();
		$( "#panel" ).show();

	});
	
	$( "#courier_tasks" ).click(function() {
		$("#home").slideToggle();
		$("#profile123").hide();
		$("#map").hide();
	});
	
	
	$( "#profile_button" ).click(function() {
		$( "#profile" ).toggle();
		$("#home").hide();
	});
	
	
	$( ".task_customer_confirmation" ).click(function(){
		alert("task_customer_confirmation");
		tasks_customer_accept($(this).attr('id'));
		
	});
	
	

		function getuserdetid(){
		var name = 'test1';
		var data ={};
		data.var1= 'getuserdetid';
		data.user_id = options;//user_id;
		$.ajax({
			url: host+'/2sd.php',
			data: data,
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				user_id = data;
				userdetid = data;
				$.ajax({
					url: 'index.php?r=user-det%2Fupdate&id='+userdetid,
					data: data,
					type: 'POST',
					success: function(data){
						console.log(data);
						for(var i in data){	
						}
						$( "#upd_info" ).append(data);				
					
					}
				
				});
			
			}
				
		});
		
		};
		
		
		
		

$( "#view_bids_r" ).click(function() {
		console.log("profile click");
		var data ={};
		
});
	
	var is_cab11 = 1;
	
	function tasks_customer(){
		var color;
		var data ={};
		data.var1= 'cabinet_task_get_my';
		data.user_id = user_id;
		$.ajax({
			url: host+'/2sd.php',
			data: data,
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				$( "#cabinet_my_tasks_customer" ).html('');
				if(data == ''){
					$( "#cabinet_my_tasks_customer" ).append( '<li class="cabinet task_list_item" style="color:red">'+
														'<a>'+					
															'<div class="task_list_bid_add" id="dd">'+
															'</div>'+
																'<div id="addr11_" class="addr1_1">'+
																	'<button class="cabinet_task_list_view btn btn-danger btn-circle btn-lg" id="view_task_">view</button>'+'no tasks'+
																'</div>'+
																'<div id="bids_"></div>'+
													'</a>'+
												'</li>' );
				}
				for(var i in data){
					if(data[i][5] == 1){
						color = 'red'; 
					}
					
					$( "#cabinet_my_tasks_customer" ).append( '<li class="cabinet task_list_item" id="'+data[i][0]+'" style="color:'+color+ '">'+
														'<a>'+					
															'<div class="task_list_bid_add" id="dd'+data[i][0]+'">'+
															'</div>'+
															'<div id="addr11_'+data[i][0]+'" class="addr1_1">'+
																'<button  class="cabinet_task_list_view btn btn-danger btn-circle btn-lg" id="view_task_'+data[i][0]+'">view</button>'+
																'<button class="">confirm</button>'+
															'</div>'+
															'<div id="bids_'+data[i][0]+'"></div>'+
														'</a>'+
												'</li>' );
					///////////task_id = data[i][0];
					getMarkers(data[i][0]);	
					
				}
	
			}
		});
	
}



$( ".owner_info" ).click(function() {
	$('#myModal').modal('show'); 
	var data ={};
	data.var1= 'getuserdetinfo';
	data.user_id = $(this).attr('id');
		$.ajax({
			url: host+'/2sd.php',
			data: data,
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				$( "#owner_info" ).html("<li>"+data[0][0]+"</li>"+
					"<p><img src='http://151.248.115.164/advanced/ima/"+data[0][8]+"' style='height:200px;width:'></p>"+
					"<li>"+
						"<h3>"+data[0][1]+" "+data[0][2]+"</h3>"+
					"</li>"+
					"<p>"+"mobile:"+data[0][5]+"/p"
				
				);
			}
		
		});
		
	});
	
	function get_cities(){
		var data ={};
		data.var1= 'getcities';
		data.user_id = $(this).attr('id');
			$.ajax({
				url: host+'/2sd.php',
				data: data,
				type: 'POST',
				dataType:'JSON',
				success: function(data){
					for(var i in data){
						$( "#cities" ).append("<option id='"+data[i][0]+"'>"+data[i][1]+"</option>");

					}
				}
		
			});
	};
	
	$( ".close1" ).click(function() {
		$('#myModal').modal('hide');
		
	});
	
	$( "#comments_send" ).click(function() {
		get_comments1($("#task_current").attr('class'));
	
	 
		var data ={};
		data.var1= 'comments_send';
		data.user_id = user_id;
		data.task_id = $("#task_current").attr('class');
		data.comments_text = $("#comments_text").val();
		$.ajax({
			url: 'http://151.248.115.164/advanced/tasks/comment-send',
			data: data,
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				$( "#owner_info" ).html("<li>"+data[0][0]+"</li>"+
											"<p>"+
											"	<img src='http://151.248.115.164/advanced/ima/"+data[0][8]+"' style='height:100px;width:100px'>"+
											"</p>"+
				"<li>"+"<h3>"+data[0][1]+" "+data[0][2]+"</h3>"+"</li>"+
				"<p>"+"mobile:"+data[0][5]+"/p"
				
				);
			}
		
		});
		
	});
	
	function get_comments1(task_id){
		var data ={};
		data.var1= 'getcomments';
		data.user_id = user_id;
		data.task_id = task_id;
		data.comments_text = $("#comments_text").val();
		$.ajax({
			url: host+'/advanced/tasks/get-comments',
			data: data,
			type: 'POST',
			dataType:'JSON',
			success: function(data){
				for(var i in data){
				$( "#comments" ).append("<li>"+
											"<p>"+data[i]["id"]+" "+data[i]["user_id"]+"</p>"+
										"</li>");
				}
			}
		
		});
	}
	
	
	
	
	
	
	


