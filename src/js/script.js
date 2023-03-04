// Récupère la modale
const modal = document.getElementById('modal');

// Récupère le bouton qui ouvre la modale
const button = document.getElementById('button');

// Récupère l'élément <span> qui ferme la modale
const span = document.getElementsByClassName('close')[0];

// Lorsque l'utilisateur clique sur le bouton, la modale s'ouvre
button.onclick = function() {
    modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur <span> (x), la modale se ferme
span.onclick = function() {
    modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de la modale, elle se ferme
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}