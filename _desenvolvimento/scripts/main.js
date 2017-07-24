'use strict';

require.config({
    baseUrl: "scripts",     
    paths: {
        'angular': 'angular/angular.min',
        'angular-route': 'angular/angular-route.min',
        'angularAMD': 'angular/angularAMD.min' 
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] },
    deps: ['app']
});