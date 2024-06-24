let chances = 3;
document.querySelector("#chances").innerText = `Chances: ${chances}`;

let numeroSecreto = parseInt(Math.random() * (10 - 1) + 1);

function button() {
  const input = document.querySelector("input");

  if (chances < 1) {
    alert("Suas chances acabaram!");
    setTimeout(function () {
      window.location.reload(true);
    }, 1);
  } else {
    if (
      parseInt(input.value) > 10 ||
      parseInt(input.value) <= 0 ||
      input.value == ""
    ) {
      alert("Valor inválido! Digite novamente.");
    } else {
      if (parseInt(input.value) == numeroSecreto) {
        document.querySelector("p").innerText = "Resposta certa, parabéns! |o/";

        chances = 3;

        document.querySelector("#chances").innerText = `Chances: ${chances}`;

        document.querySelector("p").classList.add("acertou");

        setTimeout(function () {
          window.location.reload(true);
        }, 1500);
      } else if (parseInt(input.value) < numeroSecreto) {
        document.querySelector("p").innerText = "O número secreto é maior!";

        tentativas -= 2;
        document.querySelector("#chances").innerText = `Chances: ${chances}`;
        document.querySelector("p").classList.add("errou");
      } else if (parseInt(input.value) > numeroSecreto) {
        document.querySelector("p").innerText = "O número secreto é menor!";

        chances -= 1;
        document.querySelector("#chances").innerText = `Chances: ${chances}`;
        document.querySelector("p").classList.add("errou");
      }
    }
  }
}
