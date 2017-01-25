(function () {
    var AuthService = function ($http) {
        var getUser = function () {
            //  return $http.get("https://api.github.com/users/sakthi-y2k")
            return $http.get("http://localhost:51986/api/Auth/GetUser")
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
            }).then(onSuccess, onError);
        }
     }

     var onSuccess = function (data) {
         alert("Uploaded Successfully");
     }

     var onError = function (data) {
         alert("Error in Uploading !!");
     }

     var fileUpload = angular.module("AccountDashboard").service('fileUpload', ['$http', fileUploadService]);

}());