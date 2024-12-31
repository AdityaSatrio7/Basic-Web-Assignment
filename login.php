<?php
header('Content-Type: application/json');

$validCredentials = [
    ['username' => 'adit', 'password' => '121212'],
    ['username' => 'harits', 'password' => '131313']
];

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$isValid = false;
foreach ($validCredentials as $cred) {
    if ($cred['username'] === $username && $cred['password'] === $password) {
        $isValid = true;
        break;
    }
}

echo json_encode(['valid' => $isValid]);
?>
