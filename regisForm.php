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

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Register Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" type="text/css" href="./css tugas tabel.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="./script_latihan.js"></script>
    <style>
        body{
            margin: 0;
            min-height: 100vh;
            background-image: url(https://sanggabuana.ac.id/wp-content/uploads/2013/11/IMG_3650.jpg);
            background-size: cover;
            background-position: center;
        }   
    </style>
</head>
<body>
<div class="header no-print">
    <div class="header-image"></div>
    <div id="login"> 
        <button class="login-button no-print">
            <i class="bi bi-key-fill"></i>Login
        </button>
        <form id="login-form" class="login-form-container" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit" name="submit">Login</button>
        </form>
    </div>    
</div> 
<form id="formRegis" class="register-form" method="POST">
    <label for="anggota">Anggota 1</label>
    <input type="text" id="anggota1" name="anggota[]">
    <label for="anggota">Anggota 2</label>
    <input type="text" id="anggota2" name="anggota[]">
    <label for="anggota">Anggota 3</label>
    <input type="text" id="anggota3" name="anggota[]">
    <button type="submit" name="submit">Submit</button>
</form>  
</body>
</html>