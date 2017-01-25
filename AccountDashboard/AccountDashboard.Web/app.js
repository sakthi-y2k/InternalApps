(function () {
     var app = angular.module("AccountDashboard", ["ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "views/DashboardMain.html",
                controller: "MainController"
            })
             .when("/UploadExcel", {
                 templateUrl: "views/upload.html",
                 controller: "ExcelUpload"
             })
             .when("/Dashboard", {
                 templateUrl: "views/DashboardMain.html",
                 controller: "MainController"
             })
            .when("/Project", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })
            .when("/Project/:id?", {
                templateUrl: "views/ProjectDetails.html",
                controller: "MainController"
            })
            .when("/StatusProject/:status?", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })
            .when("/ScheduleVariance/:status?", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })
            .when("/EffortVariance/:status?", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })
            .when("/ScopeDeviation/:status?", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })
            .when("/DefectDensity/:status?", {
                templateUrl: "views/dashboard.html",
                controller: "MainController"
            })

            
           .otherwise({ redirectTo: "/" });
    });
}());