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
        saveDoc($scope.photonSpecs);
    }

    function deleteItem(spec) {
        $scope.photonSpecs.splice($scope.photonSpecs.indexOf(spec), 1);
    }

}])
.directive('theTime', function(){
    return {
        template: $(getSnippets()).html(),
        link: function ($scope, $element, $attrs) {
            var items = [ 1, 2, 3, 4, 5, 6 ];
            var results = [];
            $scope.myTime = new Date(Date.now());
            $scope.fireAsync = fireIt(items);

            function async(arg, callback) {
                console.log('do something with \''+arg+'\' at ' + new Date().getTime() + ', return 1 sec later');
                setTimeout(function() { callback(arg * 2); }, 1000);
            }
            function final() {
                console.log('Done', results);
            }

            function fireIt(items) {
                items.forEach(function (item) {
                    async(item, function (result) {
                        results.push(result + ": " + new Date().getTime());
                        if (results.length == items.length) {
                            final();
                        }
                    })
                });
            }
        }
    }
});