(function() {

    'use strict'
    //define top-level module container
    var app = angular.module('moosicApp', ['ui.router', 'ngSanitize']);
    //additional configuration goes here

    app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.interceptors.push('mashapeHttpInterceptor');
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/main");

        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/partials/main.html",
                controller: "MoosicController",
                controllerAs: "vm"
            })
            .state('main.results', {
                url: "/results",
                templateUrl: "app/partials/results.html",
                controller: "MoosicController"


            })
            .state('main.about', {
                url: "/about",
                templateUrl: "app/partials/about.html"


            })
            .state('main.apis', {
                url: "/apis/:name",
                templateUrl: "app/partials/apis.html",
                controller: "MoosicDetailsController",
                controllerAs: "vm"


            });



    });


})();

// a self closing function, when the page loads, it will automatically loads.
