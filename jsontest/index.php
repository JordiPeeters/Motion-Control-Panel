<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        <?php include 'styles.css'; ?>
    </style>
    <title>Document</title>
</head>

<body>
    <div class="col-md-3"></div>
    <div class="col-md-6 well">
        <h3 class="text-primary">Motion Control Panel</h3>
        <hr style="border-top:1px dotted #ccc;" />
        <div class="col-md-4">

            <button action="none" onclick="hideVoegtoe()">Voeg een installatie toe</button>

            <div id="voegtoe">
                <form method="POST" action="insert.php" id="form">
                    <div class="form-group">
                        <legend><span class="number">1</span>Kies de naam van de installatie</legend>
                        <label>Naam Installatie</label>
                        <input type="text" class="form-control" name="name" required="required" />
                    </div>
                    <legend><span class="number">2</span>Bepaal het aantal functies voor de installatie</legend>
                    <label>Aantal Functies</label>
                    <div class="form-group">
                        <input type="number" id="aantalfuncties" name="quantity" min="1" max="99" value="1">
                        <input type="button" onclick="maaktekstvakken()" value="Ga verder">
                        <!-- <button onclick="maaktekstvakken()">Ga verder</button> -->
                </form>
                <button class="btn btn-primary" name="insert">Voeg installatie toe</button>
            </div>
        </div>
        <button class="deletebutton" onclick="hideVerwijder()">Verwijder of wijzig een installatie</button>
        <div id="verwijder">

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
        </div>

        <div id="closescenes">
            <?php
            $scenes = $data['scenes'];
            $formindex = 0;
            foreach ($scenes as $key => $value) :

            ?>
                <tr>
                    <form id="sceneform<?php echo $formindex; ?>" method='get' action="editscenes.php?id=<?php $index ?>">
                        <td><label>Naam</label></td>
                        <td><input name="naam" value="<?php echo $value['naam']; ?>"></td>
                        <td><label>Cue</label></td>
                        <td><input name="naam" value="<?php echo $value['cue']; ?>"></td>
                        <td><input id="insertbutton<?php echo $index ?>" type="submit"></td>
                        <td><a class="btn btn-danger" href="delete.php?id=<?php echo $index ?>">Delete</a></td>
                    </form>
                </tr>
            <?php
            endforeach;
            ?>
        </div>
        <script src="script.js"></script>
</body>

</html>