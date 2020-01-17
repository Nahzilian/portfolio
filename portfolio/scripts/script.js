function openDiv(evt, nameDiv) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(nameDiv).style.display = "block";
  evt.currentTarget.className += " active";
}


var txt = "About";
var i = 0;
function typeWriter() {
  if (i < txt.length) {
      document.getElementById("abt").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
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


setInterval(slideshow,3000);