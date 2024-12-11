//Mengaktifkan overlay
function onverlay() {
    document.getElementById("overlay").style.display = "flex";
} 
//Non-aktifkan overlay
function offverlay() {
    document.getElementById("overlay").style.display = "none"; 
}
//Validasi isian form
function validateForm(a, b, c, d) {
    if (a == "") {
        alert("Kolom Nama Harus Diisi");
        return false;
    }
    if (b == "") {
        alert("Kolom NPM Harus Diisi");
        return false;
    }
    if (c == "") {
        alert("Kolom Email Harus Diisi");
        return false
    }
    if (d == "") {
        alert("Kolom Jenis Kelamin Harus Diisi");
        return false
    }
    return true
}
//Fungsi tambah row di tabel
let n = 6
function addRow() {
    document.getElementById('data').innerHTML+=
        '<tr id="row_'+n+'">' +
            '<td id="id_'+n+'">'+
                n+
            '</td>' +
            '<td id="npm_'+n+'">'+
    
            '</td>' +
            '<td id="nama_'+n+'">'+
                
            '</td>' +
            '<td id="jenisKelamin_'+n+'">'+
                
            '</td>' +
            '<td id="email_'+n+'">'+
                
            '</td>' +
            '<td class="no-print">'+
                '<button class="edit-button" onclick="fillForm('+n+')">'+
                    '<i class="bi bi-pencil"></i>Edit'+
                '</button>'+
                '<button class="delete-button" onclick="deleteRow('+n+')">'+
                        '<i class="bi bi-trash3"></i>'+
                    '</button>'+
            '</td>'+
        '</tr>';
    n++;
}
//Menghapus row di tabel
function deleteRow(id) {
    document.getElementById('row_'+id).remove()
    n--;
}
//Pindah data dari tabel ke form
function fillForm(rowNumber) {
    let id = document.getElementById("id_"+rowNumber).innerHTML
    let currentNpm = document.getElementById("npm_"+rowNumber).innerHTML
    let currentNama = document.getElementById("nama_"+rowNumber).innerHTML
    let currentjenisKelamin = document.getElementById("jenisKelamin_"+rowNumber).innerHTML
    let currentEmail = document.getElementById("email_"+rowNumber).innerHTML
    document.getElementById("fid").value = id
    document.getElementById("fNpm").value = currentNpm
    document.getElementById("fNama").value = currentNama
    document.getElementById("fJenis-Kelamin").value = currentjenisKelamin
    document.getElementById("femail").value = currentEmail
    onverlay()
}
//Edit dan pindah data dari form ke tabel
function editData() {
	let id = document.getElementById("fid").value;
	let newNpm = document.getElementById("fNpm").value;
	let newNama = document.getElementById("fNama").value;
    let newjenisKelamin = document.getElementById("fJenis-Kelamin").value;
    let newEmail = document.getElementById("femail").value;
    let validated = validateForm(newNama, newNpm, newEmail, newjenisKelamin);
    if (!validated) {
        return false;
    }
    document.getElementById("npm_"+id).innerHTML = newNpm;
    document.getElementById("nama_"+id).innerHTML = newNama;
    document.getElementById("jenisKelamin_"+id).innerHTML = newjenisKelamin;
    document.getElementById("email_"+id).innerHTML = newEmail;
    offverlay()
}