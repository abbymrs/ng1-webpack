angular.module('Hello', ['dataService','ngStorage'])
    .directive('hello', function() {
        return {
            restrict: 'E',
            templateUrl: 'public/views/hello.html',
            scope: {},
            controller: function($scope,$localStorage,$timeout,$interval,data) {
                // data.add([12,3,4,5,5]);
                $timeout(function(){
                    $scope.data = data.list[0];
                    console.log(data);
                },0)
                $scope.stop = function(){
                    var timer = angular.copy(data.list[2].timer);
                    $interval.cancel(timer);
                }
                $scope.start = function(){
                    var timer = angular.copy(data.list[2].timer);
                    console.log('test');
                }
            },
            link: function(scope, ele, attr, ctrl) {
               
            }
        }
    })
