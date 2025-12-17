document.addEventListener("DOMContentLoaded", function () {
  let posisi = 0;
  let jawabanBenar = 0;

  function buatSoal() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    jawabanBenar = a + b;
    document.getElementById("soal").innerText = a + " + " + b;
  }

  window.cekJawaban = function (player) {
    const input = document.getElementById("jawaban" + player);
    if (parseInt(input.value) === jawabanBenar) {
      posisi += player === 1 ? -1 : 1;
      gerakTali();
      buatSoal();
    }
    input.value = "";
  };

  function gerakTali() {
    const tali = document.getElementById("tali");
    tali.style.marginLeft = posisi * 20 + "px";

    if (posisi <= -5) {
      alert("🏆 PLAYER 1 MENANG!");
      posisi = 0;
      gerakTali();
    }
    if (posisi >= 5) {
      alert("🏆 PLAYER 2 MENANG!");
      posisi = 0;
      gerakTali();
    }
  }

  buatSoal();
});
