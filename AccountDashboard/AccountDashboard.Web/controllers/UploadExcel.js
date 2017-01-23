(function () {
    var app = angular.module("AccountDashboard");

    //Added by Pavan for Excel File Upload
    var excelUpload = function ($scope, fileUpload) {
        $scope.uploadFile = function () {
            var file = $("#file").get(0).files;
            var uploadUrl = "http://localhost:51986/api/Excel/UploadFiles";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };
    }
    app.controller("ExcelUpload", ['$scope', 'fileUpload', excelUpload]);

}());