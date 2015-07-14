var APP=APP||{};APP.appName="Spot Application",APP.employeeList="resources/employee.json",app.service("EmployeeService",["$http",function(e){this.getEmployeeList=function(p,t){var o=APP.employeeList;e.get(o).success(function(e,p,o,s){t(e)}).error(function(e,p,t,o){})}}]);var app=angular.module("SpotApp",["ngRoute"]);app.controller("AppController",["$rootScope","$scope","$location","EmployeeService",function(e,p,t,o){var s={};o.getEmployeeList(s,function(e){console.log(e[0]),p.employees=e})}]),app.config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/employee-list.html"}).otherwise({redirectTo:"/"})}]);var gulp=require("gulp"),uglify=require("gulp-uglify"),concat=require("gulp-concat"),cleanup=require("gulp-clean"),mocha=require("gulp-mocha"),jsdoc=require("gulp-jsdoc"),jscs=require("gulp-jscs"),jshint=require("gulp-jshint"),paths={jsdocpath:["config/*.js","resources/*.js","services/*.js","*.js"],tests:["test/app.js"]};gulp.task("mocha",function(){gulp.src(paths.tests).pipe(mocha({reporter:"spec"}))}),gulp.task("clean-doc",function(){return gulp.src("docs",{read:!1}).pipe(cleanup())}),gulp.task("doc",["clean-doc"],function(){return gulp.src(paths.jsdocpath).pipe(jsdoc("docs"))}),gulp.task("uglify",function(){gulp.src(paths.jsdocpath).pipe(concat("scripts.js")).pipe(uglify()).pipe(gulp.dest("dist/js"))}),gulp.task("default",["watch"]),gulp.task("docs",["doc"]),gulp.task("test",["mocha"]);