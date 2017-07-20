
//Custom Directive  TO Apply different color for diffent type of div
myApp.directive('bookCard',function($filter)
{
    return{
    restrict    :  'E',
    templateUrl : './views/book-card.html',
    scope       :{
      blog1: '='
    },
    controller  : function($scope){
    
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
     },
    //alert($scope.obj)

      /*var a=[];
      a=($filter('Find')($scope.blog1.url))
      alert("a"+a);*/
      /*if(($filter('Find')($scope.blog1.url))=='BOOK :  ')
          (blog1).css('color','red')*/
       // console.log(1)
  
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

//Custom Filter for special sort which will sort on basis of name of books and houses and aliases of characters
  myApp.filter('specialSort',function()
{
  return function(item)
  {
    for (i in item)
    {  
      for (j in item)
      {
    
    index1=item[i].indexOf(':');
    index2=item[j].indexOf(':');
  
    if(item[i].substring(index1+1) < item[j].substring(index2+1))
    {   //using bubble sort
        temp=item[i]
        item[i]=item[j]
        item[j]=temp

     }   
  }
}
   return item;
}
});

//Custom Filter
//This filter will return type(book,houses or charcter)from url link 
  myApp.filter('Find',function()
  {
    return function(item)
    {
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

// This filter will return specific url(i.e,books/1) to be used in blog vie page
  myApp.filter('Find1',function()
  {
    return function(item)
    {

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
