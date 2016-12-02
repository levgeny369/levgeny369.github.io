


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

    // $scope.blocks = [
    //   {
    //       "src": "./images/features/1.png",
    //       "features_mini2": "Branding",
    //      "features_text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  "
    //     },
    //      {
    //      "src": "./images/features/2.png",
    //      "features_mini2": "Development",
    //      "features_text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  "
    //    },
    //    {
    //       "src": "./images/features/3.png",
    //      "features_mini2": "Consuting",
    //      "features_text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  "
    //    }
    // ]
  });



  // var app = angular.module('dtwoshop',[]);

  // app.controller('dtwoNavbarController', ['$http', function($http) {
  //   this.links = [];
  //   var menu = this;
  //   $http.get("/json/server.json").then(
  //     function(res){
  //       menu.blocks = res.data.blocks;
  //     },
  //     function(res) {
  //       console.log("links error " + res);
  //       menu.blocks = [
  //         {          
  //           "link": "#",
  //           "features_mini2": "Branding"
          
  //         }
  //       ];
  //     }
  //   );
  // }]);
  // app.directive('dtwoMain', ['$http', function($http){
  //   return {
  //     restrict: 'E',
  //     templateUrl: '/angular-app/templates/main.tpl.html',
  //     controller: function(){
  //       this.activeTab = 0;
  //       this.tabs = [];
  //       var about = this;
  //       this.setTab = function(activeTab, $event) {
  //         $event.preventDefault();
  //         if (activeTab)
  //           this.activeTab = activeTab;
  //         else this.activeTab = 0;
  //       };
  //       this.isActive = function(tab) {
  //         return tab == this.activeTab;
  //       };
  //       $http.get("/json/server.json").then(
  //       function(res){
  //         about.tabs = res.data.about;
  //       },
  //       function(res) {
  //         console.log("links error " + res);   
  //       });
  //     },
  //     controllerAs: 'about'
  //   };
  // }]);

// })();
