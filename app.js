'use strict';
/**
*   @module SpotApp:App
*   @description This is main file here complete application namespace is created
*   and it also responsible for handling completed application strcuture 
*	this also having the AppController and routing feature here
*   Required modules are injected into angular module
*   @requires module:SpotApp Application name
*   @requires Dependency:ngRoute Angular library
*/

var app = angular.module('SpotApp', ['ngRoute']);


/**
*   @description This is the AppContoller for the application
*   Required dependecies are injected into AppController module
*   @requires module:AppController Application Main controller
*   @requires Dependency:$rootScope Angular service
*   @requires Dependency:$scope Angular service
*   @requires Dependency:$location Angular service
*   @requires Dependency:$EmployeeService Employee service Responsible for eployee actions
*/
app.controller('AppController', ['$rootScope', '$scope', '$location', 'EmployeeService', function ($rootScope, $scope, $location, EmployeeService) {
    
    var opts = {};
    EmployeeService.getEmployeeList(opts, function (result) {
        $scope.employees = result;
    });

}]);

/**
*   @description Application routing managed using $routeProvider service 
*   Required dependecies are injected into the config module
*   @requires Dependency:$routeProvider Angular service
*/
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
		.when('/', {
    		templateUrl: 'views/employee-list.html',
    		//controller: 'EmployeeCOntroller'
		})
		.otherwise({redirectTo: '/'});

}]);
