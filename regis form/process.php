<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $members = $_POST["anggota"];
    if (is_array($members)) {
        foreach ($members as $indeks => $member) {
            echo "Anggota " . ($indeks + 1) . ": " . $member . "<br>";
        }
    }
}
?>