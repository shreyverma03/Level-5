myApp.factory('bookService',function bookFactory($http)
{
 
 var blogApi={};
 var mainUrl='https://www.anapioficeandfire.com/api';
 var baseUrl='https://www.anapioficeandfire.com/api/books';
 blogApi.getBooks=function()
 {

 	return $http({
 		method:'GET',
 		url:baseUrl
 	});
 }

var baseUrl1='https://www.anapioficeandfire.com/api/houses'

  blogApi.getHouses=function()
 {
 	return $http({
 		method:'GET',
 		url:baseUrl1
 	});
 }

var baseUrl2='https://www.anapioficeandfire.com/api/characters'
 blogApi.getCharacters=function()
 {
 	return $http({
 		method:'get',
 		url:baseUrl2
 	})
 }

 blogApi.viewBooks=function(url1,url2)
 {
 	return $http({
 		method:'GET',
 		url:mainUrl+'/'+url1+'/'+url2
 	});
 }

  blogApi.viewHouses=function(url1,url2)
 {
 	return $http({
 		method:'GET',
 		url:mainUrl+'/'+url1+'/'+url2
 	});
 }

   blogApi.viewCharacters=function(url1,url2)
 {
 	return $http({
 		method:'GET',
 		url:mainUrl+'/'+url1+'/'+url2
 	});
 }
    blogApi.viewchar=function(cur)
 {
 	return $http({
 		method:'GET',
 		url:cur
 	});
 }

     blogApi.viewhouse=function(cur)
 {
 	return $http({
 		method:'GET',
 		url:cur


 	});
 }
      blogApi.viewbook=function(cur)
 {
 	return $http({
 		method:'GET',
 		url:cur
 	});
 }
 return blogApi;	

});