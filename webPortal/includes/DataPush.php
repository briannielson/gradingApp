<?php

require_once ("../lib/random.php");

/*
 * @author: Brian Bauman
 *
 * Provides functions to push data from front to back
 * -- cleanSubmission: retrieve relevant data from POST global
 * -- sendToSandbox: put string contents to local file
 *			-->Eventually, use cURL and SFTP
 * -- getPrivKey: sets up key for accessing results
 * -- random_str: creates a random string of specified length
 * 
 */

class DataPush {

	public function cleanSubmission () {
		$allowedValues = array( 'filestring' );
		$strToPass = "No string found";
		// Since we only have one input, the foreach is superfluous
		foreach($allowedValues as $newKey) {
			// We don't need to clean our input in this case since
			// we aren't rendering our input, storing in a Database,
			// or directly changing the backend
			if (isset($_POST[$newKey]) && $_POST[$newKey] != '')
				$strToPass = $_POST[$newKey];
		}

		return $strToPass;

	}

	public function sendToSandbox ($str) {
		// While its local, tell php to push somewhere
		// eventually, need to write a queue...
		if (file_put_contents ('/var/sandbox/programtoparse.java', $str))
			return "File stored successfully";
		else return "There was an error storing the file";

		/*
		// Hand off the form data to the backend
		// start-up curl
		$ch = curl_init();

		// set options
		// Sudheer -- when seperate servers, will SFTP suffice?
		curl_setopt($ch, CURLOPT_URL, "127.0.0.1");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, 
			http_build_query(arry('input' => $strToPass);
		
		// response??
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		// execute, store response in variable
		$s_output = curl_exec ($ch);

		// close
		$curl_close ($ch);

		// check output...
		*/
	}

	private function getPrivKey () {
		// check existing random strings
		// use random string to create directory for results
		// send back session variable
		// Send to script for grader to look at??
	}

	/**
	* Generate a random string, using a cryptographically secure 
	* pseudorandom number generator (random_int)
	* 
	* For PHP 7, random_int is a PHP core function
	* For PHP 5.x, depends on https://github.com/paragonie/random_compat
	* 
	* @param int $length      How many characters do we want?
	* @param string $keyspace A string of all possible characters
	*                         to select from
	* @return string
	*/
	function random_str($length, $keyspace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
	{
		$str = '';
		$max = mb_strlen($keyspace, '8bit') - 1;
		for ($i = 0; $i < $length; ++$i) {
		    $str .= $keyspace[random_int(0, $max)];
		}
		return $str;
	}
}

?>
