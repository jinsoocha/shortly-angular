angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
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
        valid = true;
      });
  };

  $scope.signout = function() {
    Auth.signout()
      .then(function() {
        console.log('Signed out');
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.isValidUrl = function(url) {
    if (url !== undefined) {
      return Links.isValidUrl(url);
    } else {
      return true;
    }
  };
});
