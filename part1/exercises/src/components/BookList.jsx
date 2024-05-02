export default function BookList() {
   let pageTitle = "Books I Want To Read!";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684547382i/62919748.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648744814i/60652997.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529845599i/34051011.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <hr />
         <img src={book1} alt="The Will of The Many by James Islington" width="120px" height="200px"/>
         <img src={book2} alt="Hell Bent by Leigh Bardugo" width="120px" height="200px"/>
         <img src={book3} alt="Pachink by Min Jin Lee" width="120px" height="200px"/>
      </div>      
   );
}