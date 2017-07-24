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
        .otherwise({
            redirectTo: '/home'
        });	
    }]);
    return angularAMD.bootstrap(app);
});