<?php
// Buat koneksi database SQLite lewat PDO
try {
  $pdo = new PDO('sqlite:./Database/mydb.db');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully to database.";
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>