//ajouter un article au panier
function addToPanier(idArticle){
    articles.forEach((elements) => {
        if (idArticle == elements.id){
            panier.push(new Panier (elements));
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
        panier.forEach((ctgr) => {
            htmlBasket +=
        '<tr>'+
            '<td class="text-primary">'+ctgr.Article.getTitle()+'</td>'+
            '<td class="text-secondary">'+ctgr.Article.getBrand()+'</td>'+
        '</tr><tr>'+
            '<td>Nombre:</td>'+
            '<td><input type="number" class="form-control" min="0" id="panQt'+ctgr.getId()+'" placeholder="'+ctgr.getQuantity()+'"></td>'+
        '</tr><tr>'+
                '<td class="text-dark">Prix: '+ctgr.Article.getPrice()+ '€</td>'+
                '<td>Sous-total: <span id="panTt'+ctgr.getId()+'">'+ctgr.Article.getPrice()+'</span>€</td>'+
        '</tr style="border-bottom:1px solid grey">';
        });
        input.addEventListener('change', updatePrice());
        document.getElementById("seeBasket").innerHTML = htmlBasket;
    }
    
    //calcul prix total
function updatePrice(){
    let total = 0;
    panier.forEach((pan) => {
        total += pan.Article.getPrice() * pan.getQuantity();
    });
    total = total.toFixed(2);
    document.getElementById('totalPrice').innerText = total;
}

const input = document.querySelector("input");