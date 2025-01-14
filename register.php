<?php
include "./server.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validasi input
    if (empty($username) || empty($password)) {
        echo "<script>alert('Username dan password tidak boleh kosong.');</script>";
        exit;
    }

    // Hash password dengan bcrypt
    $password_hash = password_hash($password, PASSWORD_BCRYPT);

    // Insert ke database
    $stmt = $pdo->prepare("INSERT INTO Credentials (Username, Password_hash) VALUES (:username, :password_hash)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password_hash', $password_hash);

    if ($stmt->execute()) {
        echo "<script>alert('Registrasi berhasil.');</script>";
    } else {
        echo "<script>alert('Registrasi gagal.');</script>";
    }
}
?>