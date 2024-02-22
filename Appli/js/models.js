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

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getTitle(){
        return this.title;
    }
    getBrand(){
        return this.brand;
    }
    getDescription(){
        return this.largeDescription;
    }
    getPrice(){
        return this.price;
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

    getId(){
        return this.id;
    }
    getNom(){
        return this.nom;
    }
    getArticles(){
        return this.Articles;
    }
}