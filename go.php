<?php

	$theSettingFilePath = dirname(__FILE__).'/domain-url.txt';
	
	if (!file_exists($theSettingFilePath)){
		echo "<br> - 找不到文件 domain-url.txt <br>";
		exit();
	}//

	$urlAry = file($theSettingFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	if(!empty($urlAry)){
		$totalURL = count($urlAry);
		$randNum = mt_rand(1, $totalURL-1);
		header("Location: ".$urlAry[$randNum]);
		exit();
	}else{
		echo " <br> - 空文件 domain-url.txt <br> ";
		exit();
	}//


?>
