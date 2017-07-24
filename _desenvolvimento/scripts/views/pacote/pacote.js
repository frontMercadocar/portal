'use strict'; 

define(['app'], function (app) {
    app.controller('PacoteCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Pacote';
        
        $('.breadcrumb').append('<a href="home">Home</a> / Estoque / Pacote');
        
        //SLIDERS
        $('.single-item').slick();
        //CLOSE
        
                       
    });
});
