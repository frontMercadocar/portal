'use strict'; 

define(['app'], function (app) {
    app.controller('VideosCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Videos';
        
        $('.videos-slider').slick();
        $('.videos-slider-vertical').slick({
            infinite: true,
            //vertical: true,
            autoplay: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
        //$('.breadcrumb').append('<a href="home">Home</a> / Estoque / Inventário / Contar o Estoque / Normativas')
        
                       
    });
});
