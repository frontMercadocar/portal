'use strict'; 

define(['app'], function (app) {
    app.controller('HomeCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Página Home';
        
        //SLIDERS
        $('.single-item').slick();
        //CLOSE
        
                       
    });
});

