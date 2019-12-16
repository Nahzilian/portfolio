function getContent(id){
    var x = document.getElementById(id);

    if(id == "test"){
        var content = x.textContent;
        document.getElementById("rdiv").innerHTML = content;
    }else if(id == "intro"){
        var content = x.textContent;
        document.getElementById("rdiv").innerHTML = content;
    }
    
}

//Make function for each part????