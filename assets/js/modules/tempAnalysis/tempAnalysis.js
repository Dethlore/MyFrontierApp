var cpuApp = angular.module('cpuApp', []);

cpuApp.controller('coreTempController', ['$scope', function($scope) {
    var logPath = "/logs/";
    $scope.selectYear = "2012-logs/";
    $scope.getData = function(dataParam){
        console.log("booyah");
        $.ajax({
            // retrieve logs
            url: logPath + dataParam + "CT-Log2012-02-2423-19-36.csv",
            success: function (data) {
                console.log(data);
            }
        });
    };

    var dataset = "";

    if (dataset == "") {
        loadCoreTempLogs($scope.selectYear);
    }
}]);