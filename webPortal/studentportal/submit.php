<?php

/*
 * @author: Brian Bauman
 *
 * Implementation of DataPush.class to send file
 * from client form to sandbox.
 */

require_once ("../includes/DataPush.class");

$dataBox = new DataPush;

$input = $dataBox->cleanSubmission();
echo $dataBox->sendToSandbox($input);

?>
