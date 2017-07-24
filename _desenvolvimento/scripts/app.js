'use strict';
define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute'])
    
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: 'views/home/index.html', 
            controller: 'HomeCtrl',
            controllerUrl: 'views/home/home'
        }))
        .when("/home", angularAMD.route({
            templateUrl: 'views/home/index.html', 
            controller: 'HomeCtrl',
            controllerUrl: 'views/home/home'
        }))
        .when("/dcc", angularAMD.route({
            templateUrl: 'views/dcc/index.html', 
            controller: 'DCCCtrl',
            controllerUrl: 'views/dcc/dcc'
        }))
        .when("/estoque/:firstParameter", angularAMD.route({
            templateUrl: 'views/pacote/index.html', 
            controller: 'PacoteCtrl',
            controllerUrl: 'views/pacote/pacote'
        }))
        .when("/estoque/:firstParameter/conferencia_encomenda", angularAMD.route({
            templateUrl: 'views/conferencia_encomenda/index.html', 
            controller: 'conferenciaEncomendaCtrl',
            controllerUrl: 'views/conferencia_encomenda/conferencia_encomenda'
        }))
        .when("/estoque/:firstParameter/contagem_estoque", angularAMD.route({
            templateUrl: 'views/contagem_estoque/index.html', 
            controller: 'contagemEstoqueCtrl',
            controllerUrl: 'views/contagem_estoque/contagem_estoque'
        }))
        .when("/estoque/:firstParameter/contagem_estoque/inventario", angularAMD.route({
            templateUrl: 'views/inventario/index.html', 
            controller: 'InventarioCtrl',
            controllerUrl: 'views/inventario/inventario'
        }))
        .when("/solucoes", angularAMD.route({
            templateUrl: 'views/solucoes/index.html', 
            controller: 'SolucoesCtrl',
            controllerUrl: 'views/solucoes/solucoes'
        }))
        .otherwise({
            redirectTo: '/home'
        });	
    }]);
    return angularAMD.bootstrap(app);
});