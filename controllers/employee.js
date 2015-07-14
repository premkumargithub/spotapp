/**
*   @description This is the EmployeeContoller for the application
*   Required dependecies are injected into EmployeeContoller module
*   @requires module:AppController Application Main controller
*   @requires Dependency:$rootScope Angular service
*   @requires Dependency:$scope Angular service
*   @requires Dependency:$location Angular service
*   @requires Dependency:$EmployeeService Employee service Responsible for eployee actions
*/
app.controller('EmployeeContoller', ['$rootScope', '$scope', '$location', 'EmployeeService', function ($rootScope, $scope, $location, EmployeeService) {

    /**
	*	@function 
	*	@name Controller:EmployeeContoller.getEmployeeDetail
	*   @description Provides employee details on click from table
	*   @params (Integer) row
	*   @params (Integer) columns
	*   @return {Object}
	**/
    $scope.getEmployeeDetail = function (row, column) {
		
    }

}]);
