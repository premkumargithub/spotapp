'use strict';
/**
*   @module SpotApp:Services:Service
*   @description Provides the employee related service 
*	this contains functions for listing employee and its actions
*   and EmployeeService service created here by passing EmployeeService as service name
*   Required modules are injected into angular service provider method
*   @requires Dependency:$http Angular service
*/
app.service('EmployeeService', ['$http', function ($http) {

    /**
	*   @function SpotApp:Services:Service.getEmployeeList
	*   @param {object} opts Request object with input params 
	*   @description Provides the employee list 
	*	@callback the employee object
	*   @returns {Object} Employee list
	**/
    this.getEmployeeList = function (opts, callback) {
        var url = APP.employeeList;
        $http.get(url).
		success(function (data, status, headers, config) {
    		callback(data);
		}).
		error(function (data, status, headers, config) {

		});
    }

}]);
