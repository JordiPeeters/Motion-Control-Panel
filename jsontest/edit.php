<?php
$id = $_GET['id'];
console_log($_GET);

$data = file_get_contents('members.json');
$json = json_decode($data, true);
unset($json['installaties'][$id]);

// console_log($json);

$jsonkey = 0;

$gegevens = new stdClass;
$gegevens->naam = $_GET['naam'];

foreach ($_GET as $key => $value) {
    if($key != 'insert' && $key != ""){
         if (str_starts_with( $key, 'funct')){
             $value = str_replace("_", " ", $value);
             $jsonkey = $value;
            //  console_log($jsonkey);
         }
         if(str_starts_with( $key, 'command')){
             $value = str_replace("_", " ", $value);
            //  console_log($value);
             $gegevens->$jsonkey = $value;
         }
 }

}

console_log($gegevens);
console_log(gettype($gegevens));

array_push($json['installaties'], $gegevens);

$json['installaties'] = array_values($json['installaties']);

$json = json_encode($json, JSON_PRETTY_PRINT);
file_put_contents('members.json', $json);

// header('location:index.php');

function console_log($output, $with_script_tags = true){
        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
            ');';
        if ($with_script_tags) {
            $js_code = '<script>' . $js_code . '</script>';
        }
        echo $js_code;
    }
?>