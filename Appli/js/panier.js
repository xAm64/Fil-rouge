let panier = [];

function addToPanier(id){
    panier.push(id);
    document.getElementById("numberArticles").innerText = panier.length;
}