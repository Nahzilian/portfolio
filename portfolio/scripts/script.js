
function swap(id){
    var idname = ["home","projects","about","contact"];
    for(var i = 0; i < idname.length; i++){
        if(idname[i] == id){
            document.getElementById(id).style.display = "block";
        }
        
        else{
            document.getElementById(idname[i]).style.display = "none";
        }

    }
}

var c1 = new Checkdiv(true)
var c2 = new Checkdiv(false)
var c3 = new Checkdiv(false)


function openDiv(id){
    var idname = ["c1","c2","c3"];
    for(var i = 0; i < idname.length; i++){
        if(idname[i] == id){
                document.getElementById(id).style.display = "block";
        }else{
            document.getElementById(idname[i]).style.display = "none";
        }
    }
}


