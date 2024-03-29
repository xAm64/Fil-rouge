// #### Articles ####
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
articles.forEach((artcl) => {
    addArticleToCategory(artcl);
});

//afficher les articles
function displayAllArticles() {
    let seeAllArticles = "";
    for (let i = 0; i < articles.length; i++) {
        seeAllArticles += 
        '<div class="col-md-3" style="height:300px">' +
            '<table class="table table-striped">' +
                '<tr>'+
                    '<th colspan="2" class="text-primary">'+ articles[i].getTitle() +'</th>'+
                '</tr>'+
                '<tr>'+
                    '<td colspan="2" class="text-secondary">'+ articles[i].getBrand() +'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td colspan="2">'+ articles[i].getDescription() +'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Prix: ' + articles[i].price +'</td>'+
                    '<td><button type="button" class="btn btn-primary"><img src="images/addBasket.png" alt="ajouter au panier" class="img-fluid" onclick="addToPanier(' + articles[i].getId() + ');"></button></td>' +
                '</tr>' +
            '</table>'+
        '</div>\n';
    }
    document.getElementById("allArticles").innerHTML = seeAllArticles;
}
//Recherche une catégorie et dis si existe, si existe renvoie son id.
function foundCategory(name) {
    let catId = 0;
    category.forEach((ctgr) => {
        if (ctgr.nom == name) {
            catId = ctgr.id;
        }
    });
    return catId;
}
//Ajoute un article à une catégorie, si elle n'existe pas la créer
function addArticleToCategory(Article) {
    let idCat = foundCategory(Article.category);
    if (idCat > 0) {
        category.forEach((ctgr) => {
            if (ctgr.id == idCat) {
                ctgr.Articles.push(Article);
            }
        });
    } else {
        let newCategory = new Category(idCategory, Article.category);
        newCategory.addArticle(Article);
        category.push(newCategory);
        idCategory++;
    }
}
//catégories
//affiche les catégories
function displayAllCategory() {
    let seeAllCategory = "<a href='#' class='link-primary' onclick='displayAllArticles();'><li class='list-group-item text-primary'>Catégories</li>";
    category.forEach((ctgr) => {
        seeAllCategory += "<a href='#' class='link-secondary' onclick='seeArticlesOneCategory("+ ctgr.getId() +");'><li class='list-group-item'>" + ctgr.getNom() + "</li></a>";
    });
    document.getElementById("categories").innerHTML = seeAllCategory;
}
//affiche uniquement les articles de X catégorie.
function seeArticlesOneCategory(categoryId){
    let seeAllArticles = "";
    category.forEach((ctgr) => {
        if (ctgr.id == categoryId){
            ctgr.Articles.forEach((artcl) =>{
                seeAllArticles += 
                '<div class="col-3" style="height:300px">' +
                    '<h2>' + artcl.title + '</h2>' +
                    '<h4>' + artcl.brand + '</h4>' +
                    artcl.largeDescription +
                '<div class="row">' +
                '<div class="col-8">' +
                'Prix: ' + artcl.price +
                '</div>' +
                '<div class="col-4">' +
                '<button type="button" class="btn btn-primary"><img src="images/addBasket.png" alt="ajouter au panier" class="img-fluid" onclick="addToPanier(' + artcl.id + ');"></button>' +
                '</div>' +
                '</div>' +
                '</div>\n';
            });
        }
        document.getElementById("allArticles").innerHTML = seeAllArticles;
    });
}

//charge tout les éléments (HTML ligne 86)
function loadAllElements(){
    displayAllArticles();
    displayAllCategory();
}