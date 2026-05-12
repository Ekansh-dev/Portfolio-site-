// IMAGE PARALLAX EFFECT

const image = document.querySelector(".image-section img");

document.addEventListener("mousemove", (e) => {

  let x = (window.innerWidth / 2 - e.pageX) / 35;
  let y = (window.innerHeight / 2 - e.pageY) / 35;

  image.style.transform =
    `translate(${x}px, ${y}px) scale(1.03)`;

});



let floatY = 0;
let direction = 1;

function floatingAnimation(){

  floatY += 0.2 * direction;

  if(floatY > 15){
    direction = -1;
  }

  if(floatY < -15){
    direction = 1;
  }

  image.style.marginTop = `${floatY}px`;

  requestAnimationFrame(floatingAnimation);
}

floatingAnimation();


// TYPING EFFECT

const textArray = [
  "Frontend Developer",
  "JavaScript Developer",
  "Python  Developer"
];

const typingElement = document.querySelector(".typing");

let arrayIndex = 0;
let charIndex = 0;

function type(){

  if(charIndex < textArray[arrayIndex].length){

    typingElement.innerHTML +=
      textArray[arrayIndex].charAt(charIndex);

    charIndex++;

    setTimeout(type, 100);

  }

  else{

    setTimeout(erase, 1500);

  }

}

function erase(){

  if(charIndex > 0){

    typingElement.innerHTML =
      textArray[arrayIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(erase, 50);

  }

  else{

    arrayIndex++;

    if(arrayIndex >= textArray.length){
      arrayIndex = 0;
    }

    setTimeout(type, 300);

  }

}

type();


// SCROLL REVEAL ANIMATION

const sections =
  document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

  sections.forEach((section)=>{

    const sectionTop =
      section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

      section.classList.add("show");

    }

  });

});


// NAVBAR BACKGROUND ON SCROLL

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

  if(window.scrollY > 50){

    nav.style.background =
      "rgba(0,0,0,0.8)";

    nav.style.backdropFilter =
      "blur(10px)";

  }

  else{

    nav.style.background =
      "transparent";

  }

});


// BUTTON GLOW EFFECT

const buttons =
  document.querySelectorAll("button");

buttons.forEach((button)=>{

  button.addEventListener("mouseenter", ()=>{

    button.style.boxShadow =
      "0 0 25px #8b5cf6";

  });

  button.addEventListener("mouseleave", ()=>{

    button.style.boxShadow =
      "none";

  });

});


// CUSTOM CURSOR GLOW

const cursor = document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});