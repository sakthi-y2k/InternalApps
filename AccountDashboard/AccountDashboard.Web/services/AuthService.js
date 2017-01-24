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

     //Added by Pavan for Excel File Upload
     var fileUploadService =  function ($http) {
        this.uploadFileToUrl = function (file, uploadUrl) {
            var fd = new FormData();
            fd.append('file', file);

            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
            .success(function () {
                alert("File Uploaded Successfully");
            })
            .error(function () {
                alert("Error !!");
            });
        }}
     var fileUpload = angular.module("AccountDashboard").service('fileUpload', ['$http', fileUploadService]);

}());