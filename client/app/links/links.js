angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.data.links = [];

  $scope.getAll = function() {
    Links.getAll()
      .then(function (links) {
        if (links !== undefined) {
          links.forEach(function(link) {
            $scope.data.links.push(link);
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.$watch('$routeChangeSuccess', function () {
    $scope.getAll();
  });

});
