<?php


if(isset($_GET['name'])){
	$filename = $_GET['name'];
	//echo file_get_contents("files/" . $filename . ".hash");
}
else {
	echo "failed";
}


?>
