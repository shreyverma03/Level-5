

myApp.controller('mainController',['$http','bookService','$filter',function($http,bookService,$filter) {
 

  var main = this;
  this.books= [];
  this.type=[];
  this.characters=[];
  this.count=0  
  this.result='';
  this.culture=[]

  this.myObj = {
        "color" : "blue",
        "background-color" : "LightGrey",
    }
    
  this.Bysort=function(result)
  {

    if (main.result==true)
         return(main.result=false)
     else
         return(main.result=true)

  }

  this.loadDetails = function(){
   
 bookService.getBooks()
.then(function successCallback(response) {
         
          for( i in response.data)
          { 
          
            (main.type).push(response.data[i]);

            
             (main.books).push("<h2><em>Books : "+response.data[i].name+ "<em></h2></br>"+
                                "Author:"+response.data[i].authors[0]
                               +"<br> ReleasedDate:"+$filter('date')(response.data[i].released,"mediumDate"))
          }
    

        }, function errorCallback(response) {
         
          alert("some error occurred. Check the console.");
          console.log(response);

        });


 bookService.getCharacters()
.then(function successCallback(response) {
     
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
           
        }, function errorCallback(response) {
        
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  

 bookService.getHouses()
.then(function successCallback(response) {
          
      
          console.log(response);

            for( i in response.data)
          {   
            
             (main.type).push(response.data[i]);
              
			  
             (main.books).push("<h2> <em> Houses : "+ response.data[i].name+"<em></h2>"+
                                "Region :"+response.data[i].region)
          } 



        }, function errorCallback(response) {
          
          alert("some error occurred. Check the console.");
          console.log(response);
         
        });
  
  }


  this.loadDetails();
  

  
}]); 