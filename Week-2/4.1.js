/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */

      class Book
      {
        title;
      author;
      pages;
      isAvailable=true;
      constructor(title,author,pages)
      {
        this.title=title;
        this.author=author;
        this.pages=pages;
      }
        borrow(isAvailable)
        {
          this.isAvailable=false;
        }
        returnBook(isAvailable)
        {
            this.isAvailable=true;
        }
        getInfo()
        {
            return "The Book "+this.title+" by "+this.author+" has ("+this.pages+") pages";
        }
        isLongBook()
        {
            if(this.pages>300)
                return true;
            else
                return false;
        }
      }
      b1=new Book("DeepWork","Napoleon",350)
      b2=new Book("Work","mike",250)
      b3=new Book("Mindset","Carl",320)
      b4=new Book("HereThere","Sudha",450)
      b5=new Book("Power","Robert",400)
      console.log(b1.getInfo());
      console.log(b2.getInfo());
      console.log(b3.getInfo());
      console.log(b4.getInfo());
      console.log(b5.getInfo());
      b1.borrow()
      b2.borrow();
      console.log(b1.isAvailable);
      console.log(b2.isAvailable);
      b1.returnBook()
      console.log(b1.isAvailable);
      let count=0;
      if(b1.isLongBook())
        count+=1;
    if(b2.isLongBook())
        count+=1;
    if(b3.isLongBook())
        count+=1;
    if(b4.isLongBook())
        count+=1;
    if(b5.isLongBook())
        count+=1;
    console.log(`No.of Long books:${count}`);
    if(b1.isAvailable)
    {
        b1.getInfo();
    }

    
