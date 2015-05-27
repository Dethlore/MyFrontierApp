function photonSpec(wave, color) {
    return {
        wavelength: wave,
        visibleColor: color
    }
};

var myApp = angular.module('myApp', []);
myApp.controller('listController', ['$scope', function($scope) {
    var test1 = new photonSpec('405', 'Violet');
    var test2 = new photonSpec('445', 'Blue');
    var test3 = new photonSpec('532', 'Green');
    var test4 = new photonSpec('650', 'Red');

    $scope.myVar = "Ichabod!";
    $scope.photonSpecs = [
        test1,
        test2,
        test3,
        test4
    ];
    $scope.addItem = addItem;
    $scope.saveItem = saveItem;
    $scope.deleteItem = deleteItem;

    function addItem() {
        $scope.photonSpecs.push(new photonSpec($scope.waveIn, $scope.colorIn));
        $scope.waveIn = "";
        $scope.colorIn = "";
    }

    function saveItem() {
    }

    function deleteItem(spec) {
        $scope.photonSpecs.splice($scope.photonSpecs.indexOf(spec), 1);
    }
}]);