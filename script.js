let wallet = "";
let nomor = "";
let nominal = 0;

function pilihWallet(w) {
  wallet = w;
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
  document.getElementById("walletSelected").innerText =
    "E-Wallet: " + w;
}

function lanjutNomor() {
  nomor = document.getElementById("nomor").value;

  if (!nomor) {
    alert("Masukkan nomor!");
    return;
  }

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function pilihNominal(n) {
  nominal = n;

  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step4").classList.remove("hidden");

  document.getElementById("ringkasan").innerText =
    wallet + " | " + nomor + " | Rp " + nominal;
}

function bayar() {
  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");

    document.getElementById("status").innerHTML =
      "✅ Top up " + wallet + " ke " + nomor + " sebesar Rp " + nominal + " berhasil!";
  }, 2000);
}
