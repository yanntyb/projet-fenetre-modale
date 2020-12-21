let global = document.getElementById("global");

let fenetreModal = function(hauteur,largeur,couleurArriere,couleurDevant,titre,text,couleurTxt,couleurButton){
    this.hauteur = hauteur;
    this.largeur = largeur;
    this.couleurArriere = couleurArriere;
    this.couleurDevant = couleurDevant;
    this.titre = titre;
    this.text = text;
    this.couleurTxt = couleurTxt;
    this.couleurButton = couleurButton;
}

fenetreModal.prototype.afficher = function (){
    let globalDiv = document.createElement("div");
    globalDiv.style.position = "absolute";
    globalDiv.style.top = "0"
    globalDiv.style.width = "100vw";
    globalDiv.style.height = "100vh";
    globalDiv.style.backgroundColor = "RGBA(0,0,0,0.51)";

    let newDiv = document.createElement("div");
    newDiv.style.width = this.largeur + "px";
    newDiv.style.height = this.hauteur + "px";
    newDiv.style.border = "1px solid black";
    newDiv.style.position = "absolute";
    newDiv.style.left = ("calc(50vw - " + (this.largeur / 2) + "px)").toString();
    newDiv.style.top = ("calc(50vh - " + (this.hauteur / 2) + "px)").toString();

    let divTitre = document.createElement("div");
    divTitre.style.width = "100%";
    divTitre.style.height = "25%";
    divTitre.style.padding = "3%";
    divTitre.style.borderBottom = "1px solid black";
    divTitre.style.backgroundColor = this.couleurDevant;
    divTitre.innerHTML = "<h1>" + this.titre + "<h1>";

    let close = document.createElement("div");
    close.innerHTML = "<i class=\'fas fa-times\'></i>";
    close.style.position = "absolute";
    close.style.right = "10%";
    close.style.top = "5%";
    close.style.fontSize = "2rem";
    close.addEventListener("click",function(){
        console.log("click");
        global.removeChild(newDiv);
    })

    let information = document.createElement("div");
    information.innerHTML = this.text;
    information.style.height = "50%";
    information.style.fontSize = "1.6rem"
    information.style.padding = "2%";
    information.style.backgroundColor = this.couleurTxt;
    information.style.borderBottom = "1px solid black";

    let coche = document.createElement("input");
    coche.type = "checkbox";
    coche.style.transform = "scale(1.5)";
    coche.style.marginLeft = "0.5%";

    let infoBottom = document.createElement("div");
    infoBottom.style.position = "relative";
    infoBottom.style.bottom = "0";
    infoBottom.style.width = "100%"
    infoBottom.style.height = "25%"
    infoBottom.style.backgroundColor = this.couleurDevant

    let button = document.createElement("button");
    button.style.position = "absolute"
    button.innerHTML = "OK"
    button.style.display = "flex";
    button.style.flexDirection = "row";
    button.style.alignItems = "center";
    button.style.justifyContent = "center"
    button.style.width = "20%";
    button.style.height = "50%";
    button.style.top = "20%";
    button.style.left = "5%";
    button.style.backgroundColor = this.couleurButton;
    button.style.border = "none"
    button.addEventListener("click",function(){
        globalDiv.removeChild(newDiv);
        global.removeChild(globalDiv);
    })

    let cancel = document.createElement("div");
    cancel.innerHTML = "CANCEL";
    cancel.style.fontSize = "1.6rem"
    cancel.style.position = "absolute";
    cancel.style.right = "5%";
    cancel.style.top = "20%"
    cancel.style.color = "yellow";
    cancel.addEventListener("click",function(){
        globalDiv.removeChild(newDiv);
        global.removeChild(globalDiv);
    })


    infoBottom.appendChild(button);
    infoBottom.appendChild(cancel);
    information.appendChild(coche);
    divTitre.appendChild(close);

    for(let child of newDiv.children){
        child.style.zIndex = "2"
    }

    newDiv.appendChild(divTitre);
    newDiv.appendChild(information);
    newDiv.appendChild(infoBottom);
    globalDiv.appendChild(newDiv);
    newDiv.style.zIndex = "1";
    global.appendChild(globalDiv);
}

