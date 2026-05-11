const dados = [3200, 8500, 11500, 7800, 3200, 1800];
const rotulos = ["R$200-500", "R$500-1k", "R$1k-2k", "R$2k-3k", "R$3k-5k", "> R$5k"];
const valorMaximo = 12000;

function setup() {
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  background(255);

  let margemX = 100;
  let margemY = 80;
  let larguraGrafico = width - (margemX * 2);
  let alturaGrafico = height - (margemY * 2);

  fill(50);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(20);
  textStyle(BOLD);
  text("Distribuição dos limites sugeridos", margemX, 30);
  
  textSize(12);
  textStyle(NORMAL);
  fill(120);
  text("Número de clientes por faixa de limite", margemX, 55);

  stroke(240);
  strokeWeight(1);
  textAlign(RIGHT, CENTER);
  textSize(11);

  for (let i = 0; i <= 4; i++) {
    let valorGrade = i * 3000;
    let y = map(valorGrade, 0, valorMaximo, height - margemY, margemY);
    
    line(margemX, y, width - margemX, y);
    
    noStroke();
    fill(150);
    text(valorGrade === 0 ? "0" : (valorGrade / 1000) + "k", margemX - 15, y);
    stroke(240);
  }

  let larguraBarra = (larguraGrafico / dados.length) * 0.8;
  let espacamento = larguraGrafico / dados.length;

  for (let i = 0; i < dados.length; i++) {
    let x = margemX + i * espacamento + (espacamento - larguraBarra) / 2;
    let alturaBarra = map(dados[i], 0, valorMaximo, 0, alturaGrafico);
    let y = height - margemY - alturaBarra;

    noStroke();
    if (i === 2) {
      fill(30, 80, 160);
    } else {
      fill(110, 170, 230);
    }

    rect(x, y, larguraBarra, alturaBarra, 4, 4, 0, 0);

    fill(100);
    textAlign(CENTER, TOP);
    text(rotulos[i], x + larguraBarra / 2, height - margemY + 15);
  }

  fill(30, 80, 160);
  rect(margemX, height - 35, 12, 12, 2);
  fill(100);
  textAlign(LEFT, CENTER);
  text("Volume de Clientes", margemX + 20, height - 29);
}