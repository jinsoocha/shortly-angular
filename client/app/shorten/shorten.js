angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(url) {
    $scope.link['url'] = url;
    Links.addLink($scope.link)
      .then(function(link) {
        $scope.url = '';
        console.log(link, ' added');
      })
      .catch(function(err) {
        console.error(err);
      });
  };
});
