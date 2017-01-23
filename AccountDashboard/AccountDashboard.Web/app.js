(function () {
    var app = angular.module("AccountDashboard", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })
             //.when("/", {
             //    templateUrl: "views/upload.html",
             //    controller: ""
             //})
           .otherwise({ redirectTo: "/" });
    });
}());