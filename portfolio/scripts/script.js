

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


var txt = "About";
var i = 0;
function typeWriter() {
  if (i < txt.length) {
      document.getElementById("abt").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    }
  else{
    i = 0;
    setTimeout(reset, 3000);
    
}

function reset(){
  document.getElementById("abt").innerHTML = "";
  }
}
setInterval(typeWriter,6000);

var count = 0;
var prev = 0;
function slideshow(){
  var slides = document.getElementsByClassName("slides");
      slides[prev].style.display = "none";
      slides[count].style.display = "block";
      prev = count;
      count++;
      if(prev == 3){count = 0;}
}


function changePage(id){
  var arr = ['home','skills','projects','contact','design'];
  for(var i = 0; i < arr.length;i++){
    if(arr[i]!==id) document.getElementById(arr[i]).style.display = "none";
  }
  document.getElementById(id).style.display = "block";
  

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}