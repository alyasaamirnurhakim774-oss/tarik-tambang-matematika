let a, b, jawaban;

const soalEl = document.getElementById("soal");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {
  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  jawaban = a + b;
  soalEl.textContent = `${a} + ${b}`;
};

function jawab(player) {
  const input =
    player === 1
      ? document.getElementById("jawab1")
      : document.getElementById("jawab2");

  if (parseInt(input.value) === jawaban) {
    alert(`Player ${player} BENAR! 💪`);
  } else {
    alert(`Player ${player} SALAH 😭`);
  }

  input.value = "";
}
