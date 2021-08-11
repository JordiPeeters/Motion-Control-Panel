<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.css"> -->
        <link rel="stylesheet" href="styles.css">
</head>

<body>

    <div class="col-md-3"></div>
    <div class="col-md-6 well">
        <h3 class="text-primary">Motion Control Panel - Installaties</h3>
        <hr style="border-top:1px dotted #ccc;" />
        <div class="col-md-4">

        <button onclick="hideVoegtoe()">Voeg een installatie toe</button>

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
            <button onclick="maaktekstvakken()">Ga verder</button>
            </form>
            <button class="btn btn-primary" name="insert">Voeg installatie toe</button>
        </div>
</div>

<button class="deletebutton" onclick="hideVerwijder()">Verwijder of wijzig een installatie</button>
<div id="verwijder">

        <div class="col-md-8">
            <table class="table table-bordered table-striped">
                <thead class="alert-info">
                    <th>Naam Installatie</th>
                    <th>Functie</th>
                    <th>Task</th>
                    <th>Functie</th>
                    <th>Task</th>
                    <th>Functie</th>
                    <th>Task</th>
                    <th>Functie</th>
                    <th>Task</th>
                    <th>Functie</th>
                </thead>
                <tbody>
                    <?php
                    function console_log($output, $with_script_tags = true)
                    {
                        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
                            ');';
                        if ($with_script_tags) {
                            $js_code = '<script>' . $js_code . '</script>';
                        }
                        echo $js_code;
                    }


                    $data = file_get_contents('members.json');
                    $data = json_decode($data, true);
                    $installaties = $data['installaties'];
                    $index = 0;
                    // for each installatie:
                    foreach ($installaties as $fetch => $value) {
                        // console_log($installaties);
                    ?>
                        <form id="form<?php echo $index ?>" method="get"  action="edit.php?id=<?php echo $index ?>">
                           
                            <!-- <br> -->
                            <?php
                            // for each key in installaties:
                                $installatieindex = 0;
                            foreach ($value as $key => $jsonvalue) {
                                if ($key == 'naam') {
                            ?>
                                    <tr id="tr<?php echo $index?>">
                                    <td> <input name='<?php echo $key ?>' value='<?php echo $jsonvalue ?>'></input></td>
                                <?php
                                } else {
                                ?>
                                
                                    <td> <input name='functie<?php echo $installatieindex ?>' value='<?php echo $key ?>'></input></td>
                                    <td> <input name='command<?php echo $installatieindex ?>' value='<?php echo $jsonvalue ?>'></input></td>
                            <?php
                                }
                                $installatieindex ++;
                            }
                            ?>
                            <input type="hidden" name="id" value="<?php echo $index; ?>" />

                            <td id="insertbutton<?php echo $index?>"><input type="submit"></td>
                            <td><a class="btn btn-danger" href="delete.php?id=<?php echo $index ?>">Delete</a></td>
                        </tr>
                    </form>
                    <td><input type="button" class="moretasks" onclick="moretasks(<?php echo $index; echo ','; echo $installatieindex ?>)" value="tasks toevoegen"></input>

                    <?php
                        $index++;
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</body>
<script src="script.js"></script>

</html>