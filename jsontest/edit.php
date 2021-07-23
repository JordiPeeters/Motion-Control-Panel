<?php
$id = $_GET['id'];

$data = file_get_contents('members.json');
$data = json_decode($data, true);
console_log($data);
foreach ($_GET as $key => $value) {
    $data['installaties'][$id][$key] = $value;
}
$data = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('members.json', $data);

header('location:index.php');

function console_log($output, $with_script_tags = true){
        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
            ');';
        if ($with_script_tags) {
            $js_code = '<script>' . $js_code . '</script>';
        }
        echo $js_code;
    }
?>