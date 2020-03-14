export class Book {
    constructor(title,author,description,page,currentPage,read){
    this.title = title;
    this.author = author;
    this.description = description;
    this.page = [];
    this.currentPage = 0;
    this.read = false;
    }
    readBook(page){
        this.pages.push(page);
        let sum = 0;
        for (let page of this.pages){
            sum += page;
        }
        if (page < 1 || page > pages.length){
        return 0;
        }else if (page >= 1 && page <pages.length){
        readBook += currentPage; 
        }else if(page === pages.length){
        readBook = currentPage;
        read = true; 
        }else{
            console.log('Error');
        }
    }
}

let firstBook = new Book ('Milkyway','Don John','nothing is impossible',115,115);
let secondBook= new Book ('Rest In Peace','Ray Orton','You cant run from tragedy',110,60);
let thirdBook = new Book ('Afterlife','Dino Agus Trivila','Dunia setelah kematian yang nyata',225,200);

export const books = [firstBook,secondBook,thirdBook];
