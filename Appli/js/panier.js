//ajouter un article au panier
function addToPanier(id){
    articles.forEach((el) => {
        if (id == el.id){
            panier.push(new Panier (el));
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
        panier.forEach((ct) => {
            htmlBasket +=
        '<tr>'+
            '<td class="text-primary">'+ct.Article.getTitle()+'</td>'+
            '<td class="text-secondary">'+ct.Article.getBrand()+'</td>'+
        '</tr><tr>'+
            '<td>Nombre:</td>'+
            '<td><input type="number" class="form-control" min="0" id="panQt'+ct.getId()+'" placeholder="1" ></td>'+
        '</tr><tr>'+
                '<td class="text-dark">Prix: '+ct.Article.getPrice()+ '€</td>'+
                '<td>Sous-total: <span id="panTt'+ct.getId()+'">'+ct.Article.getPrice()+'</span></td>'+
        '</tr style="border-bottom:1px solid grey">';
        });
    '<button type="button" class="btn btn-primary">Calculer</button>';
    document.getElementById("seeBasket").innerHTML = htmlBasket;
}