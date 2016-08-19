angular
    .module('Github users')
    .controller('detailsController', detailsController);

detailsController.$inject = ['$scope','$http','$routeParams'];

function detailsController($scope, $http, $routeParams){
var uid=$routeParams.id;
$http({
            method: 'GET',
            url: 'https://api.github.com/users/'+uid
        })
        .success(function(data) {
            $scope.result = data;
            console.log(data);
            
            })

        } 


