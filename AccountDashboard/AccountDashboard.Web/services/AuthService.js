(function () {
    var AuthService = function ($http) {
        var getUser = function () {
            return $http.get("https://api.github.com/users/sakthi-y2k")
                .then(function (response) {
                    return response.data;
                })
        };
        return {
            getUser: getUser
        }
    };
    var module = angular.module("AccountDashboard").factory("AuthService", AuthService);
}());