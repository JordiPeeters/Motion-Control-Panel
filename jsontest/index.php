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
            <form method="POST" action="insert.php">
                <label>Aantal functies</label>
            <input type="number" id="aantalfuncties" name="quantity" min="1" max="99" value="1">
                <button onclick="maaktekstvakken()">kies</button>

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
                    foreach ($installaties as $fetch) {
                    ?>
                        <tr>
                            <td><?php echo $fetch['name'] ?></td>
                            <td><?php echo $fetch['function'] ?></td>
                            <td><?php echo $fetch['command'] ?></td>
                            <td><a class="btn btn-danger" href="delete.php?id=<?php echo $index ?>">Delete</a></td>
                        </tr>
                    <?php
                    // console_log($installaties[6]);
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