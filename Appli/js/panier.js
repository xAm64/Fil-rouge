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
    document.getElementById("basket").style.visibility = "visible";
    let htmlBasket = '<ul class="list-group">'+
        '<li class="list-group-item disabled">Panier</li>';
    for (let i=0;i<panier.length;i++){
        htmlBasket += '<li class="list-group-item">'+
            '<div class="form-group">'+
                '<h3 class="text-primary">'+panier[i].title+'</h3> <p class="text-secondary">'+panier[i].shortDescription+'</p>'+
                '<label for="number">Nombre:</label>'+
                '<input type="number" class="form-control" min="0" id="qt'+i+'" placeholder="1">'+
                '<label class="text-dark">Prix: '+panier[i].price+ '€</label>'+
            '</div>'
        '</li>';
    }
    htmlBasket += '</ul>'+
    '<button type="button" class="btn btn-primary">Calculer</button>';
    document.getElementById("seeBasket").innerHTML = htmlBasket;
}

function calcul(id, price){
    return document.getElementById(id).value * price;
}