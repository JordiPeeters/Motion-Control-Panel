<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>

    </style>
    <!-- add installations to json -->
    <h3 class="text-primary">Motion Installaties</h3>
    <hr style="border-top:1px dotted #ccc;" />
    <div class="col-md-4">
        <label>Aantal functies</label>
        <input type="number" id="aantalfuncties" name="quantity" min="1" max="99" value="1">
        <button onclick="maaktekstvakken()">kies</button>
        <form method="POST" action="insert.php" id="form">

            <div class="form-group">
                <label>Naam Installatie</label>
                <input type="text" class="form-control" name="name" required="required" />
            </div>
            <div class="form-group">
                <label>Functie</label>
                <input type="text" class="form-control" name="function" required="required" />
            </div>
            <div class="form-group">
                <label>Task</label>
                <input type="text" class="form-control" name="command" required="required" />
            </div>
            <button class="btn btn-primary" name="insert">Voeg installatie toe</button>
        </form>
    </div>

    <!-- json content -->
    <?php
    $data = file_get_contents('installaties.json');
    $data = json_decode($data, true);
    $installaties = $data['installaties'];
    $index = 0;

    foreach ($installaties as $key => $value) :
        # code...
    ?>
        <tr>
            <form id="form<?php echo $key ?>" method='get' action="edit.php?id=<?php $index ?>">
                <?php
                $installatieindex = 0;
                foreach ($value as $key => $jsonvalue) :
                    if ($key == 'naam') {
                ?>
                        <td><input name='naam' value='<?php echo $jsonvalue ?>'></input></td>
                    <?php
                    } else {
                    ?>
                        <td> <input name="functie<?php echo $installatieindex ?>" value="<?php echo $key; ?>"></input></td>
                        <td> <input name="command<?php echo $installatieindex ?>" value="<?php echo $jsonvalue; ?>"></input></td>
                        <td> <input type="button" onclick="window.location.href = 'deletetask.php?id=<?php echo $index ?>&id2=<?php echo $key ?>'" value="-"></input></td>

                <?php
                    }
                    $installatieindex++;
                endforeach;
                ?>
                <input type="hidden" name="id" value="<?php echo $index; ?>" />

                <td><input id="insertbutton<?php echo $index ?>" type="submit"></td>
                <td><a class="btn btn-danger" href="delete.php?id=<?php echo $index ?>">Delete</a></td>
                <td><input type="button" class="moretasks" onclick="moretasks(<?php echo $index;
                                                                                echo ',';
                                                                                echo $installatieindex ?>)" value="tasks toevoegen"></input>
                <td>
            </form>
        </tr>
    <?php
        $index++;
    endforeach;
    ?>
    <script src="script.js"></script>
</body>

</html>