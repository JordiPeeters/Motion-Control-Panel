<?php
session_start();
if (isset($_POST['insert'])) {
    $data = file_get_contents('installaties.json');
    $json = json_decode($data);

    $gegevens = new stdClass;
    $gegevens->naam = $_POST['name'];
    $gegevens->cue = $_POST['cue'];
    // $gegevens->function = $_POST['function'];
    // $gegevens->command = $_POST['command'];

    $jsonkey = 0;
    $jsonvalue = 0;

    
    console_log($json);
    array_push($json->scenes, $gegevens);

    $json = json_encode($json, JSON_PRETTY_PRINT);
    file_put_contents('installaties.json', $json);
    header('location:index.php');
}

function console_log($output, $with_script_tags = true)
{
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
        ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}
