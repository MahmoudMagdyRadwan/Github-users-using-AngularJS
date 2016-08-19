angular
    .module('Github users')
    .controller('aboutController', aboutController);

aboutController.$inject = ['$scope','$http'];

function aboutController($scope, $http){
    
$http.get('scripts/data.json').success(function(data){
    $scope.details=data;
});
}
