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
        .when("/pacote/:firstParameter", angularAMD.route({
            templateUrl: 'views/conferencia_encomenda/index.html', 
            controller: 'conferenciaEncomendaCtrl',
            controllerUrl: 'views/conferencia_encomenda/conferencia_encomenda'
        }))
        .when("/pacote", angularAMD.route({
            templateUrl: 'views/pacote/index.html', 
            controller: 'PacoteCtrl',
            controllerUrl: 'views/pacote/pacote'
        }))
        .when("/pacote/:firstParameter/conferencia_encomenda", angularAMD.route({
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
        .when("/oquehadenovo", angularAMD.route({
            templateUrl: 'views/oquehadenovo/index.html', 
            controller: 'OqueHadeNovoCtrl',
            controllerUrl: 'views/oquehadenovo/oquehadenovo'
        }))
        .when("/fiqueligado", angularAMD.route({
            templateUrl: 'views/fiqueligado/index.html', 
            controller: 'FiqueLigadoCtrl',
            controllerUrl: 'views/fiqueligado/fiqueligado'
        }))
        .when("/dicas", angularAMD.route({
            templateUrl: 'views/dicas/index.html', 
            controller: 'DicasCtrl',
            controllerUrl: 'views/dicas/dicas'
        }))
        .otherwise({
            redirectTo: '/home'
        });	
    }]);
    return angularAMD.bootstrap(app);
});