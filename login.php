<?php
$validCredentials = [
    ['username' => 'adit', 'password' =>md5('121212')],
    ['username' => 'harits', 'password' =>md5('131313')]
];

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$isValid = false;
foreach ($validCredentials as $cred) {
    if ($cred['username'] === $username && $cred['password'] === md5 ($password)) {
        $isValid = true;
        break;
    }
}

echo json_encode(['valid' => $isValid]);
?>