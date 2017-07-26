'use strict';
define(['angularAMD', 'angular-route', 'routeStyles'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute', 'routeStyles'])
    
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: 'views/home/index.html', 
            controller: 'HomeCtrl',
            controllerUrl: 'views/home/home',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/home.css']
        }))
        .when("/home", angularAMD.route({
            templateUrl: 'views/home/index.html', 
            controller: 'HomeCtrl',
            controllerUrl: 'views/home/home',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/home.css']
        }))
        .when("/dcc", angularAMD.route({
            templateUrl: 'views/dcc/index.html', 
            controller: 'DCCCtrl',
            controllerUrl: 'views/dcc/dcc',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/dcc.css']
        }))
        .when("/pacote/:firstParameter", angularAMD.route({
            templateUrl: 'views/conferencia_encomenda/index.html', 
            controller: 'conferenciaEncomendaCtrl',
            controllerUrl: 'views/conferencia_encomenda/conferencia_encomenda',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/conferencia_encomenda.css']
        }))
        .when("/pacote", angularAMD.route({
            templateUrl: 'views/pacote/index.html', 
            controller: 'PacoteCtrl',
            controllerUrl: 'views/pacote/pacote',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/pacote.css']
        }))
        .when("/pacote/:firstParameter/conferencia_encomenda", angularAMD.route({
            templateUrl: 'views/conferencia_encomenda/index.html', 
            controller: 'conferenciaEncomendaCtrl',
            controllerUrl: 'views/conferencia_encomenda/conferencia_encomenda',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/conferencia_encomenda.css']
        }))
        .when("/estoque/:firstParameter/contagem_estoque", angularAMD.route({
            templateUrl: 'views/contagem_estoque/index.html', 
            controller: 'contagemEstoqueCtrl',
            controllerUrl: 'views/contagem_estoque/contagem_estoque',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/contagem_estoque.css']
        }))
        .when("/estoque/:firstParameter/contagem_estoque/inventario", angularAMD.route({
            templateUrl: 'views/inventario/index.html', 
            controller: 'InventarioCtrl',
            controllerUrl: 'views/inventario/inventario',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/inventario.css']
        }))
        .when("/solucoes", angularAMD.route({
            templateUrl: 'views/solucoes/index.html', 
            controller: 'SolucoesCtrl',
            controllerUrl: 'views/solucoes/solucoes',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/solucoes.css']
        }))
        .when("/oquehadenovo", angularAMD.route({
            templateUrl: 'views/oquehadenovo/index.html', 
            controller: 'OqueHadeNovoCtrl',
            controllerUrl: 'views/oquehadenovo/oquehadenovo',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/oquehadenovo.css']
        }))
        .when("/fiqueligado", angularAMD.route({
            templateUrl: 'views/fiqueligado/index.html', 
            controller: 'FiqueLigadoCtrl',
            controllerUrl: 'views/fiqueligado/fiqueligado',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/fiqueligado.css']
        }))
        .when("/dicas", angularAMD.route({
            templateUrl: 'views/dicas/index.html', 
            controller: 'DicasCtrl',
            controllerUrl: 'views/dicas/dicas',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/dicas.css']
        }))
        .when("/videos", angularAMD.route({
            templateUrl: 'views/videos/index.html', 
            controller: 'VideosCtrl',
            controllerUrl: 'views/videos/videos',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/videos.css']
        })) 
        .when("/testeconhecimento", angularAMD.route({
            templateUrl: 'views/testeconhecimento/index.html', 
            controller: 'TesteConhecimentoCtrl',
            controllerUrl: 'views/testeconhecimento/testeconhecimento',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/testeconhecimento.css']
        }))
        .when("/testeconhecimento/:firstParameter", angularAMD.route({
            templateUrl: 'views/testerecebimentocarga/index.html', 
            controller: 'TesteRecebimentoCargaCtrl',
            controllerUrl: 'views/testerecebimentocarga/testerecebimentocarga',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/testerecebimentocarga.css']
        }))
        .when("/quemsomos", angularAMD.route({
            templateUrl: 'views/quemsomos/index.html', 
            controller: 'QuemSomosCtrl',
            controllerUrl: 'views/quemsomos/quemsomos',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/quemsomos.css']
        }))
        .when("/missao", angularAMD.route({
            templateUrl: 'views/missao/index.html', 
            controller: 'MissaoCtrl',
            controllerUrl: 'views/missao/missao',
            css: ['content/css/main.css','content/css/jquery.bxslider.css','content/css/jquery-ui.css','content/css/missao.css']
        }))
        .otherwise({
            redirectTo: '/home'
        });	
    }]);
    return angularAMD.bootstrap(app);
});