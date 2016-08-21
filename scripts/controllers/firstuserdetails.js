angular
    .module('Github users')
    .controller('firstuserdetails', firstuserdetails);

firstuserdetails.$inject = ['$scope','$http','$routeParams'];

function firstuserdetails($scope, $http, $routeParams){
var uid=$routeParams.id;
$http({
            method: 'GET',
            url: 'https://api.github.com/users/1'
        })
        .success(function(data) {
            $scope.result = data;
            console.log(data);
            
            })

        } 


