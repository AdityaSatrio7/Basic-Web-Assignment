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