
var app = angular.module('Github users', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
        .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'homeController',
                title: 'Home'
                
        })
        .when('/users', {
             templateUrl : 'views/users.html',
             controller  : 'usersController',
             title: 'Users'
                
        })
        .when('/users/:id', {
             templateUrl : 'views/userdetails.html',
             controller  : 'usersController',
             title: 'User Info'
                
        })
        .when('/about', {
             templateUrl : 'views/about.html',
             controller  : 'aboutController',
             title: 'About'
                
        })
        .otherwise({
        		redirectTo: '/'
        });
}).run(['$rootScope', '$location','$route', function($rootScope, $location,$route){
   var path = function() { return $location.path();};
   $rootScope.$watch(path, function(newVal, oldVal){
     $rootScope.activetab = newVal;
   });
   $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    //Change page title, based on Route information
    $rootScope.title = $route.current.title;
  });
}]);
