'use strict'; 

define(['app'], function (app) {
    app.controller('conferenciaEncomendaCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Conferêcncia Encomenda';
        
        $('.breadcrumb').append('<a href="home">Home</a> / Estoque / <a href="estoque/pacote">Pacote</a>/ Conferencia Encomenda');
        
      
        
                       
    });
});
