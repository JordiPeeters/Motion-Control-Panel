<?php
$id = $_GET['id'];

$data = file_get_contents('installaties.json');
$json = json_decode($data, true);


$jsonkey = 0;

$gegevens = new stdClass;
$gegevens->naam = $_GET['naam'];

foreach ($_GET as $key => $value) {
    if ($key != 'insert' && $key != "") {
        if (startsWith($key, 'funct')) {
            $value = str_replace("_", " ", $value);

            $jsonkey = rtrim($value);
        }
        if (startsWith($key, 'command')) {
            $value = str_replace("_", " ", $value);
            $gegevens->$jsonkey = $value;
        }
        
    }
    if($key =='afbeelding'){
        $gegevens -> afbeelding = $value;
    }
}

$json['installaties'][$id] = $gegevens;


$json['installaties'] = array_values($json['installaties']);

$json = json_encode($json, JSON_PRETTY_PRINT);
file_put_contents('installaties.json', $json);

header('location:index.php');

function startsWith( $haystack, $needle){
    $length = strlen($needle);
    return substr($haystack, 0, $length) === $needle;
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