function randomColor(){
    var s= "ABCDEF0123456789", color = "#";

    while(color.length < 7){
        color += s.charAt(Math.floor((Math.random()*16)+1));
    }
    return color;
}
let ol=document.getElementById("hi");
ol.addEventListener('click',(e)=>{
    e.target.style.color= randomColor();
},false)