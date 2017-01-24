(function () {
    var app = angular.module("AccountDashboard");
    var MainController = function ($scope, AuthService) {
        angular.element(document).ready(function () {
            onReady();
        });

        var onReady = function () {
            AuthService.getUser().then(onUser, onError);
        }

        var onUser = function (data) {
            $scope.user = data;
            console.log(data);
        }

        var onError = function (data) {

        }

        var projects = null;

        projects = {
            Green: [{ ProjectId: 1000167628, ProjectName: 'FORD FB Dev Feedback App', Status: 'Active', OffshorePM: 'Arthy,Rameez', Milestone: 'Warranty Support' },
            { ProjectId: 1000149485, ProjectName: 'Ford - Vincent SA', Status: 'Active', OffshorePM: 'Prabhakar', Milestone: 'SIT' },
            { ProjectId: 1000111984, ProjectName: 'Ford WBDO Migration', Status: 'Active', OffshorePM: 'Archana (130342),Rameez', Milestone: 'UAT' },
            { ProjectId: 1000118826, ProjectName: 'Ford SE R2&R3 Environ.&Testing ', Status: 'Active', OffshorePM: 'Sudhakar (114308)/Abdulla,Lakshmi,Rameez', Milestone: 'Coding' },
            { ProjectId: 1000150776, ProjectName: 'FORD CONNECTED X BUNDLE 2', Status: 'Active', OffshorePM: 'Prasanth (223223),Arthy,Rameez', Milestone: 'Prod Move' },
            { ProjectId: 1000170391, ProjectName: 'Ford Connected Services RTT (Bundle 3)', Status: 'Active', OffshorePM: 'Swami (231839),Arthy,Rameez', Milestone: 'Coding' },
            { ProjectId: 1000163928, ProjectName: 'FMCC WebFOCUS Migration', Status: 'Active', OffshorePM: 'Shyam L', Milestone: 'Phase 3 - UATPhase 4 - Remediation' },
            { ProjectId: 1000175459, ProjectName: 'Ford Media Website Redesign', Status: 'Active', OffshorePM: 'Maha (105727)/ Jalandar (144837)', Milestone: 'Inception' },
            { ProjectId: 1000175243, ProjectName: 'Ford FEDE Multisite Robustness', Status: 'Active', OffshorePM: 'Milan,Lakshmi,Rameez', Milestone: 'Coding' },
            { ProjectId: 1000175244, ProjectName: 'Ford: TCBOM Reporting', Status: 'Active', OffshorePM: 'Gobi,Anbu,Rameez', Milestone: 'Design' },
            { ProjectId: 1000175245, ProjectName: 'Ford Automated BOM Analytics', Status: 'Active', OffshorePM: 'Gobi,Anbu,Rameez', Milestone: 'Design' }],

            Amber: [{ ProjectId: 1000062963, ProjectName: 'Ford SharePoint FixedCapacity', Status: 'Active', OffshorePM: 'Prabhakar', Milestone: 'App Maintenance' },
            { ProjectId: 1000170018, ProjectName: 'Ford WebFOCUS Migration', Status: 'Active', OffshorePM: 'Buhari (125295),Rameez', Milestone: 'UAT' }],

            Red: [{ ProjectId: 1000113657, ProjectName: 'FORD - UNICODE CONVERSION', Status: 'Active', OffshorePM: 'Sudhakar (114308)', Milestone: '' },
            { ProjectId: 1000091162, ProjectName: 'Ford Genesis Fixed Capacity', Status: 'Active', OffshorePM: 'Maha (105727)/Sivakumar Subramanian', Milestone: 'SIT' },
            { ProjectId: 1000111152, ProjectName: 'Ford DI Architecture&Modelling ', Status: 'Active', OffshorePM: 'Amit Bhatia (417250)/Jitender (291428),Rameez', Milestone: 'Prod Move' },
            { ProjectId: 1000138291, ProjectName: 'Ford Genesis Wave-3', Status: 'Active', OffshorePM: 'Maha (105727)/Muruganandam, Periasamy ', Milestone: 'Dry Run 4' },
            { ProjectId: 1000133218, ProjectName: 'FMCC ODS Development', Status: 'Active', OffshorePM: 'Maha (105727)/Dass Duraisamy', Milestone: 'Launch' },
            { ProjectId: 1000144318, ProjectName: 'FMCC Quantum Architecture Svcs', Status: 'Active', OffshorePM: 'Maha (105727)/Dass Duraisamy', Milestone: '' },
            { ProjectId: 1000144328, ProjectName: 'Ford B2C Integration Service Project UK', Status: 'Active', OffshorePM: 'Maha (105727)/Kishore Subramanian', Milestone: 'Coding' },
            { ProjectId: 1000156190, ProjectName: 'Ford FordPass', Status: 'Active', OffshorePM: 'Maha (105727)/Vignesh T', Milestone: 'Coding' },
            { ProjectId: 1000159964, ProjectName: 'Ford Hadoop Data Landing', Status: 'Active', OffshorePM: 'Maha (105727)/Ilango Sakthivel', Milestone: 'Coding' },
            { ProjectId: 1000169675, ProjectName: 'Ford VSEM TC Upgrade', Status: 'Active', OffshorePM: 'Syed,Abdulla,Lakshmi,Rameez', Milestone: 'Unit Testing' },
            { ProjectId: 1000167860, ProjectName: 'Ford Global Track and Trace', Status: 'Active', OffshorePM: 'Maha (105727)/Diwakar Raja', Milestone: 'Coding' },
            { ProjectId: 1000167725, ProjectName: 'Ford Pine Needle', Status: 'Active', OffshorePM: 'Sudhakar (114308)', Milestone: '' },
            { ProjectId: 1000174115, ProjectName: 'Ford Mo-NVIS Implementation (B', Status: 'Active', OffshorePM: 'Ed,Rameez (110385)', Milestone: 'Coding' }]
        };
        $scope.Projects = projects;

        $scope.ShowProjects = function (row) {
            if (row == "all") {
                $("#ProjectTable tbody tr").show();
            }
            else {
                $("#ProjectTable tbody tr").hide();
                $("#ProjectTable tbody tr." + row).show();
            }
        };


        // Individual Project Details

        var values = { ScheduleVariance: "0%", EffortVariance: "0%", EffortBurnt: "76.4%", RevenueBurnt: "68.5%", ScopeDeviation: "1.24%", OpenCodereviewcomments: "8 of 8", UTdefects: "43 of 43", OpenSITDefects: "3 of 3", OpenUATdefects: "1 of 1", DefectDensity: "0.88%", CodeQualityIssues: "0", CodeCoverage: "NA", ofRisksopen: "0", Successful: "3", Missed: "0", UpComing: "0", }
        $scope.Values = values;

    }

    app.controller("MainController", MainController);

}());