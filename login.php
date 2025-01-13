<?php
include "./server.php";

$dsn = "sqlite:./Database/mydb.db";
$db = new PDO($dsn);

$response = array("valid" => false,"message" => "");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    //validasi login form
    if (empty($username) || empty($password)) {
        $response["message"] = "Username dan password tidak boleh kosong.";
        echo json_encode($response);
        exit;
    }

    //SQL statement untuk fetch password dari database
    $stmt = $db->prepare("SELECT Password_hash FROM Credentials WHERE Username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    //fetch password dari database
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        //verifikasi password
        if (password_verify($password, $user["Password_hash"])) {
            $response["valid"] = true;
            $response["message"] = "Login berhasil";
        } else {
            $response["message"] = "Password salah.";
        }
    } else {
        $response["message"] = "Username tidak ditemukan.";
    }
}

echo json_encode($response);
?>