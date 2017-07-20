
// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', ['ngRoute','ngSanitize']); 

myApp.directive('bookCard',function($filter)
{
    //alert("gg");
    return{
    restrict    :  'E',
    templateUrl : './views/book-card.html',
    //replace     : true,
    scope       :{
      blog1: '='
    },
    controller  : function($scope){
    
    /*  console.log($scope.blog1.url)
      $scope.obj1 = {
        "color" : "green",
        "background-color" : "coral",
    }*/


    if(($filter('Find')($scope.blog1.url))=='BOOK :  ')
      { 
        $scope.obj1 = {
        "color" : "#008080",
        "background-color" : "#E0FFFF"
                 } 
      
            }
      else
      {
         if(($filter('Find')($scope.blog1.url))=='Houses :  ')
         {
               $scope.obj1 = {
                         "color" : "green",
                          "background-color" : "black"
                 }
         }
         else
         {

           $scope.obj1 = {
                         "color" : "black",
                          "background-color" : "coral"
                 }
         }

       }
    //alert($scope.obj)

      /*var a=[];
      a=($filter('Find')($scope.blog1.url))
      alert("a"+a);*/
      /*if(($filter('Find')($scope.blog1.url))=='BOOK :  ')
          (blog1).css('color','red')*/
       // console.log(1)
    },
      //console.log("custom"+$scope.blog1.url);
/*      //using custom filter in directive
      if(($filter('Find')($scope.blog1.url))=='BOOK :  ')
          $.css('background-color','#EE178C')

*/           //   alert("bij");
      //console.log("dir")
      //console.log($scope.blogs);
  /*  
    link :  function(scope,element,attr)
    {
      //($filter('Find')(scope.blog1.url))
       
      if(($filter('Find')(scope.blog1.url))=='BOOK :  ')
      {  // alert("intry")
           // element.css("background-color","green")
            //$('.abc').css("background-color','#ff00ff");
            element.attr('style','color:red');
                 }
      else
      {
         if(($filter('Find')(scope.blog1.url))=='Houses :  ')
           element.attr('style','color:blue  ');
         else
           element.css('color','green');
       }
       //console.log(attr)
      /*element.on('mouseover', function()
      {
        console.log("in");
      })*/
}
});

//FILTER
  myApp.filter('specialSort',function()
{
  return function(item)
  {
    //alert(item);
    i=0;
    i=i+1
    s="";arr=[];
    //alert("IN:"+ item);
    for (i in item)
    {  //alert(item.name)
      for (j in item)
      {
     // alert(i)
    index1=item[i].indexOf(':');
    index2=item[j].indexOf(':');
    //alert(index)
    if(item[i].substring(index1+1) < item[j].substring(index2+1))
    {   
        temp=item[i]
        item[i]=item[j]
        item[j]=temp
        //s=item[i].substring(index+1);
       // arr.push(item[i]);
     }   //arr.sort();
  }
}

   return item;

}
});



  myApp.filter('Find',function()
  {
    return function(item)
    {
        //alert(item)
       //alert(item.substring(38,39));
      if(item.substring(38,39)=='b')
       { 
        return "BOOK :  "
      }
      else
      {
         if(item.substring(38,39)=='h')
      
       { 
        return "Houses :  "
      }
      else
        return "Characters : "
}
    }

  });


  myApp.filter('Find1',function()
  {
    return function(item)
    {
        //alert(item)
       //alert(item.substring(38,39));
      if(item.substring(38,39)=='b')
       { 
        return item.substring(38)
      }
      else
      {
         if(item.substring(38,39)=='h')
      
       { 
        return item.substring(38)
      }
      else
        return item.substring(38)
}
    }

  });

 




// this is without $scope
myApp.controller('mainController',['$http','bookService','$filter',function($http,bookService,$filter) {
  //create a context

  var main = this;
  this.abc=[]
  this.id=''
  this.pageHeading = 'edWisor Blog';
  this.pageSubHeading = 'A collection of experience by students, alumni and edWisor.com team'
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.books= [];
  this.type=[];
  this.type1=[]
  this.characters=[];
  this.count=0  
  this.result='';
  
  this.author=[];
  this.fetch=[];
  this.culture=[]

  this.myObj = {
        "color" : "blue",
        "background-color" : "LightGrey",
    }
    

  this.Bysort=function(result)
  {
    //alert("result="+main.result)

    if (main.result==true)
         return(main.result=false)
     else
         return(main.result=true)

  }

  /*  this.Bysort1=function()
  {
    alert("result1="+main.result1)
      

    if (main.result1==true)
         return(main.result1=false)
     else
         return(main.result1=true)

  }

   this.Bysort2=function()
  {
    alert("result2="+main.result2)
    
    if (main.result2==true)
         return(main.result2=false)
     else
         return(main.result2=true)
}
*/
this.min=[];

  this.loadDetails = function(){
   
 bookService.getBooks()
.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log("fisrt"+response);
          for( i in response.data)
          {
             
            //if((main.baseUrl.substring(39,1)=='b')
              //(main.t).push("Book")
            //(main.min).push(response.data[i].numberOfPages) 

            (main.type).push(response.data[i]);

             (main.author).push(response.data[i].authors[0]);

             (main.books).push("<h2><em>Books : "+response.data[i].name+ "<em></h2></br>"+
                                "Author:"+response.data[i].authors[0]
                               +"<br> ReleasedDate:"+$filter('date')(response.data[i].released,"mediumDate"))
          }
       

         /*    for (i in response.data)
          {         alert(response.data[i].numberOfPages);
               (main.min).push(response.data[i].numberOfPages +""+ response.data[i].name)   
          }*/
         // console.log("sort"+(main.min).sort())

          //main.fetch=response.data
          //main.url=response.data
          
          //console.log(response.data[0]);
          //console.log(main.books)
        // console.log(main.books[0].authors);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


 bookService.getCharacters()
.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
            for( i in response.data)
          {  
            (main.type).push(response.data[i]);
            

             main.count=(response.data[i].books).length;
             main.culture=response.data[i].culture;
             if(main.culture=="")
             {
             (main.books).push("<h2><em>Characters : "+ response.data[i].aliases[0]+
              "<em></h2><br> Book Count:"+main.count);
             }
             else
              (main.books).push("<h2><em>Characters : "+ response.data[i].aliases[0]+
              "<em></h2><br> Book Count :"+main.count+"<br>Culture : "+main.culture);
             }
           



          
         // (main.books).push(response.data)
         // main.blogs = response.data[0].url
        // console.log(main.blogs);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  
//var a=0;
 bookService.getHouses()
.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
      
          console.log(response);

            for( i in response.data)
          {

             (main.type).push(response.data[i]);
             (main.books).push("<h2> <em> Houses : "+ response.data[i].name+"<em></h2>"+
                                "Region :"+response.data[i].region)
          } 

        
          main.type1=(response.data)
          console.log("spec"+main.books)
          //  main.characters=main.type
        //  (main.books).push(response.data)
         // main.blogs = response.data[0].n
         //console.log(main.blogs);
         console.log("combined="+main.type1)


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
         
        });
  
  }



  // end load all blogs
//alert("trial"+main.abc)
 /* this.deleteController=function(id,index)
  {
    $http({
        method: 'POST',
        url: main.baseUrl+'/'+id+'/remove'
      }).then(function successCallback(response) {
    this.id=id
    alert(id)
    alert(index)
    alert("trying to delete")
    main.blogs.splice(index,1);
    //this.Find()
   }, function errorCallback(response) {
           //called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      });

  }// end load all blogs

  this.Find=function()
  {
    alert(this.id)
  alert("outside"+main.id) 
  } */
  /*this.other=function()
  {

  }*/
  this.loadDetails();
  

  
}]); // end controller

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
  this.url1=$routeParams.url1;
  this.url2 =$routeParams.url2;
  //this.url2=($routeParams.url2);
 // alert(this.url1)
  //alert(this.url2)
this.loadSingeBlog = function(){
  if  (this.url1 == 'books')
{   //ert("abc")
   bookService.viewBooks(this.url1,this.url2)
      .then(function successCallback(response) {
         //alert("inviewbook");
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
        main.obj1 = {
        "color" : "#008080",
        "background-color" : "#E0FFFF"
                 } 
      
            
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
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
    main.obj2 = {
        "color" : "green",
        "background-color" : "black"
                 } 
          main.house=response.data
          console.log(main.house.currentLord)
          main.cur=main.house.currentLord
          main.over=main.house.overlord
       if (main.cur!='')
       {
          bookService.viewchar(main.cur)
          .then(function successCallback(response) {
                   main.curName=response.data.name
          });
}
        if(main.over!='')
        {
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
      

         main.obj3 = {
        "color" : "black",
        "background-color" : "coral"
                 } 
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.character=response.data
          main.BooksCount=(response.data.books).length;
          for (i in response.data.books)
          {
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

