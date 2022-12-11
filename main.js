const titulo = ["Vencedor1", "Empate", "Vencedor2"];
const valor = ["valor1", "valor2", "valor3"];
const mult = ["mult1", "mult2", "mult3"];
const result = ["resultado1", "resultado2", "resultado3"];

function main() {
  let conteudo = "";

  for(let i = 0; i < titulo.length; i++) {
    conteudo += `
      <section class="balao">
        <h1 class="center padding">${titulo[i]}</h1>
        <div class="txtRigth padding">
          <label for="${valor[i]}">Aposta</label>
          <input type="number" name="${valor[i]}" id="${valor[i]}" value="50.00">
        </div>
        <div class="txtRigth padding">
          <label for="${mult[i]}">Pagando</label>
          <input type="number" name="${mult[i]}" id="${mult[i]}" value="1.54">
        </div>
        <div class="center padding">
          <button class="padding" onclick="calcular(${i+1})">Calcular</button>
          <button class="padding" onclick="inverter(${i+1})">Inverter</button>
        </div>
        <div>
          Resultado:
          <input type="number" name="${result[i]}" id="${result[i]}">
        </div>
      </section>`;
  }

  document.getElementById('main').innerHTML = conteudo;
}
main();

function calcular(calc) {
  const i = calc-1;
  const value = document.getElementById(valor[i]).value;
  const multiple = document.getElementById(mult[i]).value;
  document.getElementById(result[i]).value = value*multiple;
}

function inverter(calc) {
  const i = calc-1;
  const resultado = document.getElementById(result[i]).value;
  const multiple = document.getElementById(mult[i]).value;
  document.getElementById(valor[i]).value = resultado/multiple;
}