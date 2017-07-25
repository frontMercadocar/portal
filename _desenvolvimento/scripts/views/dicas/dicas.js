'use strict'; 

define(['app'], function (app) {
    app.controller('DicasCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Dicas';
        
        $('.dicas-slider').slick();
        //$('.breadcrumb').append('<a href="home">Home</a> / Estoque / Inventário / Contar o Estoque / Normativas')
        
                       
    });
});
