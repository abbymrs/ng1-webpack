angular.module('ballApp', ['dataService'])
    .controller('ballCtrl', function($scope, $interval, data) {

        $scope.flag = false;
        $scope.RANProgress = 0;
        $scope.COREProgress = 0;
        var oldUL = document.querySelector('.old-msg');
        $scope.showInfo = function() {
            $scope.flag = true;
            for (var i = 0; i < $scope.datas.length; i++) {
                if($scope.datas[i].status == 'ready'){
                	$scope.datas[i].status = 'none';
                }
            }
            if (oldUL) {
                oldUL.remove();
            }

            var progress = 0;
            var timer = $interval(function() {
                if($scope.COREProgress >= 100){
                    $scope.COREProgress = 100;
                }
                if (progress >= 100) {
                    $interval.cancel(timer);
                    progress = 100;
                    $scope.RANProgress = 100;

                } else {
                    progress++;
                    $scope.RANProgress++;
                    $scope.COREProgress +=1.8;
                }

                if (progress == 1) {
                    $scope.datas[0].status = 'ready';
                }
                if (progress == 2) {
                    $scope.datas[1].status = 'initialed';
                }
                if (progress == 5) {
                    $scope.datas[1].status = 'ready';
                    $scope.datas[1].message = complete($scope.datas[1].status, $scope.datas[1].message);
                }
                if (progress == 6) {
                    $scope.datas[2].status = 'initialed';
                }
                if (progress == 15) {
                    $scope.datas[3].status = 'initialed';
                }
                if (progress == 18) {
                    $scope.datas[7].status = 'initialed';
                }
                if (progress == 20) {
                    $scope.datas[3].status = 'ready';
                    $scope.datas[3].message = complete($scope.datas[3].status, $scope.datas[3].message);
                }
                if (progress == 25) {
                    $scope.datas[4].status = 'initialed';
                }
                if (progress == 30) {
                    $scope.datas[4].status = 'ready';
                    $scope.datas[4].message = complete($scope.datas[3].status, $scope.datas[4].message);
                    $scope.datas[8].status = 'initialed';
                }
                if (progress == 35) {
                    $scope.datas[9].status = 'initialed';
                    $scope.datas[8].status = 'ready';
                    $scope.datas[8].message = complete($scope.datas[8].status, $scope.datas[8].message);
                }
                if (progress == 40) {
                    $scope.datas[9].status = 'ready';
                    $scope.datas[9].message = $scope.datas[9].message = complete($scope.datas[9].status, $scope.datas[9].message);
                }
                if (progress == 45) {
                    $scope.datas[11].status = 'initialed';
                }
                if (progress == 50) {
                    $scope.datas[12].status = 'initialed';
                }
                if (progress == 55) {
                    $scope.datas[12].status = 'ready';
                    $scope.datas[12].message = complete($scope.datas[12].status, $scope.datas[12].message);
                    $scope.datas[5].status = 'initialed';
                }
                if (progress == 60) {
                    $scope.datas[5].status = 'ready';
                    $scope.datas[5].message = complete($scope.datas[5].status, $scope.datas[5].message);
                    $scope.datas[2].status = 'ready';
                    $scope.datas[2].message = complete($scope.datas[2].status, $scope.datas[2].message);
                    $scope.datas[6].status = 'initialed';
                    $scope.datas[13].status = 'initialed';
                }
                if (progress == 65) {
                    $scope.datas[6].status = 'ready';
                    $scope.datas[6].message = complete($scope.datas[6].status, $scope.datas[6].message);
                    $scope.datas[10].status = 'initialed';
                    $scope.datas[11].status = 'ready';
                    $scope.datas[11].message = complete($scope.datas[11].status, $scope.datas[11].message);
                    $scope.datas[13].status = 'ready';
                    $scope.datas[13].message = complete($scope.datas[13].status, $scope.datas[13].message);
                    $scope.datas[14].status = 'initialed';
                }
                if (progress == 80) {
                    $scope.datas[7].status = 'ready';
                    $scope.datas[7].message = complete($scope.datas[7].status, $scope.datas[7].message);
                    $scope.datas[15].status = 'initialed';
                }
                if (progress == 85) {
                    $scope.datas[15].status = 'ready';
                    $scope.datas[15].message = complete($scope.datas[15].status, $scope.datas[15].message);
                    $scope.datas[16].status = 'initialed';
                }
                if (progress == 90) {
                    $scope.datas[10].status = 'ready';
                    $scope.datas[10].message = complete($scope.datas[10].status, $scope.datas[10].message);
                    $scope.datas[16].status = 'ready';
                    $scope.datas[16].message = complete($scope.datas[16].status, $scope.datas[16].message);
                }
                if (progress == 95) {
                    $scope.datas[17].status = 'initialed';
                }
                if (progress == 100) {
                    $scope.datas[14].status = 'ready';
                    $scope.datas[14].message = complete($scope.datas[14].status, $scope.datas[14].message);
                    $scope.datas[17].status = 'ready';
                    $scope.datas[17].message = complete($scope.datas[17].status, $scope.datas[17].message);

                }
            }, 100);
        };
        data.query(function(data) {
            console.log(data[1].sliceName);
            $scope.datas = data[1].msgs;
        });

        //select str from index=1;
        $scope.slice = function(str) {
            return str.slice(1);
        };

        var complete = function(status, str) {
            if (status == 'ready') {
                if (str.indexOf('Ready') >= 0) {
                    str = str;
                } else {
                    str += ' Ready.'
                }
            }
            return str;
        }
    });
