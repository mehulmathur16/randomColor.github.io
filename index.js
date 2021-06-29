
function color(){

    var arr = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "a" , "b" , "c" , "d" , "e" , "f"];

    var hex = "#";

    for(var i = 0 ; i < 6 ; i++){
        
        var r = Math.floor(Math.random() * arr.length);

        hex += arr[r]; 
    }

    document.getElementById("h").innerHTML = "Background Color : " + "";

    const para = document.createElement("SPAN");
    const node = document.createTextNode(hex);
    para.appendChild(node);
    para.style.color = "#639cff";
    document.getElementById("h").appendChild(para);

    document.getElementById("main").style.backgroundColor = hex;
}