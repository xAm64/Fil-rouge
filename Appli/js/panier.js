var panier = [];
//ajouter un article au panier
function addToPanier(id){
    allArticles.forEach((el) => {
        if (id == el.id){
            panier.push(new Article (el.id, el.title, el.shortDescription, el.largeDescription, el.price));
        }
    });
    document.getElementById("numberArticles").innerText = panier.length;
}
//voir le panier
function lookBasket(){
    let htmlBasket = '<ul class="list-group">'+
        '<li class="list-group-item disabled">Panier</li>';
    for (let i=0;i<panier.length;i++){
        htmlBasket += '<li class="list-group-item">'+
            panier[i].title + '. Nombre: <input type="number" min="0" id="qt'+i+'" placeholder="1"> × '+panier[i].price+
        '</li>';
    }
    htmlBasket += '</ul>';
    document.getElementById("seeBasket").innerHTML = htmlBasket;
}

function calcul(id, price){
    return document.getElementById(id).value * price;
}