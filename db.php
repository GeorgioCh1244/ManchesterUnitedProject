<?php
$conn = new mysqli("localhost", "root", "", "web project");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>