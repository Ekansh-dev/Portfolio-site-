const image = document.querySelector(".image-section img");

document.addEventListener("mousemove", (e)=>{

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  image.style.transform =
    `translate(${x}px, ${y}px)`;

});