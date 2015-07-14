# Spot Application #

Spot Application is a where Spot helps authorized personnel to look at employees and see who is sitting where and doing what, all on a single screen.

## Purpose

** As Scry Anlaytics  is expanding, it is becoming more and more difficult to keep a track of employees and their ongoing projects. Maintaining excel sheets for such purposes is becoming an inefficient task. To pep it up, Scry has come up with an idea of Spot (Scry +Bot), a quick and simple to use web platform.

## Short description of the repository structure

The url endpoints are defined on files inside the app.js 

## *index.html* 
This file responsible for managing the app in the single page and rendering the view dynamically.

## *gulpfile*  

**/routes** folder contains modules where all the routes exposed by the API server are defined. Each route define a path (e.g. '/artists'), an HTTP method (e.g. 'GET'), an handler which receives the request's parameters or payload, that is often used to call a controller action (see /controllers directory) and a validation function possibly used to validate data received by an HTTP request, like PUT or POST

**/controllers** contains the controllers that typically make DB queries and return the result to the client in JSON format

## Requirements
	1. NodeJs installed (For installing project dependecies)
	2. Any editor 
	3. JscsFormatter enabled in your editor 
	4. Jshint enabled in your editor 

**/runner** ?

## install npm 

## open index.html

## Run Test cases 
	> gulp test 

## Create documentation
	> gulp docs
