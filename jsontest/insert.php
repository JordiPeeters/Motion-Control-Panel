<?php
    session_start();
    if(isset($_POST['insert'])){
        $data = file_get_contents('members.json');
        $json = json_decode($data);

        $gegevens = new stdClass;
        $gegevens->name = $_POST['name'];
        $gegevens->function = $_POST['function'];
        $gegevens->command = $_POST['command'];

        array_push($json->installaties, $gegevens);

        $json = json_encode($json, JSON_PRETTY_PRINT);
        file_put_contents('members.json', $json);
        header('location:index.php');
    }
 
 
?>