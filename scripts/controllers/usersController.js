angular
    .module('Github users')
    .controller('usersController', usersController);

usersController.$inject = ['$scope','$http'];

function usersController($scope, $http){
	$scope.limit= 5;

        $http({
            method: 'GET',
            url: 'https://api.github.com/users'
        }).success(function(data) {
            $scope.details = data;
           $scope.loadmore = function() {
  $scope.limit = $scope.details.length
}
 })
}


