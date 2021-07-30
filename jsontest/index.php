<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.css"> -->
</head>

<body>

    <div class="col-md-3"></div>
    <div class="col-md-6 well">
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
                        <form method="get"  action="edit.php?id=<?php echo $index ?>">
                           
                            <br>
                            <?php
                            // for each key in installaties:
                                $installatieindex = 0;
                            foreach ($value as $key => $jsonvalue) {
                                if ($key == 'naam') {
                            ?>
                                    <tr>
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

                            <td><input type="submit"></td>
                            <td><a class="btn btn-danger" href="delete.php?id=<?php echo $index ?>">Delete</a></td>
                        </tr>
                        <td><button class="moretasks" onclick="moretasks(<?php echo $index ?>)">tasks toevoegen</button>
                        </form>

                    <?php
                        $index++;
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
<script src="script.js"></script>

</html>