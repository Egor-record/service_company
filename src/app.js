'use strict';

var APP = angular.module('cabinetApp', ['ngMaterial', 'ui.router']);

APP.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('/', {
            url: '/',
            templateUrl: APP.constants.JOURNALS_URL,
            controller: 'JournalsCtrl'
        }).state('account', {
            url: '/account',
            templateUrl: APP.constants.ACCOUNT_URL,
            controller: 'AccountCtrl'
        }).state('appeal', {
            url: '/appeal',
            templateUrl: APP.constants.APPEAL_URL,
            controller: 'AppealCtrl'
        }).state('counters', {
            url: '/counters',
            templateUrl: APP.constants.COUNTERS_URL,
            controller: 'CountersCtrl'
        });

        $urlRouterProvider.otherwise('/');
}]);



APP.controller('AccountCtrl', [ function() {}])
   .controller('AppealCtrl', [ function() {}])
   .controller('CountersCtrl', [ function() {}]);



