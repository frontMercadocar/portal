'use strict'; 

define(['app'], function (app) {
    app.controller('FiqueLigadoCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Fique ligado ?';
        
        $('.fiqueligado-slider').slick();
        //$('.breadcrumb').append('<a href="home">Home</a> / Estoque / Inventário / Contar o Estoque / Normativas')
        
                       
    });
});
