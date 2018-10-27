let elmt1 = document.getElementById('square-1');
let elmt2 = document.getElementById('square-2');
let elmt3 = document.getElementById('square-3');
let elmt4 = document.getElementById('square-4');
let elmt5 = document.getElementById('square-5');
let elmt6 = document.getElementById('square-6');
let elmt7 = document.getElementById('square-7');
let elmt8 = document.getElementById('square-8');
let elmt9 = document.getElementById('square-9');
let elmt10 = document.getElementById('square-10');
let elmt11 = document.getElementById('square-11');
let elmt12 = document.getElementById('square-12');
let elmt13 = document.getElementById('square-13');
let elmt14 = document.getElementById('square-14');
let elmt15 = document.getElementById('square-15');
let elmt16 = document.getElementById('square-16');
elmt1.addEventListener("click", changeColor, false);
elmt2.addEventListener("click", changeColor, false);
elmt3.addEventListener("click", changeColor, false);
elmt4.addEventListener("click", changeColor, false);
elmt5.addEventListener("click", changeColor, false);
elmt6.addEventListener("click", changeColor, false);
elmt7.addEventListener("click", changeColor, false);
elmt8.addEventListener("click", changeColor, false);
elmt9.addEventListener("click", changeColor, false);
elmt10.addEventListener("click", changeColor, false);
elmt11.addEventListener("click", changeColor, false);
elmt12.addEventListener("click", changeColor, false);
elmt13.addEventListener("click", changeColor, false);
elmt14.addEventListener("click", changeColor, false);
elmt15.addEventListener("click", changeColor, false);
elmt16.addEventListener("click", changeColor, false);


function changeColor() {
  if (this.classList.contains("white")) {
    this.classList.remove("white")
    this.classList.add("blue")
  } else if (this.classList.contains("blue")) {
    this.classList.remove("blue")
    this.classList.add("red")
  } else if (this.classList.contains("red")) {
    this.classList.remove("red")
    this.classList.add("yellow")
  } else if (this.classList.contains("yellow")) {
    this.classList.remove("yellow");
    this.classList.add("white");
  }
}
