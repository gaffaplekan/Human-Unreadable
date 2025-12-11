const baseWidth = 2500;  // ширина макета з Figma
const baseHeight = 4800; // висота макета

let vpPixel, agdasima;
let hero;
let slides = [];
let currentIndex = 0;
let nextIndex = 1;
let slideTimer = 0;
let slideDuration = 60;
let hoverDirection = 0; // -1 = вліво, 1 = вправо, 0 = стоїть
let xOffset = 0;        // поточне зміщення слайдера
let sliderTop = 1500;    // y позиція слайдера
let sliderBottom = 2300; // нижня межа слайдера
let slideWidth;           // ширина одного слайда (розрахуємо під width)
let gap = 20;


const styles = {
  H1: { font: 'VP Pixel', fontObj: null, size: 96, letterSpacing: 2 },
  H2: { font: 'VP Pixel', fontObj: null, size: 36, letterSpacing: 2 },
  H3: { font: 'VP Pixel', fontObj: null, size: 16, letterSpacing: 2 },
  body1: { font: 'Agdasima', fontObj: null, size: 36, letterSpacing: 3 },
  body3: { font: 'Agdasima', fontObj: null, size: 20, letterSpacing: 3 }
};

function preload() {
  vpPixel = loadFont('VPPixel-Simplified.otf');
  agdasima = loadFont('Agdasima-Regular.ttf');

  hero = loadImage('hero.png');

  slides[0] = loadImage('slider1.webp');
  slides[1] = loadImage('slider2.png');
  slides[2] = loadImage('slider3.png');
  slides[3] = loadImage('slider4.png');
  slides[4] = loadImage('slider5.webp');
  slides[5] = loadImage('slider6.png');
  slides[6] = loadImage('slider7.png');
  slides[7] = loadImage('slider8.webp');
  slides[8] = loadImage('slider9.png');
  slides[9] = loadImage('slider10.webp');
  
  process = loadImage('process.png')
  acts = loadImage('acts.png')
}

function setup() {
  createCanvas(windowWidth, baseHeight); 
  slideWidth = width / 3; 
  
  styles.H1.fontObj = vpPixel;
  styles.H2.fontObj = vpPixel;
  styles.H3.fontObj = vpPixel;
  styles.body1.fontObj = agdasima;
  styles.body3.fontObj = agdasima;
}

function drawText(str, x, y, style) {
  textFont(style.fontObj);
  textSize(style.size);
  fill(255);
  textAlign(LEFT, TOP);

  let xPos = x;
  for (let i = 0; i < str.length; i++) {
    text(str[i], xPos, y);
    xPos += textWidth(str[i]) + style.letterSpacing;
  }
}

function draw() {
  background(0);

  let scaleFactor = width / baseWidth;
  push();
  scale(scaleFactor);
  image(hero, 0, 0);

  drawText('//HUMAN UNREADABLE', 912, 1576, styles.H1);
  drawText("<  >",72,2019,styles.H1);

  let bodyText = "The unique project by the duo Operator, Ania Catherine and Dejha Ti, is an avant-garde exploration of art, dance, and technology, consisting of 400 works. It is divided into three acts that integrate code, choreography, blockchain, generative art, cryptography, and performance into a single conceptual journey: the slow recovery of the human. The project brings corporeality and vulnerability into digital art, animating code and human movement data.";

  textFont(styles.body1.fontObj);
  textSize(styles.body1.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(bodyText, 1125, 1756, 1248, 281);
  image(process, 1422,3776);
  
  
  
  let bodyText2 = "The creation of the project involved 25 people — from specialized engineers to dancers — who participated in a nine-month-long process of developing the collection. To create works for Human Unreadable, Catherine and Ti first developed unique choreographies and combined them with portrait photographs of the duo, X-ray shading, generative glass objects, and other elements, creating a new method of on-chain generative choreography. In this way, Operator makes visible what is usually hidden in the digital world — human movement and emotion.\n\n At the start, Catherine created a library of movements — discrete moments of human expression that became the foundation for generative sequences. She conducted rehearsals with dancers in four cities, encouraging them to move with different emotions to introduce human vulnerability and chaos into the on-chain art.";
  
  textFont(styles.body1.fontObj);
  textSize(styles.body1.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(bodyText2, 173, 3869, 963, 682);
  
  let processText = '//PROCESS'
  textFont(styles.H2.fontObj);
  textSize(styles.H2.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(processText, 173, 3778, 215, 60);
  
  let actstart = "The project unfolds in three acts:";
  textFont(styles.body1.fontObj);
  textSize(styles.body1.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(actstart, 1300, 4720, 660, 67);
  
  let act1 = '//Act One\n Reveal on Art Blocks ( ):'
  textFont(styles.H2.fontObj);
  textSize(styles.H2.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(act1, 1300, 4810, 560, 127);
  
  let act1body = "{ In the initial showing, the human is still “unreadable,” visible only through the results of movement on glass, masked by code and presented as a static image. Collectors mint the works on Art Blocks. Each piece represents a unique combination of choreography, generative glass, and “X-ray” shader. Even though created by code, the work retains the soul and movement of the human. The first act took place as an auction on May 24, 2023, from 1:00 PM to 1:59 PM Eastern Time, and the collection of 400 works was sold. }";
  textFont(styles.body1.fontObj);
  textSize(styles.body1.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(act1body, 1300, 4957, 1025, 324);
  
  image(acts, 173 ,4781);
  
  let act2 = '//Act Two \n Uncover Choreographic Score ( ):'
  textFont(styles.H2.fontObj);
  textSize(styles.H2.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(act2, 1300, 5362, 560, 127);
  
    let act2body = "{ Choreographic scores became available for creation and revelation starting November 24, 2023, on Operator’s website. Collectors could unlock a secondary token, representing the on-chain choreographic script, and see the underlying choreography. Each of the 400 visual outcomes is governed by the movement data of 400 unique choreographic sequences. The Art Blocks NFT and the secondary token remain permanently linked. If the owner chooses not to reveal the score, the next collector may do so. }";
  textFont(styles.body1.fontObj);
  textSize(styles.body1.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(act2body, 1300, 5518, 1025, 324);
  
  let act3 = '//Act ThreePerformanCE ( ):'
  textFont(styles.H2.fontObj);
  textSize(styles.H2.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(act3, 1300, 5923, 560, 127);
  
  let act3body = "{ { The first 100 works (mint #2–101) will come alive in a live performance. Digital movements are translated into physical dance, allowing the audience to witness the slow recovery of the human in a technological world. The performance has been postponed for unknown reasons until autumn 2026. } \n\n The outcome of the project is an invitation, a transparent layer through which human experience can focus after its manifestation. This project is a bridge between data and body, code and movement, NFT and live performance. It demonstrates that even within lines of code, the human, unpredictable, and unique can be preserved. Human Unreadable was awarded the Experiential Award at the Digital Art Awards in 2023. }";
  textFont(styles.body1.fontObj);
  textSize(styles.body1.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(act3body, 1300, 6070, 1025, 505);
  
  let rec = '//resources:'
  textFont(styles.H3.fontObj);
  textSize(styles.H3.size);
  fill(255);
  textAlign(LEFT, TOP);
  text(rec, 173, 6760, 560, 127);
  
  
  pop();


  if (mouseY > sliderTop && mouseY < sliderBottom) {
    hoverDirection = (mouseX < width / 2) ? -1 : 1;
  } else {
    hoverDirection = 0;
  }

  let moveSpeed = 5;
  xOffset += moveSpeed * hoverDirection;

  // обмеження
  if (xOffset > 0) xOffset = 0;
  let maxOffset = - (slideWidth + gap) * (slides.length - 3);
  if (xOffset < maxOffset) xOffset = maxOffset;

  // малюємо слайди
  for (let i = 0; i < slides.length; i++) {
    if (slides[i]) {
      image(slides[i], xOffset + i * (slideWidth + gap), sliderTop, slideWidth, sliderBottom - sliderTop);
    }
  }
  
}

