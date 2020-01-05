function swap(id){
    var idname = ["home","projects","about","contact"];
    for(var i = 0; i < idname.length; i++){
        if(idname[i] == id){
            document.getElementById(id).style.display = "block";
            document.getElementById(id).style.transition = "display 2s";
            console.log("displaying:");
            console.log(id);
        }
        
        else{
            document.getElementById(idname[i]).style.display = "none";
            console.log("not displaying:");
            console.log(idname[i]);
        }

    }
}