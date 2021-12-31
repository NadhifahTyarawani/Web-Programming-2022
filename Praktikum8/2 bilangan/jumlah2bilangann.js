function tambah() {
    let bilanganganjil = parseInt(document.getElementById("bilanganganjil").value);
    let bilangangenap = parseInt(document.getElementById("bilangangenap").value);
    let tambah = bilanganganjil + bilangangenap
    let hasil = document.getElementById("hasil")
    hasil.innerHTML = tambah
}