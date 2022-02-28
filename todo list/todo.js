let  btn=document.getElementById("button");
let i=1;
btn.addEventListener("click",()=>{
    let bigBox=document.getElementById("liste")
    let nom=document.getElementById("nom").value;
    nom=nom.trim();
    let task=document.getElementById("task").value;
    task=task.trim();

    if ( (nom!="") && (task!="")) {
        let texte = nom + ": " + task;
        let item = document.createElement("div");
        item.className="rounded p-2 bg-dark text-dark bg-opacity-25";
        item.innerText = texte;
        let trash = document.createElement("img");
        trash.className = "delete "
        trash.id = i+"";
        trash.src="trash-can-icon-28686.png"
        trash.style.width="30px";
        trash.style.float='right';

        item.appendChild(trash);
        bigBox.appendChild(item);
        trash.addEventListener("click",()=>{
            trash.parentNode.parentNode.removeChild(trash.parentNode);

        },false);
        i++;
    }})


