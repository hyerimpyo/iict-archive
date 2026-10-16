let horizonY = 320;

let sunX;
let sunY;
let sunSize;

let skyRed;
let skyGreen;
let skyBlue;

let seaRed;
let seaGreen;
let seaBlue;

let reflectionWidth;

// 반사광과 어두운 물결의 좌우 이동
let waveShift;

// 밝은 잔물결만을 위한 별도의 좌우 이동
let brightWaveShift;

function setup() {
  createCanvas(800, 600);

  // 처음 실행될 때 보여줄 장면의 랜덤값
  sunX = random(250, 550);
  sunY = random(horizonY - 150, horizonY - 55);
  sunSize = random(90, 150);

  skyRed = random(220, 255);
  skyGreen = random(85, 135);
  skyBlue = random(90, 145);

  seaRed = random(20, 60);
  seaGreen = random(45, 85);
  seaBlue = random(90, 145);

  reflectionWidth = random(130, 230);
  waveShift = random(-35, 35);
  brightWaveShift = random(-45, 45);
}

function draw() {
  background(40, 35, 90);
  noStroke();

  // 하늘을 같은 높이의 8개 조각으로 나눔
  let skyBandHeight = horizonY / 8;

  fill(skyRed - 170, skyGreen - 60, skyBlue + 40);
  rect(0, 0, width, skyBandHeight);

  fill(skyRed - 145, skyGreen - 50, skyBlue + 35);
  rect(0, skyBandHeight, width, skyBandHeight);

  fill(skyRed - 120, skyGreen - 40, skyBlue + 30);
  rect(0, skyBandHeight * 2, width, skyBandHeight);

  fill(skyRed - 95, skyGreen - 25, skyBlue + 20);
  rect(0, skyBandHeight * 3, width, skyBandHeight);

  fill(skyRed - 70, skyGreen - 10, skyBlue + 10);
  rect(0, skyBandHeight * 4, width, skyBandHeight);

  fill(skyRed - 45, skyGreen + 10, skyBlue);
  rect(0, skyBandHeight * 5, width, skyBandHeight);

  fill(skyRed - 20, skyGreen + 35, skyBlue - 10);
  rect(0, skyBandHeight * 6, width, skyBandHeight);

  fill(skyRed, skyGreen + 60, skyBlue - 25);
  rect(0, skyBandHeight * 7, width, skyBandHeight);

  // 태양을 둘러싸는 두 개의 은은한 빛(햇무리)
  fill(255, 190, 115, 25);
  ellipse(
    sunX,
    sunY,
    sunSize + 100,
    sunSize + 100
  );

  fill(255, 205, 120, 45);
  ellipse(
    sunX,
    sunY,
    sunSize + 55,
    sunSize + 55
  );

  // 태양
  fill(255, 232, 155);
  ellipse(
    sunX,
    sunY,
    sunSize,
    sunSize
  );

  // 바다를 같은 높이의 7개 조각으로 나눔
  let seaBandHeight = (height - horizonY) / 7;

  fill(seaRed + 30, seaGreen + 28, seaBlue + 30);
  rect(
    0,
    horizonY,
    width,
    seaBandHeight
  );

  fill(seaRed + 25, seaGreen + 22, seaBlue + 25);
  rect(
    0,
    horizonY + seaBandHeight,
    width,
    seaBandHeight
  );

  fill(seaRed + 20, seaGreen + 16, seaBlue + 20);
  rect(
    0,
    horizonY + seaBandHeight * 2,
    width,
    seaBandHeight
  );

  fill(seaRed + 15, seaGreen + 10, seaBlue + 15);
  rect(
    0,
    horizonY + seaBandHeight * 3,
    width,
    seaBandHeight
  );

  fill(seaRed + 10, seaGreen + 4, seaBlue + 10);
  rect(
    0,
    horizonY + seaBandHeight * 4,
    width,
    seaBandHeight
  );

  fill(seaRed + 5, seaGreen - 4, seaBlue + 2);
  rect(
    0,
    horizonY + seaBandHeight * 5,
    width,
    seaBandHeight
  );

  fill(seaRed, seaGreen - 12, seaBlue - 10);
  rect(
    0,
    horizonY + seaBandHeight * 6,
    width,
    seaBandHeight
  );

  // 태양의 반사광
  // 하나의 waveShift에 서로 다른 비율을 곱함
  noStroke();

  fill(255, 230, 160, 150);
  ellipse(
    sunX + waveShift * 0.1,
    horizonY + 14,
    reflectionWidth * 0.28,
    6
  );

  fill(255, 215, 145, 135);
  ellipse(
    sunX + waveShift * 0.2,
    horizonY + 34,
    reflectionWidth * 0.42,
    8
  );

  fill(255, 205, 135, 120);
  ellipse(
    sunX + waveShift * 0.3,
    horizonY + 58,
    reflectionWidth * 0.55,
    9
  );

  fill(255, 200, 130, 105);
  ellipse(
    sunX + waveShift * 0.5,
    horizonY + 86,
    reflectionWidth * 0.7,
    10
  );

  fill(255, 195, 125, 90);
  ellipse(
    sunX + waveShift * 0.7,
    horizonY + 118,
    reflectionWidth * 0.82,
    11
  );

  fill(255, 190, 120, 75);
  ellipse(
    sunX + waveShift,
    horizonY + 154,
    reflectionWidth,
    12
  );

  fill(255, 185, 115, 55);
  ellipse(
    sunX + waveShift * 1.2,
    horizonY + 194,
    reflectionWidth * 1.12,
    13
  );

  fill(255, 180, 110, 40);
  ellipse(
    sunX + waveShift * 1.4,
    horizonY + 238,
    reflectionWidth * 1.25,
    14
  );

  // 밝은 잔물결(바다 물결을 위해 밝은거 4개, 아래 어두운거 4개로 나눔)
  // brightWaveShift에 일정 비율을 곱해서 활용
  stroke(190, 215, 235, 110);
  strokeWeight(2);

  line(
    35 + brightWaveShift,
    horizonY + 42,
    215 + brightWaveShift,
    horizonY + 42
  );

  line(
    570 - brightWaveShift * 0.5,
    horizonY + 60,
    760 - brightWaveShift * 0.5,
    horizonY + 60
  );

  line(
    95 + brightWaveShift * 0.7,
    horizonY + 98,
    330 + brightWaveShift * 0.7,
    horizonY + 98
  );

  line(
    500 - brightWaveShift,
    horizonY + 132,
    725 - brightWaveShift,
    horizonY + 132
  );

  // 어두운 잔물결(brightWaveShift보다 어둡게 하는 대신 strokeWeight를 살짝 늘림)
  stroke(130, 175, 215, 95);
  strokeWeight(3);

  line(
    15 + waveShift,
    horizonY + 170,
    270 + waveShift,
    horizonY + 170
  );

  line(
    535 - waveShift * 0.5,
    horizonY + 210,
    790 - waveShift * 0.5,
    horizonY + 210
  );

  line(
    85 + waveShift * 0.7,
    horizonY + 255,
    365 + waveShift * 0.7,
    horizonY + 255
  );
}

function mousePressed() {
  // 클릭할 때 새로운 장면을 만들기 위한 랜덤값
  sunX = random(250, 550);
  sunY = random(horizonY - 150, horizonY - 55);
  sunSize = random(90, 150);

  skyRed = random(220, 255);
  skyGreen = random(85, 135);
  skyBlue = random(90, 145);

  seaRed = random(20, 60);
  seaGreen = random(45, 85);
  seaBlue = random(90, 145);

  reflectionWidth = random(130, 230);
  waveShift = random(-35, 35);
  brightWaveShift = random(-45, 45);
}