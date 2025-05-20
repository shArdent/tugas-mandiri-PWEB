<?php
// Koneksi ke database (ubah sesuai konfigurasi lokalmu)
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "db";
$user = "user";
$pass = "password";
$db   = "praktikum_pweb";

$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Query insert
$sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo "Pesan berhasil dikirim!";
} else {
    echo "Terjadi kesalahan: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
