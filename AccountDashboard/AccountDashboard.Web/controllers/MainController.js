(function () {
    var app = angular.module("AccountDashboard");
    var MainController = function ($scope, AuthService) {
        angular.element(document).ready(function () {
            onReady();
        });

        var onReady = function() {
            AuthService.getUser().then(onUser, onError);
        }

        var onUser = function (data) {
            $scope.user = data;
            console.log(data);
        }

        var onError = function (data) {

        }

    }

    app.controller("MainController", MainController);

}());