<?php
$index = $_GET['id'];
$key = $_GET['id2'];

$data = file_get_contents('installaties.json');
$data = json_decode($data, true);

unset($data['installaties'][$index][$key]);

$data['installaties'] = array_values($data['installaties']);
$data = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('installaties.json', $data);

header('location: index.php');

function consolelog($output, $with_script_tags = true)
{
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
        ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}
