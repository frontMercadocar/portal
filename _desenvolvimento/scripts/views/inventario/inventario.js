'use strict'; 

define(['app'], function (app) {
    app.controller('InventarioCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Inventário';
        
        $('.breadcrumb').append('<a href="home">Home</a> / Estoque / Inventário / Contar o Estoque / Normativas')
        
                       
    });
});
