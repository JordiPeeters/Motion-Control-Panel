<?php
$id = $_GET['id'];

$data = file_get_contents('installaties.json');
$data = json_decode($data, true);
console_log($data);
unset($data['scenes'][$id]);

$data['scenes'] = array_values($data['scenes']);
$data = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('installaties.json', $data);

header('location: index.php');

function console_log($output, $with_script_tags = true)
{
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
        ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}