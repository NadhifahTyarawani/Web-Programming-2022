function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var time = document.getElementById("time").value;
    var Tujuan = document.getElementById("Tujuan").value;
    var number = document.getElementById("number").value;
    if (nama != "" && email!="" && time !="" && Tujuan !="" && number !="") {
     alert('sukses')
    } else {
    alert('Anda harus mengisi data dengan lengkap !');
    }
}
