<?php




function Auth() {
	$host="localhost";
	$user="user";
	$pass="$pass";
	$dbname="anotherl_test1";
	return[
		'mysql:host=$host;dbname=$dbname;charset=utf8mb4",
		$user,
		$pass

		];
	
	}