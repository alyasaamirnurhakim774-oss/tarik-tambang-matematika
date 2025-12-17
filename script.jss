let posisi = 0;
let jawabanBenar = 0;
let gameMulai = false;

window.mulaiGame = function () {
  gameMulai = true;
  posisi = 0;

  document.getElementById("tali").style.marginLeft = "0px";
  document.getElementById("jawaban1").disabled = false;
  document.getElementById("jawaban2").disabled = false;
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;

  buatSoal();
};

function buatSoal() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  jawabanBenar = a + b;
  document.getElementById("soal").innerText = a + " + " + b;
}

window.cekJawaban = function (player) {
  if (!gameMulai) return;

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
    resetGame();
  }
  if (posisi >= 5) {
    alert("🏆 PLAYER 2 MENANG!");
    resetGame();
  }
}

function resetGame() {
  gameMulai = false;
  document.getElementById("soal").innerText = "---";
  document.getElementById("jawaban1").disabled = true;
  document.getElementById("jawaban2").disabled = true;
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
}
