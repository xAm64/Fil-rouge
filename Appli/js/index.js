//générer des articles
let allArticles = [];

allArticles.push(new Article(1, "Article A", "Mon super article A", "C'est l'article de ta vie!.", 3.95));
allArticles.push(new Article(2, "Article B", "Mon hyper article B", "C'est un objet incroyable!", 9.90));
allArticles.push(new Article(3, "Article C", "L'extraordinaire C", "Un objet de fou", 29.90));
allArticles.push(new Article(4, "Article D", "Le surréaliste D", "L'extraordinaire de l'incroyable de...", 79.90));
allArticles.push(new Article(5, "Article E", "L'indispensable E", "un objet de tous les jours", 49.90));
allArticles.push(new Article(6, "Article F", "Frénétique F", "achète le!", 39.90));

//afficher les articles
let seeAllArticles = "";
for (let i=0; i<allArticles.length;i++){
    seeAllArticles += '<div class="col-3" style="height:300px">'+
        '<h2>'+ allArticles[i].title +'</h2>'+
        '<h4>'+ allArticles[i].shortDescription +'</h4>'+
        allArticles[i].largeDescription+
        '<div class="row">'+
            '<div class="col-8">'+
                'Prix: '+ allArticles[i].price+
            '</div>'+
            '<div class="col-4">'+
                '<button type="button" class="btn btn-primary"><img src="images/addBasket.png" alt="ajouter au panier" class="img-fluid" onclick="addToPanier('+ allArticles[i].id +');"></button>'+
            '</div>'+
        '</div>'+
    '</div>\n';
}
document.getElementById("allArticles").innerHTML = seeAllArticles;