


  var mymodule = angular.module('mymodule', []);

  mymodule.controller('BloksCtrl', function($scope, $http) {

     $http.get('json/base.json').success(function(data, status, headers, config){
         // console.log('\n\nData: ', data, '\n\nstatus: ', status, '\n\nheaders: ', headers, '\n\nconfig: ', config);
         $scope.blocks = data.blocks;
         $scope.iblocks = data.iphone_block1;
         $scope.iblocks2 = data.iphone_block2;
         $scope.galery_mini1 = data.features1;
         $scope.galery_mini2 = data.features2;
         $scope.meet_img_mini = data.meet_img_mini;
         $scope.some_img_mini = data.some_img_mini;
         $scope.menu = data.menu;

         some_img_mini
    
         // console.log('\n\nData.iphone_block1: ', data.iphone_block2);
         // console.log('\n\nData.iphone_block1: ', $scope.iblocks2);
     }).error(function(){
         console.log('error');
     });

  
  });
