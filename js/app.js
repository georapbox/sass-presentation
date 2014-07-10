/**
 * Created by graptis on 6/2/2014.
 */
/*global angular, $ */
angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngAnimate-animate.css',
    'app.controllers'
]).config(['$stateProvider', '$urlRouterProvider', '$logProvider', function ($stateProvider, $urlRouterProvider, $logProvider) {
    'use strict';

    $logProvider.debugEnabled(true);

    $urlRouterProvider.when('/', '/intro').
        when('', '/intro');

    $stateProvider.
        state('intro', {
            title: 'SASS - Introduction',
            url: '/intro',
            templateUrl: 'partials/intro.html'
        }).
        state('why-sass', {
            title: 'SASS - Why Sass?',
            url: '/why-sass',
            templateUrl: 'partials/why-sass.html'
        }).
        state('installing-sass', {
            title: 'SASS - Installation',
            url: '/installing-sass',
            templateUrl: 'partials/installing-sass.html'
        }).
        state('style-nesting', {
            title: 'SASS - Style Nesting',
            url: '/style-nesting',
            templateUrl: 'partials/style-nesting.html'
        }).
        state('variables', {
            title: 'SASS - Variables',
            url: '/variables',
            templateUrl: 'partials/variables.html'
        }).
        state('mixins', {
            title: 'SASS - Mixins',
            url: '/mixins',
            templateUrl: 'partials/mixins.html'
        }).
        state('selector-inheritance', {
            title: 'SASS - Selector Inheritance',
            url: '/selector-inheritance',
            templateUrl: 'partials/selector-inheritance.html'
        }).
        state('functions', {
            title: 'SASS - Functions',
            url: '/functions',
            templateUrl: 'partials/functions.html'
        }).
        state('resources', {
            title: 'SASS - Resources',
            url: '/resources',
            templateUrl: 'partials/resources.html'
        });
}]).run(['$rootScope', '$state', function ($rootScope, $state) {
    'use strict';
    $rootScope.$state = $state;
}]);
