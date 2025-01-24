<?php
include "./server.php";
include "./login.php";
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tabel Data Mahasiswa-No Bootstrap</title>
    <!--Untuk manggil icon untuk tombol saya tetap ambil dari bootstrap agar iconnya sama persis-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" />
    <link rel="stylesheet" type="text/css" href="./css tugas tabel.css">
    <link rel="website icon" type="png" href="./Images/android-chrome-192x192.png">
    <link rel="website icon" type="png" href="./Images/android-chrome-512x512.png">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>
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
        <button class="register-button no-print">
            <i class="bi bi-person-plus-fill"></i>Register
        </button>
        <button class="login-button no-print">
            <i class="bi bi-key-fill"></i>Login
        </button>
        <form id="login-form" class="login-form-container" method="POST" action="login.php">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit" name="submit">Login</button>
        </form>
    </div>    
</div>
<div class="container-div">
    <h2>Tabel Data Mahasiswa USB YPKP datatable</h2>
    <table id="myTable" class="cell-border" style="width: 100%;"></table>
</div>
<div class="container-div">
    <h2>Tabel Data Mahasiswa USB YPKP</h2>
    <table class="format-table">
        <thead>
            <tr>
                <th class="hidden">ID</th>
                <th>NPM</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th class="no-print" style="width: 120px;">Edit Biodata</th>
            </tr>
        </thead>
        <tbody id="data">
            <tr id="row_1">
                <td id="id_1">1</td>
                <td id="npm_1">2013241001</td>
                <td id="nama_1">Aditya Imam Satrio</td>
                <td id="jenisKelamin_1">Laki-Laki</td>
                <td id="email_1">adityaisatrio404@gmail.com</td>
                <td class="no-print">
                    <button class="edit-button" onclick="fillForm(1)">
                        <i class="bi bi-pencil"></i>Edit
                    </button>
                    <button class="delete-button" onclick="deleteRow(1)">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>
            <tr id="row_2">
                <td id="id_2">2</td>
                <td id="npm_2">2013241002</td>
                <td id="nama_2">Harits Ardiono Rakhmadi</td>
                <td id="jenisKelamin_2">Laki-Laki</td>
                <td id="email_2">Haritsar145@gmail.com</td>
                <td class="no-print">
                    <button class="edit-button" onclick="fillForm(2)">
                        <i class="bi bi-pencil"></i>Edit
                    </button>
                    <button class="delete-button" onclick="deleteRow(2)">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>
            <tr id="row_3">
                <td id="id_3">3</td>
                <td id="npm_3">2013241003</td>
                <td id="nama_3">Anindita Dwi Wulandari</td>
                <td id="jenisKelamin_3">Perempuan</td>
                <td id="email_3">AninditaDwiWul7@gmail.com</td>
                <td class="no-print">
                    <button class="edit-button" onclick="fillForm(3)">
                        <i class="bi bi-pencil"></i>Edit
                    </button>
                    <button class="delete-button" onclick="deleteRow(3)">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>
            <tr id="row_4">
                <td id="id_4">4</td>
                <td id="npm_4">2013241004</td>
                <td id="nama_4">Firman Sandy Prayitno</td>
                <td id="jenisKelamin_4">Laki-Laki</td>
                <td id="email_4">FirmansandyP@gmail.com</td>
                <td class="no-print">
                    <button class="edit-button" onclick="fillForm(4)">
                        <i class="bi bi-pencil"></i>Edit
                    </button>
                    <button class="delete-button" onclick="deleteRow(4)">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>
            <tr id="row_5">
                <td id="id_5">5</td>
                <td id="npm_5">2013241005</td>
                <td id="nama_5">Ananda Samuel Hutapea</td>
                <td id="jenisKelamin_5">Laki-Laki</td>
                <td id="email_5">AnandaSam12@gmail.com</td>
                <td class="no-print">
                    <button class="edit-button" onclick="fillForm(5)">
                        <i class="bi bi-pencil"></i>Edit
                    </button>
                    <button class="delete-button" onclick="deleteRow(5)">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="extra-button-container">
        <button class="extra-button no-print" onclick="window.print()">
            <i class="bi bi-printer-fill"></i>Print
        </button>
        <button class="extra-button no-print" onclick="addRow()">
            <i class="bi bi-plus-circle"></i>Add Row
        </button>
    </div>
</div>
<div id="overlay">
    <div class="form-container">
        <button class="exit-form-button" onclick="offverlay()">
            <i class="bi bi-x-lg"></i>
        </button>
        <form name="formSaya" class="form-display">
            <input type="hidden" id="fid" name="id">
            <label for="fNpm">NPM:</label>
            <input type="number" id="fNpm" name="npm" maxlength="12">
            <label for="fNama">Nama:</label>
            <input type="text" id="fNama" name="nama" maxlength="50">
            <label for="fJenis-Kelamin">Jenis-Kelamin</label>
            <select id="fJenis-Kelamin" name="Jenis-Kelamin">
                <option></option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
                <option value="Attack-Helicopter">Attack Helicopter</option>
            </select>
            <label for="femail">Email</label>
            <input type="email" id="femail" name="email" maxlength="50">
            <button style="width: 27%;" type="button" onclick="editData()">UBAH</button>
        </form>
    </div>
</div>
<div id="register-overlay" class="overlay">
    <div class="form-container">
        <button class="exit-form-button" onclick="$('#register-overlay').fadeOut()">
            <i class="bi bi-x-lg"></i>
        </button>
        <form id="register-form" class="form-display" method="POST" action="register.php">
            <label for="reg-username">Username:</label>
            <input type="text" id="reg-username" name="username" required>
            <label for="reg-password">Password:</label>
            <input type="password" id="reg-password" name="password" required>
            <button type="submit" name="submit">Register</button>
        </form>
    </div>
</div>
</body>
</html>