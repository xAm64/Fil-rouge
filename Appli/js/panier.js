var panier = [];
//ajouter un article au panier
function addToPanier(id){
    articles.forEach((el) => {
        if (id == el.id){
            panier.push(new Article (el.id, el.title, el.brand, el.largeDescription, el.price, el.largeDescription));
        }
    });
    document.getElementById("numberArticles").innerText = panier.length;
}
//voir le panier
function lookBasket(){
    document.getElementById("basket").style.visibility = "visible";
    let htmlBasket =
        '<tr>'+
            '<th>Panier</tr>'+
        '</tr>';
    for (let i=0;i<panier.length;i++){
        htmlBasket +=
        '<tr>'+
            '<td class="text-primary">'+panier[i].getTitle()+'</td><td class="text-secondary">'+panier[i].getBrand()+'</td>'+
        '</tr><tr>'+
            '<td>Nombre:</td><input type="number" class="form-control" min="0" id="qt'+i+'" placeholder="1"></td>'+
        '</tr><tr>'+
                '<td class="text-dark">Prix: '+panier[i].price+ '€</td>'+
        '</tr>';
    }
    '<button type="button" class="btn btn-primary">Calculer</button>';
    document.getElementById("seeBasket").innerHTML = htmlBasket;
}

function calcul(id, price){
    return document.getElementById(id).value * price;
}