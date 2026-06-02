let wallet = "";
let nominal = 0;

function selectWallet(w) {
  wallet = w;
  document.getElementById("form").classList.remove("hidden");
}

function selectNominal(n) {
  nominal = n;
}

function bayar() {
  let nomor = document.getElementById("nomor").value;

  if (!wallet || !nomor || !nominal) {
    alert("Lengkapi data!");
    return;
  }

  document.getElementById("status").innerHTML =
    "✅ " + wallet + " → " + nomor + " <br> Rp " + nominal;
}
