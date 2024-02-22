//contient toutes les class
class Article {
    constructor(id, title, brand, largeDescription, price, category){
        this.id = id;
        this.title = title;
        this.brand = brand;
        this.largeDescription = largeDescription;
        this.price = price;
        this.category = category;
    }
}

//catégories
var category = [];
var idCategory = 1;
class Category {
    constructor(id, nom){
        this.id = id;
        this.nom = nom;
        this.Articles = [];
    }

    addArticle(Article){
        this.Articles.push(Article);
    }
}