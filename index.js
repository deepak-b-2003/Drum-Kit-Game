var k = document.querySelectorAll("button").length;
var i;
for (i = 0; i < k; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    animation(this.innerHTML)
  });
}
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  switch (key) {
    case 'w':
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;
    case 'a':
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    case 's':
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;
    case 'd':
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;
    case 'j':
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case 'k':
      var a = new Audio("sounds/tom-3.mp3");
      a.play();
      break;
    case 'l':
      var a = new Audio("sounds/tom-4.mp3");
      a.play();
      break;
  }
}

function animation(key) {
  var activebutton = document.querySelector("." + key);
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}