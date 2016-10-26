angular.module('Name', ['dataService1','ngStorage'])
    .directive('myName', function() {
        return {
            restrict: 'E',
            templateUrl: 'public/views/name.html',
            scope: {},
            controller: function($scope,$localStorage,$interval, data1) {
                $scope.num = 0;
                var timer =  $interval(function(){
                    if($scope.num>=100){
                        $interval.cancel(timer);
                    }else{
                        $scope.num++;
                    }
                },100);
                console.log($scope.num);
                data1.add([12,3,4,5,5]);
                data1.add({num: $scope.num});
                data1.add({timer: timer});
            },
            link: function(scope, ele, attr, ctrl) {
               
            }
        }
    })
