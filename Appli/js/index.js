//générer des articles
let articles = [];
articles.push(new Article(1, "Souris", "Logitech", "Sourie 2 boutons + molette", 7.95, "Matériel"));
articles.push(new Article(2, "Clavier", "Logitech", "Clavier azerty 105 touches", 9.90, "Matériel"));
articles.push(new Article(3, "Souris gaucher", "Ergotech", "Une sourie ergonomique adapté aux gauchers", 29.90, "Ergonomie"));
articles.push(new Article(4, "Casque gamer", "Asus", "Casque gaming avec effets serround", 79.90, "Gaming"));
articles.push(new Article(5, "Casque bluetooth", "Exodar", "Débarassez-vous de tous les fils avec ce casque", 49.90, "Son"));
articles.push(new Article(6, "Enseinte bluetooth", "AudioX", "Emmenez cette enseinte partout grace a son autonomie de 12h", 39.90, "Son"));
articles.push(new Article(7, "Écran 16:9 1080p", "Llama", "Écran 1920×1080 en 16:9 pour tout usages", 99.90, "Image"));
articles.push(new Article(8, "Écran gaming 21:9", "MSI", "Écran gaming 21:9 2560×1080 200Hz spécial jeux", 359.90, "Gaming"));
articles.push(new Article(9, "Clavier rétroéclairé", "Razer", "Clavier RVB avec touches indépendantes, avec macro", 169.90, "Gaming"));
//tri les articles et les met dans des catégories
articles.forEach((ar) => {
    addArticleToCategory(ar);
});

//afficher les articles
function displayAllArticles() {
    let seeAllArticles = "";
    for (let i = 0; i < articles.length; i++) {
        seeAllArticles += '<div class="col-3" style="height:300px">' +
            '<h2>' + articles[i].title + '</h2>' +
            '<h4>' + articles[i].brand + '</h4>' +
            articles[i].largeDescription +
            '<div class="row">' +
            '<div class="col-8">' +
            'Prix: ' + articles[i].price +
            '</div>' +
            '<div class="col-4">' +
            '<button type="button" class="btn btn-primary"><img src="images/addBasket.png" alt="ajouter au panier" class="img-fluid" onclick="addToPanier(' + articles[i].id + ');"></button>' +
            '</div>' +
            '</div>' +
            '</div>\n';
    }
    document.getElementById("allArticles").innerHTML = seeAllArticles;
}

//affiche les catégories
function displayAllCategory() {
    let seeAllCategory = "<a href='#' onclick='displayAllArticles();'><li class='list-group-item'>Catégories</li>";
    category.forEach((ct) => {
        seeAllCategory += "<a href='#' onclick='seeArticlesOneCategory("+ ct.id +");'><li class='list-group-item'>" + ct.nom + "</li></a>";
    });
    document.getElementById("categories").innerHTML = seeAllCategory;
}


//Recherche une catégorie et dis si existe, si existe renvoie son id.
function foundCategory(name) {
    let catId = 0;
    category.forEach((ct) => {
        if (ct.nom == name) {
            catId = ct.id;
        }
    });
    return catId;
}

//affiche uniquement les articles de X catégorie.
function seeArticlesOneCategory(id){
    let seeAllArticles = "";
    category.forEach((ct) => {
        if (ct.id == id){
            ct.Articles.forEach((ar) =>{
                seeAllArticles += 
                '<div class="col-3" style="height:300px">' +
                    '<h2>' + ar.title + '</h2>' +
                    '<h4>' + ar.brand + '</h4>' +
                    ar.largeDescription +
                '<div class="row">' +
                '<div class="col-8">' +
                'Prix: ' + ar.price +
                '</div>' +
                '<div class="col-4">' +
                '<button type="button" class="btn btn-primary"><img src="images/addBasket.png" alt="ajouter au panier" class="img-fluid" onclick="addToPanier(' + ar.id + ');"></button>' +
                '</div>' +
                '</div>' +
                '</div>\n';
            });
        }
        document.getElementById("allArticles").innerHTML = seeAllArticles;
    });
}

//Ajoute un article à une catégorie, si elle n'existe pas la créer
function addArticleToCategory(Article) {
    let idCat = foundCategory(Article.category);
    if (idCat > 0) {
        category.forEach((ct) => {
            if (ct.id == idCat) {
                ct.Articles.push(Article);
            }
        });
    } else {
        let newCategory = new Category(idCategory, Article.category);
        newCategory.addArticle(Article);
        category.push(newCategory);
        idCategory++;
    }
}

//charge tout les éléments
function loadAllElements(){
    displayAllArticles();
    displayAllCategory();

}