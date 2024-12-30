//Manggil form login
$(document).ready(function() {
    $(".login-button").click(function() {
        $("#login-form").fadeIn();
    });
//Tutup form login dengan klik diluar form
    $(document).click(function(event) {
        if (!$(event.target).closest("#login-form,.login-button").length) {
            $("#login-form").fadeOut();
        }
    });
});
//Mengaktifkan overlay
function onverlay() {
    document.getElementById("overlay").style.display = "flex";
} 
//Non-aktifkan overlay
function offverlay() {
    document.getElementById("overlay").style.display = "none"; 
}
//Validasi isian form menggunakan jQuery
function validateForm(a, b, c, d) {
    if (a === "") {
        alert("Kolom Nama Harus Diisi");
        return false;
    }
    if (b === "") {
        alert("Kolom NPM Harus Diisi");
        return false;
    }
    if (c === "") {
        alert("Kolom Email Harus Diisi");
        return false;
    }
    if (d === "") {
        alert("Kolom Jenis Kelamin Harus Diisi");
        return false;
    }
    return true;
}
//Fungsi tambah row di tabel
let n = 6
function addRow() {
    const row = $(`
        <tr id="row_${n}">
            <td id="id_${n}">${n}</td>
            <td id="npm_${n}"></td>
            <td id="nama_${n}"></td>
            <td id="jenisKelamin_${n}"></td>
            <td id="email_${n}"></td>
            <td class="no-print">
                <button class="edit-button" onclick="fillForm(${n})"><i class="bi bi-pencil"></i>Edit</button>
                <button class="delete-button" onclick="deleteRow(${n})"><i class="bi bi-trash3"></i></button>
            </td>
        </tr>
    `);
    $('#data').append(row);
    n++;
}
//Menghapus row di tabel
function deleteRow(id) {
    $('#row_'+id).remove()
    n--;
}
//Pindah data dari tabel ke form
function fillForm(rowNumber) {
    let id = $("#id_" + rowNumber).html()
    let currentNpm = $("#npm_" + rowNumber).html()
    let currentNama = $("#nama_" + rowNumber).html()
    let currentjenisKelamin = $("#jenisKelamin_" + rowNumber).html()
    let currentEmail = $("#email_" + rowNumber).html()
    $("#fid").val(id)
    $("#fNpm").val(currentNpm)
    $("#fNama").val(currentNama)
    $("#fJenis-Kelamin").val(currentjenisKelamin)
    $("#femail").val(currentEmail)
    onverlay()
}
//Edit dan pindah data dari form ke tabel
function editData() {
    let id = $("#fid").val();
    let newNpm = $("#fNpm").val();
    let newNama = $("#fNama").val();
    let newjenisKelamin = $("#fJenis-Kelamin").val();
    let newEmail = $("#femail").val();
    let validated = validateForm(newNama, newNpm, newEmail, newjenisKelamin);
    if (!validated) {
        return false;
    }
    $("#npm_" + id).html(newNpm);
    $("#nama_" + id).html(newNama);
    $("#jenisKelamin_" + id).html(newjenisKelamin);
    $("#email_" + id).html(newEmail);
    offverlay()
}
let data = [
    {
        'id': 1, 
        'npm': "2013241001",
        'nama': "Aditya Imam Satrio",
        'jenisKelamin': "Laki-Laki",
        'email': "adityaisatrio404@gmail.com"
    },
    {
        'id': 2, 
        'npm': "2013241002",
        'nama': "Harits Ardiono Rakhmadi",
        'jenisKelamin': "Laki-Laki",
        'email': "HaritsAR145@gmail.com"
    },
    {
        'id': 3, 
        'npm': "2013241003",
        'nama': "Anindita Dwi wulandari",
        'jenisKelamin': "Perempuan",
        'email': "aninditadwiwula7@gmail.com"
    },
    {
        'id': 4, 
        'npm': "2013241005",
        'nama': "Firman Sandy Prayitno",
        'jenisKelamin': "Laki-Laki",
        'email': "FirmanSandyP@gmail.com"
    },
    {
        'id': 5,
        'npm': "2013241006",
        'nama': "Ananda Samuel Hutapea",
        'jenisKelamin': "Laki-Laki",
        'email': "AnandaSam12@gmail.com"
    }
]
$(document).ready( function () {
    console.log(data);
    $('#myTable').DataTable( {
        ordering: true,
        searching: true,
        data: data,
        columns: [
            { data: "id" },
            { data: "npm" },
            { data: "nama" },
            { data: "jenisKelamin" },
            { data: "email" }
        ]
    } );
} );