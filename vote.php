<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Vote for a Transfer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="vote">
    <h1>Who Should Manchester United Sign?</h1>
    <form method="POST">
        <select name="player">
            <option value="">Choose a player</option>
            <option value="Kylian Mbappe">Kylian Mbappe</option>
            <option value="Pedri">Pedri</option>
            <option value="Jude Bellingham">Jude Bellingham</option>
            <option value="Lamine Yamal">Lamine Yamal</option>
            <option value="Matheus Cunha">Matheus Cunha</option>
        </select>
        <button type="submit">Vote</button>
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["player"])) {
        $player = $_POST["player"];
        $conn->query("UPDATE transfers SET votes = votes + 1 WHERE player_name = '$player'");
        echo "<h2>You voted for $player!</h2>";
    }
    ?>
</body>
</html>