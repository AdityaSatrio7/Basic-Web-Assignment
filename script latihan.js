function onverlay() {
    document.getElementById("overlay").style.display = "flex";
} 
function offverlay() {
    document.getElementById("overlay").style.display = "none"; 
}
function validateForm() {
    let x = document.forms["formSaya"]["Nama"].value;
    let y = document.forms["formSaya"]["Npm"].value;
    let z = document.forms["formSaya"]["email"].value;
    if (x == "") {
        alert("Kolom Nama Harus Diisi");
        return false;
    }
    if (y == "") {
        alert("Kolom NPM Harus Diisi");
        return false;
    }
    if (z == "") {
        alert("Kolom Email Harus Diisi");
        return false
    }
}
let n = 6
function addRow() {
    document.getElementById('data').innerHTML+=
        '<tr>' +
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
            '</td>'+
        '</tr>';
    n++;
}
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
function editData() {
	let id = document.getElementById("fid").value;
	let newNpm = document.getElementById("fNpm").value;
	let newNama = document.getElementById("fNama").value;
    let newjenisKelamin = document.getElementById("fJenis-Kelamin").value;
    let newEmail = document.getElementById("femail").value;
    document.getElementById("npm_"+id).innerHTML = newNpm;
    document.getElementById("nama_"+id).innerHTML = newNama;
    document.getElementById("jenisKelamin_"+id).innerHTML = newjenisKelamin;
    document.getElementById("email_"+id).innerHTML = newEmail;
    offverlay()
}