'use strict';

require.config({
    baseUrl: "scripts",     
    paths: {
        'angular': 'angular/angular.min',
        'angular-route': 'angular/angular-route.min',
        'routeStyles': 'angular/angular-route-styles',
        'angularAMD': 'angular/angularAMD.min' 
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'], 'routeStyles': ['angular'] },
    deps: ['app']
});