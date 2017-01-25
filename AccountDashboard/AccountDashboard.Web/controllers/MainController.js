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
            Green: [
                { ProjectId: 1000167628, ProjectName: 'FORD FB Dev Feedback App', Status: 'Active', OffshorePM: 'Arthy,Rameez', Milestone: 'Warranty Support', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: '0', DefectDensity: '0.00882352941176471' },
                { ProjectId: 1000149485, ProjectName: 'Ford - Vincent SA', Status: 'Active', OffshorePM: 'Prabhakar', Milestone: 'SIT', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: '-0.95052448799981', DefectDensity: '0.000893921334922527' },
                { ProjectId: 1000111984, ProjectName: 'Ford WBDO Migration', Status: 'Active', OffshorePM: 'Archana (130342),Rameez', Milestone: 'UAT', ScheduleVariance: '0', EffortVariance: '0.199191850207729', ScopeDeviation: '0', DefectDensity: '0' },
                { ProjectId: 1000118826, ProjectName: 'Ford SE R2&R3 Environ.&Testing ', Status: 'Active', OffshorePM: 'Sudhakar (114308)/Abdulla,Lakshmi,Rameez', Milestone: 'Coding', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: '-0.982772775601943', DefectDensity: '0' },
                { ProjectId: 1000150776, ProjectName: 'FORD CONNECTED X BUNDLE 2', Status: 'Active', OffshorePM: 'Prasanth (223223),Arthy,Rameez', Milestone: 'Prod Move', ScheduleVariance: '0', EffortVariance: '-0.00125156445556946', ScopeDeviation: '0', DefectDensity: '0.0328413284132841' },
                { ProjectId: 1000170391, ProjectName: 'Ford Connected Services RTT (Bundle 3)', Status: 'Active', OffshorePM: 'Swami (231839),Arthy,Rameez', Milestone: 'Coding', ScheduleVariance: '0', EffortVariance: '0.1', ScopeDeviation: '-0.950321217650166', DefectDensity: '0' },
                { ProjectId: 1000113657, ProjectName: 'FORD - UNICODE CONVERSION', Status: 'Active', OffshorePM: 'Sudhakar (114308)', Milestone: '', ScheduleVariance: '0', EffortVariance: '0.137655107778819', ScopeDeviation: '-0.96514695994894', DefectDensity: 'Data Not Provided' },
                { ProjectId: 1000163928, ProjectName: 'FMCC WebFOCUS Migration', Status: 'Active', OffshorePM: 'Shyam L', Milestone: 'Phase 3 - UAT Phase 4 - Remediation', ScheduleVariance: 'Data Not Provided', EffortVariance: 'Data Not Provided', ScopeDeviation: 'Data Not Provided', DefectDensity: '0.0107310529845741' },
                { ProjectId: 1000091162, ProjectName: 'Ford Genesis Fixed Capacity', Status: 'Active', OffshorePM: 'Maha (105727)/Sivakumar Subramanian', Milestone: 'SIT', ScheduleVariance: 'Data Not Provided', EffortVariance: 'Data Not Provided', ScopeDeviation: 'Data Not Provided', DefectDensity: '0.0142273745224608' },
                { ProjectId: 1000175459, ProjectName: 'Ford Media Website Redesign', Status: 'Active', OffshorePM: 'Maha (105727)/ Jalandar (144837)', Milestone: 'Inception', ScheduleVariance: '0.0578512396694215', EffortVariance: '0.0555555555555556', ScopeDeviation: '-0.944040371061728', DefectDensity: '0' },
                { ProjectId: 1000175243, ProjectName: 'Ford FEDE Multisite Robustness', Status: 'Active', OffshorePM: 'Milan,Lakshmi,Rameez', Milestone: 'Coding', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: '-0.956122309063485', DefectDensity: '0' },
                { ProjectId: 1000175244, ProjectName: 'Ford: TCBOM Reporting', Status: 'Active', OffshorePM: 'Gobi,Anbu,Rameez', Milestone: 'Design', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: '-0.911471950037687', DefectDensity: '0' },
                { ProjectId: 1000175245, ProjectName: 'Ford Automated BOM Analytics', Status: 'Active', OffshorePM: 'Gobi,Anbu,Rameez', Milestone: 'Design', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: '-0.965903036760788', DefectDensity: '0' }],
            Amber: [
                { ProjectId: 1000062963, ProjectName: 'Ford SharePoint FixedCapacity', Status: 'Active', OffshorePM: 'Prabhakar', Milestone: 'App Maintenance', ScheduleVariance: '0', EffortVariance: '0.0443087008343265', ScopeDeviation: '-0.934981447896042', DefectDensity: '0' },
                { ProjectId: 1000170018, ProjectName: 'Ford WebFOCUS Migration', Status: 'Active', OffshorePM: 'Buhari (125295),Rameez', Milestone: 'UAT', ScheduleVariance: '0', EffortVariance: '0.117668976823906', ScopeDeviation: '0', DefectDensity: '0.0173611111111111' }],
            Red: [
                { ProjectId: 1000111152, ProjectName: 'Ford DI Architecture&Modelling ', Status: 'Active', OffshorePM: 'Amit Bhatia (417250)/Jitender (291428),Rameez', Milestone: 'Prod Move', ScheduleVariance: '0.303691275167785', EffortVariance: '-0.159267553681992', ScopeDeviation: '-0.979596793142043', DefectDensity: '0.00605601595869651' },
                { ProjectId: 1000138291, ProjectName: 'Ford Genesis Wave-3', Status: 'Active', OffshorePM: 'Maha (105727)/Muruganandam, Periasamy ', Milestone: 'Dry Run 4', ScheduleVariance: '0', EffortVariance: '0', ScopeDeviation: 'Data Not Provided', DefectDensity: '0' },
                { ProjectId: 1000133218, ProjectName: 'FMCC ODS Development', Status: 'Active', OffshorePM: 'Maha (105727)/Dass Duraisamy', Milestone: 'Launch', ScheduleVariance: '0', EffortVariance: '0.0629800307219662', ScopeDeviation: '-0.973542807617019', DefectDensity: '0.00408591166904116' },
                { ProjectId: 1000144318, ProjectName: 'FMCC Quantum Architecture Svcs', Status: 'Active', OffshorePM: 'Maha (105727)/Dass Duraisamy', Milestone: '', ScheduleVariance: '0.816438356164384', EffortVariance: '0.00647832047525604', ScopeDeviation: '0', DefectDensity: '0' },
                { ProjectId: 1000144328, ProjectName: 'Ford B2C Integration Service Project UK', Status: 'Active', OffshorePM: 'Maha (105727)/Kishore Subramanian', Milestone: 'Coding', ScheduleVariance: '0', EffortVariance: '-0.0627306273062731', ScopeDeviation: '-0.974690388540986', DefectDensity: '0.00498753117206983' },
                { ProjectId: 1000156190, ProjectName: 'Ford FordPass', Status: 'Active', OffshorePM: 'Maha (105727)/Vignesh T', Milestone: 'Coding', ScheduleVariance: '0', EffortVariance: '0.850374064837905', ScopeDeviation: '-0.978220494017956', DefectDensity: 'Data Not Provided' },
                { ProjectId: 1000159964, ProjectName: 'Ford Hadoop Data Landing', Status: 'Active', OffshorePM: 'Maha (105727)/Ilango Sakthivel', Milestone: 'Coding', ScheduleVariance: '-1', EffortVariance: 'Data Not Provided', ScopeDeviation: 'Data Not Provided', DefectDensity: '0' },
                { ProjectId: 1000169675, ProjectName: 'Ford VSEM TC Upgrade', Status: 'Active', OffshorePM: 'Syed,Abdulla,Lakshmi,Rameez', Milestone: 'Unit Testing', ScheduleVariance: '0', EffortVariance: '0.395897395975244', ScopeDeviation: '-0.998567650845999', DefectDensity: '0' },
                { ProjectId: 1000167860, ProjectName: 'Ford Global Track and Trace', Status: 'Active', OffshorePM: 'Maha (105727)/Diwakar Raja', Milestone: 'Coding', ScheduleVariance: '0', EffortVariance: '0.0204918032786885', ScopeDeviation: '-0.978267277803145', DefectDensity: '0' },
                { ProjectId: 1000167725, ProjectName: 'Ford Pine Needle', Status: 'Active', OffshorePM: 'Sudhakar (114308)', Milestone: '', ScheduleVariance: '0', EffortVariance: '0.257517630465444', ScopeDeviation: '-0.986985539883424', DefectDensity: 'Data Not Provided' },
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

        $scope.myFilter = function () {
            return item === 'red' || item === 'blue';
        };


        // Individual Project Details

        var values = { ScheduleVariance: "0%", EffortVariance: "0%", EffortBurnt: "76.4%", RevenueBurnt: "68.5%", ScopeDeviation: "1.24%", OpenCodereviewcomments: "8 of 8", UTdefects: "43 of 43", OpenSITDefects: "3 of 3", OpenUATdefects: "1 of 1", DefectDensity: "0.88%", CodeQualityIssues: "0", CodeCoverage: "NA", ofRisksopen: "0", Successful: "3", Missed: "0", UpComing: "0", }
        $scope.Values = values;

    }

    app.controller("MainController", MainController);

}());