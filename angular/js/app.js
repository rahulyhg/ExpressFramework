// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice',
    'ui.bootstrap',
    'ui.utils',
    'ui.select2'

]);

firstapp.config(['$routeProvider',
                 function ($routeProvider) {
        $routeProvider.
        when('/user', {
            templateUrl: 'views/template.html',
            controller: 'user'
        }).
        when('/process', {
            templateUrl: 'views/template.html',
            controller: 'process'
        }).
        when('/leads', {
            templateUrl: 'views/template.html',
            controller: 'leads'
        }).
       
        
        otherwise({
            redirectTo: '/user'
        });
  }]);