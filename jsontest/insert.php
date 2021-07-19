<?php
    session_start();
    if(isset($_POST['insert'])){
        $data = file_get_contents('members.json');
        $json = json_decode($data);
 
        $array = array(
            'name' => $_POST['name'],
            'function' => $_POST['function'],
            'command' => $_POST['command']
        );
 
        $json[] = $array;
 
        $json = json_encode($json, JSON_PRETTY_PRINT);
        file_put_contents('members.json', $json);
        header('location:index.php');
    }
 
 
?>