let input = document.getElementsByTagName("input");
let button = document.getElementById("gene");

button.addEventListener("click", function(){
    let checkInputTab = []
    for(let i of input){
        if(i.value.length > 0){
            checkInputTab.push(1);
        }
    }
    if(checkInputTab.length === input.length){
        let maFenetre = new fenetreModal(
            input[0].value,
            input[1].value,
            input[2].value,
            input[3].value,
            input[4].value,
            input[5].value,
            input[6].value,
            input[7].value
        );
        maFenetre.afficher()
    }
})