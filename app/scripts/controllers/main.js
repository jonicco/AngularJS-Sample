'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
