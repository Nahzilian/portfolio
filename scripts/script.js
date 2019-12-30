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

var arr = [1,2,3,4];


function changeDisplay(id){
    if(id == "lay1"){
        document.getElementById("lay2").style.display = "none";
        document.getElementById("lay3").style.display = "none";
        document.getElementById("lay4").style.display = "none";
        document.getElementById("lay1").style.display = "block";
    }
    else if(id == "lay2"){
        document.getElementById("lay1").style.display = "none";
        document.getElementById("lay3").style.display = "none";
        document.getElementById("lay4").style.display = "none";
        document.getElementById("lay2").style.display = "block";
    } else if(id == "lay3"){
        document.getElementById("lay1").style.display = "none";
        document.getElementById("lay2").style.display = "none";
        document.getElementById("lay4").style.display = "none";
        document.getElementById("lay3").style.display = "block";
    }    else if(id == "lay4"){
        document.getElementById("lay1").style.display = "none";
        document.getElementById("lay2").style.display = "none";
        document.getElementById("lay3").style.display = "none";
        document.getElementById("lay4").style.display = "block";
    }

}

