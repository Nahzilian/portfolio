function getContent(id){
    var x = document.getElementById(id);
    var content = x.textContent;
    document.getElementById("rdiv").innerHTML = content;
}

