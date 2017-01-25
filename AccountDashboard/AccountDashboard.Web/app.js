(function () {
     var app = angular.module("AccountDashboard", ["ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "views/upload.html",
                controller: "ExcelUpload"
            })
             //.when("/", {
             //    templateUrl: "views/upload.html",
             //    controller: ""
             //})
             .when("/index", {
                 templateUrl: "views/dashboard.html",
                 controller: "MainController"
             })
            //.when("/Project", {
            //    templateUrl: "views/ProjectDetails.html",
            //    controller: "MainController"
            //})
            .when("/Project/:id?", {
                templateUrl: "views/ProjectDetails.html",
                controller: "MainController"
            })
            .when("/UploadExcel", {
                templateUrl: "views/upload.html",
                controller: "ExcelUpload"
            })

           .otherwise({ redirectTo: "/" });
           //$locationProvider.html5Mode(true);
    });
}());