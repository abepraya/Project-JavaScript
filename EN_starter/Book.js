export class Book {
    constructor(title,author,description,pages,currentPage,read=false){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage;
    this.read = read;
    }
    readBook(page,pages){
        if (page < 1 || page > pages){
        return 0;
        }else if (page >= 1 && page < pages){
        this.currentPage=page;
        return 1; 
        }else if(page === pages){
        this.currentPage=pages;
        this.read = true; 
        return 1;
        }else{
            console.log('Error');
        }
    }
}

let firstBook = new Book ('Milkyway','Don John','nothing is impossible',115);
let secondBook= new Book ('Rest In Peace','Ray Orton','You cant run from tragedy',110);
let thirdBook = new Book ('Afterlife','Dino Agus Trivila','Dunia setelah kematian yang nyata',225);

export const books = [firstBook,secondBook,thirdBook];
