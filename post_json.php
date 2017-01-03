<?php
	include "modules/functions.php";

	$json = $_SERVER['HTTP_JSON'];
	$data = json_decode($json, true);
	while($item = array_shift($data)){
		for($i=0; $i<count($data)-1; $i++) {
			$account_id = $data[$i]["account_id"];
			$lat = str_replace(',','.',$data[$i]["lat"]);
			$lng = str_replace(',','.',$data[$i]["lng"]);
			$online = $data[$i]["online"];
			$dt = $data[$i]["dt"];
			database_connect("admin");
			$result = mysql_query("select login from clients WHERE idout = '$account_id'  ;") or die(mysql_error()."21");
			list($login) = mysql_fetch_row($result);
			database_connect($login);
			$res = mysql_query( "SELECT COUNT(client_id) AS cnt FROM coordinates WHERE client_id = '$account_id' AND dt='$dt'") or die(mysql_error());
			list($cnt) = mysql_fetch_row($res);
			if($cnt == 0){
				if($lat!=0){
					$tables = mysql_query("INSERT INTO coordinates (client_id,lat,lng,online,dt) VALUES(".$account_id.",".$lat.",".$lng.",".$online.",'".$dt."')") or die(mysql_error());
				}
				$result = mysql_query( "DELETE FROM coordinates WHERE coordinates.dt < (NOW() - INTERVAL 30 DAY)") or die(mysql_error());
			}
		}
	}
	echo "OK";
?>