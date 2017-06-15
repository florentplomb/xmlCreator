'use strict';

/**
 * @ngdoc overview
 * @name xmlCreatorApp
 * @description
 * # xmlCreatorApp
 *
 * Main module of the application.
 */
angular
  .module('xmlCreatorApp', [
    'ngRoute',
    'routeStyles',
    'dndLists'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/xmlcreator.html',
        controller: 'XmlcreatorCtrl',
        controllerAs: 'xmlcreator'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
 
      .otherwise({
        redirectTo: '/xmlcreator'
      });
  });
