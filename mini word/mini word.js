let texte=document.getElementById('texte');
let colorPicker=document.getElementById("couleur");
let sizePicker=document.getElementById("taille");
let fontPicker=document.getElementById("fonts");

colorPicker.addEventListener('change',()=>{
    let Couleur=document.getElementById("couleur").value;
    texte.style.color=Couleur;
},false)

sizePicker.addEventListener('input',()=>{
    let Taille=document.getElementById("taille").value;
    texte.style.fontSize=Taille+"px";
})

fontPicker.addEventListener('change',()=>{
    let Font=document.querySelector('#fonts').value;
    console.log(Font);
    texte.style['font-family']=Font;
})

