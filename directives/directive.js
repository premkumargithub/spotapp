/**
*   @description Holds the directive here for deving the DOM in units
*
**/
app.directive('appHeader', function () {
    return {
        restrict: 'AE',
        templateUrl: 'views/header.html'
    }
});

app.directive('appFooter', function () {
    return {
        restrict: 'AE',
        templateUrl: 'views/footer.html'
    }
});
