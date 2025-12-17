let jawabanBenar;
let posisi = 0;

let skorKiri = 0;
let skorKanan = 0;
let nyawaKiri = 3;
let nyawaKanan = 3;

function buatSoal() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  jawabanBenar = a * b;
  document.getElementById("soal").innerText =
    `Soal: ${a} × ${b} = ?`;
}

function jawab(pemain) {
  let input = pemain === 1
    ? document.getElementById("jawab1")
    : document.getElementById("jawab2");

  if (parseInt(input.value) === jawabanBenar) {
    if (pemain === 1) {
      posisi -= 40;
      skorKiri++;
      document.getElementById("skorKiri").innerText = skorKiri;
    } else {
      posisi += 40;
      skorKanan++;
      document.getElementById("skorKanan").innerText = skorKanan;
    }
  } else {
    if (pemain === 1) {
      nyawaKiri--;
      document.getElementById("nyawaKiri").innerText = nyawaKiri;
    } else {
      nyawaKanan--;
      document.getElementById("nyawaKanan").innerText = nyawaKanan;
    }
  }

  document.getElementById("rope").style.transform =
    `translateX(${posisi}px)`;

  cekMenang();
  input.value = "";
  buatSoal();
}

function cekMenang() {
  if (posisi <= -200) {
    tampilkanHasil("🎉 TIM KIRI MENANG!");
  } else if (posisi >= 200) {
    tampilkanHasil("🎉 TIM KANAN MENANG!");
  } else if (nyawaKiri <= 0) {
    tampilkanHasil("💥 TIM KANAN MENANG!");
  } else if (nyawaKanan <= 0) {
    tampilkanHasil("💥 TIM KIRI MENANG!");
  }
}

function tampilkanHasil(teks) {
  document.getElementById("hasil").innerText = teks;
  document.getElementById("popup").classList.remove("hidden");
}

function resetGame() {
  posisi = 0;
  skorKiri = skorKanan = 0;
  nyawaKiri = nyawaKanan = 3;

  document.getElementById("rope").style.transform = "translateX(0)";
  document.getElementById("skorKiri").innerText = 0;
  document.getElementById("skorKanan").innerText = 0;
  document.getElementById("nyawaKiri").innerText = 3;
  document.getElementById("nyawaKanan").innerText = 3;

  document.getElementById("popup").classList.add("hidden");
  buatSoal();
}

window.onload = buatSoal;

