'use strict'; 

define(['app'], function (app) {
    app.controller('OqueHadeNovoCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'O que hé de novo ?';
        
        $('.oquehadenovo-slider').slick();
        
                       
    });
});
