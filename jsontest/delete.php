<?php
    $id = $_GET['id'];    

    $data = file_get_contents('members.json');
    $data = json_decode($data, true);
    console_log($data);
    $bannaan = $data;

    // console_log($bannaan[0]);
    console_log($id);
    
    // console_log('console_log($bannaan);');
    console_log($bannaan);
    unset($bannaan['installaties'][$id]);
    console_log($bannaan);

    $bannaan['installaties'] = array_values($bannaan['installaties']);
    $bannaan = json_encode($bannaan, JSON_PRETTY_PRINT);
    file_put_contents('members.json', $bannaan);
 
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
    
    
?>