'use strict'; 

define(['app'], function (app) {
    app.controller('contagemEstoqueCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Contagem Estoque';
        
        $('.breadcrumb').append('<a href="home">Home</a> / Estoque / <a href="pacote">Pacote</a> / Contagem Estoque');           
                       
    });
});
