<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
<title>Voting Results</title>
     <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1a1a1a, #2e2e2e, #ff3333);
            color: white;
            padding: 20px;
        }
        .results1 h1{
            color: yellow
        }
        .image-players {
                display: flex;
                gap: 10px;
                justify-content: center;

        }
        .image-players img {
               width: 280px;
               height: 400px;
               border-radius: 10px;
               border: 2px solid black;
               cursor: pointer;
               transition: transform 0.2s;
        }
        .image-players img:hover{
            transform: scale(1.1);
        }
        </style>
</head>
<body class="results1">
    <h1 >Voting Results</h1>
    <?php
    $result = $conn->query("SELECT player_name, votes FROM transfers ORDER BY votes DESC");
    while ($row = $result->fetch_assoc()) {
        echo "<p>{$row['player_name']} - {$row['votes']} votes</p>";
    }
    ?>
    <div class="image-players">
        <img src="Pedri.jpeg">
        <img src="Cunha.jpeg">
        <img src="Mbappe.jpeg">
        <img src="Lamine.jpeg">
        <img src="Jude.jpeg">
    </div>
</body>
</html>