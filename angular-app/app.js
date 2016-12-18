
  // var mymodule = angular.module('mymodule', []);
  // mymodule.controller('MyCtrl', function($scope, $http) {
  //    $http.get('json/base.json').success(function(data, status, headers, config){
  //        $scope.json = data;
  //    }).error(function(){
  //        console.log('error json get');
  //    });
  // });


angular.module('mymodule', [])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;  // always scroll by 50 extra pixels
   
}])
.controller('MyCtrl', ['$anchorScroll', '$location', '$scope', '$http', 
  function($anchorScroll, $location, $scope, $http) {

$http.get('json/base.json').success(function(data, status, headers, config){
          $scope.json = data;
      }).error(function(){
          console.log('error json get');
      });
  
    $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
  }
]);