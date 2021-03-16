// 13
function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width>=100) {
      clearInterval(id);
    }
    else{
      width++;
      elem.style.width = width +'%';
      document.getElementById("label").innerHTML = width*1 +'%'; 
    }
  }
}


// 14
function myFunction() {
  var popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
}

// 15
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++){
  acc[i].onclick = function () {
    this.classList.toggle("active");

    this.nextElementSibling.classList.toggle("show");
  }
}


// 16
function moneyConvertor(valNum) {
  document.getElementById("outputrub").innerHTML=valNum*60;

}