var cpuApp = angular.module('cpuApp', []);

cpuApp.controller('coreTempController', ['$scope', function($scope) {
    $scope.selectYear = "2012-logs/";
    var logPath = "/logs/";

    function loadCoreTempLogs(dataParam) {
        $.ajax({
           // retrieve logs
            url: logPath + dataParam + "*.csv",
            success: function (data) {
                console.log(data);
            }
        });
    }

    var dataset = "";

    if (dataset == "") {
        loadCoreTempLogs($scope.selectYear);
    }
}]);