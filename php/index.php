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
    <div class="content">
        <h3 class="text-primary">Motion Control Panel</h3>
        <button class="togglebutton" action="none" onclick="hideVoegtoe()">Voeg een installatie toe</button>

        <div id="voegtoe">
            <form id="insertform" method="POST" action="insert.php">
                <legend><span class="number">1</span>Kies de naam van de installatie</legend>
                <label>Naam installatie</label>
                <input type="text" class="form-control" name="name" required="required" />

                <legend><span class="number">2</span>Bepaal het aantal functies voor de installatie</legend>
                <label>Aantal functies</label>
                <input type="number" id="aantalfuncties" name="quantity" min="1" max="99" value="1">
                <div class="form-group" id="addhere">
                    <input id="addfunctions" type="button" action="none" onclick="maaktekstvakken()" value="Ga verder">
                    <!-- <button onclick="maaktekstvakken()">Ga verder</button> -->
                    <div id="addbefore"></div>
                    <button class="togglebutton" id="installatieinsert" class="btn btn-primary" name="insert">Voeg installatie toe</button>

                </div>
            </form>
        </div>

        <button class="togglebutton" onclick="hideVerwijder()">Verwijder of wijzig een installatie</button>
        <div id="verwijder">

            <!-- json content -->
            <?php
            $data = file_get_contents('installaties.json');
            $data = json_decode($data, true);
            $installaties = $data['installaties'];
            $index = 0;

            foreach ($installaties as $key => $value) :
                $currentinstallatie = $value;
                $hasimage = false;
                # code...
            ?>
                <tr>
                    <form class="forms" id="form<?php echo $key ?>" method='get' action="edit.php?id=<?php $index ?> ">
                        <?php
                        $installatieindex = 0;
                        foreach ($value as $key => $jsonvalue) :
                            if ($key == 'naam') {
                        ?>
                                <td><input class="naam" name='naam' value='<?php echo $jsonvalue ?>'></input></td>
                            <?php
                            } else if (!$hasimage){
                            ?>
                                <td><label>afbeelding + extentie</label></td>
                                <td><input class="inputtext" name='afbeelding' value='<?php if($key == 'afbeelding'){ echo $jsonvalue;}?>'></input></td>

                            <?php
                            $hasimage = true;
                            }
                            if($key !='naam' && $key !='afbeelding'){
                            ?>
                                <td> <input class="inputtext" name="functie<?php echo $installatieindex ?>" value="<?php echo $key; ?>"></input></td>
                                <td> <input class="inputtext" name="command<?php echo $installatieindex ?>" value="<?php echo $jsonvalue; ?>"></input></td>
                                <td> <input class="removetask" type="button" onclick="window.location.href = 'deletetask.php?id=<?php echo $index ?>&id2=<?php echo $key ?>'" value="-"></input></td>

                        <?php
                            }
                            $installatieindex++;
                        endforeach;
                        ?>
                        <input type="hidden" name="id" value="<?php echo $index; ?>" />
                        <div class="buttoncontainer" id="buttondiv<?php echo $index; ?>">
                            <td><input class="moretasks" type="button" action="none" class="moretasks" onclick="moretasks(<?php echo $index;
                                                                                                                            echo ',';
                                                                                                                            echo $installatieindex ?>)" value="Task toevoegen"></input>
                            <td><a onclick="return confirm('Installatie verwijderen?');" class="deletebutton" href="delete.php?id=<?php echo $index ?>">Verwijder installatie</a></td>
                            <td><input class="savebutton" id="insertbutton<?php echo $index ?>" type="submit" value="Opslaan"></td>
                        </div>
                    </form>
                </tr>
            <?php
                $index++;
            endforeach;
            ?>
        </div>

        <button class="togglebutton" action="none" onclick="toggleUI('scenes')">Wijzig scènes</button>

        <div id="scenes">
            <div id="voegscenetoe">
                <form method="POST" action="sceneinsert.php" id="form">
                    <div class="form-group">
                        <legend>Voeg scène toe</legend>
                        <legend><span class="number">1</span>Kies de naam van de scène</legend>
                        <label>Naam scène</label>
                        <input type="text" class="form-control" name="name" required="required" />
                        <legend><span class="number">2</span>Bepaal de cue van de scène</legend>
                        <label>Cue</label>
                        <input type="text" class="form-control" name="cue" required="required" />
                </form>
                <div class="buttoncontainer">
                    <button class="togglebutton" name="insert">Voeg scène toe</button>
                </div>
            </div>


            <?php
            $scenes = $data['scenes'];
            $formindex = 0;
            $sceneindex = 0;
            foreach ($scenes as $key => $value) :

            ?>
                <tr>
                    <form class="scenesform" id="sceneform<?php echo $formindex; ?>" method='get' action="sceneedit.php?id=<?php $index ?>">
                        <div class="sceneinput">
                            <!-- <td><label>Naam</label></td> -->
                            <td><input class="naam" name="naam" value="<?php echo $value['naam']; ?>"></td>
                            <td><label>Cue</label></td>
                            <td><input class="inputtext" name="cue" value="<?php echo $value['cue']; ?>"></td>
                            <input type="hidden" name="id" value="<?php echo $sceneindex; ?>" />
                        </div>
                        <div class="buttoncontainer" id="buttondiv<?php echo $index; ?>">
                            <td><a onclick="return confirm('Scène verwijderen?');" class="deletebutton" href="scenedelete.php?id=<?php echo $sceneindex ?>">Verwijder scène</a></td>
                            <td><input class="savebutton" type="submit" value="Opslaan"></td>
                        </div>
                    </form>
                </tr>
            <?php
                $sceneindex++;
            endforeach;
            ?>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>