
myApp.controller('viewController',['$http','$routeParams','bookService',function($http,$routeParams,bookService) {

  //create a context
  var main = this;
  this.book=[];
  this.house=[];
  this.character=[];
  this.book_name=[];
  this.BookName=[];
  this.curName=""
  this.overName=""

  this.url1=$routeParams.url1;//this will get the first part of url i.e, book
  this.url2 =$routeParams.url2;//this will get 2nd part of url i.e, 2
  
this.loadSingeBlog = function(){
  if  (this.url1 == 'books')
{   
   bookService.viewBooks(this.url1,this.url2)
      .then(function successCallback(response) {
        
        //Setting Background color in case a user clicks on a book
        main.obj1 = {
        "color" : "#008080",
        "background-color" : "#E0FFFF"
                 } 
      
          //storing book information  
          main.book=response.data
          console.log(main.book.name)
          //this.book_name=book.name

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

}
else 
{
    if (this.url1 == 'houses')
    {
      bookService.viewHouses(this.url1,this.url2)
      .then(function successCallback(response) {
          
          //Setting Background color in case a user clicks on a house
    main.obj2 = {
        "color" : "green",
        "background-color" : "black"
                 } 
          main.house=response.data
  
          main.cur=main.house.currentLord
          main.over=main.house.overlord


       if (main.cur!='')
       {  //Calling character api to find current lord
          bookService.viewchar(main.cur)
          .then(function successCallback(response) {
                   main.curName=response.data.name
          });
}
        if(main.over!='')
        { //Calling  house  api to find over lord house
           bookService.viewhouse(main.over)
          .then(function successCallback(response) {
                   main.overName=response.data.name
          });
}
          main.house=response.data
          console.log(main.house)

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    }
    else
    {
        bookService.viewCharacters(this.url1,this.url2)
      .then(function successCallback(response) {
      
        //Setting Background color in case a user clicks on a character
         main.obj3 = {
        "color" : "black",
        "background-color" : "coral"
                 } 
          
          main.character=response.data
          //finding book count for a character
          main.BooksCount=(response.data.books).length;
          for (i in response.data.books)
          {//calling book api service to find the book where character was used
            main.book_url=response.data.books[i]
            bookService.viewbook(main.book_url)
             .then(function successCallback(response) {
                   (main.BookName).push(response.data.name +"     ")
                   
          });

          }
          console.log(main.BookName)
          console.log(main.character)

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

    }
}


  }// end load all blogs

}]); // end controller

