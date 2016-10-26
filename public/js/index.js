angular.module('mainApp', [
        'ui.router',
        'Hello',
        'Name',
        'rangeValidator',
        'matchValidator',
        'name.component',
        'ballApp',
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/all');
        $stateProvider
            .state('all', {
                url: '/all',
                template: '<div ui-view></div>',
               
            })
            .state('all.demo1', {
                url: '/demo1',
                templateUrl: 'public/views/demo1.html',
                controller: function($scope, $location, $http) {
                    $scope.skip = function() {
                        $location.path('/demo2');
                    };
                    $scope.getInfo = function() {
                        $http.get('/api/query?name=abby&age=20').then(res => {
                            console.log(res);
                        });
                    };
                }
            })
            .state('all.demo2', {
                url: '/demo2',
                templateUrl: 'public/views/demo2.html',
                controller: function($scope, $timeout) {
                    $scope.number = () => 0;
                    $timeout(() => $scope.number = () => 100, 2000);
                    $scope.num = 0;
                    $scope.getCount = function() {
                        $scope.num += 1;
                    };
                },

            })
            .state('all.demo3', {
                url: '/demo3',
                templateUrl: 'public/views/demo3.html',
                controller: function($scope, $filter) {
                    var shadow = document.querySelector('#nameComponent').createShadowRoot();
                    var template = document.querySelector('#nameComponentTemplate');
                    shadow.appendChild(template.content);
                    console.log(template.content);
                    template.remove();
                    document.querySelector('#nameComponent').textContent = '陆凌牛';

                    $scope.users = [
                        { name: 'abby', age: 20 },
                        { name: 'lili', age: 20 },
                        { name: 'jame', age: 22 },
                        { name: 'jane', age: 19 }
                    ];
                    $scope.filter = $filter('filter')($scope.users, { age: 19 })[0].name;
                    $scope.obj = {
                        name: 'abby',
                        id: '1223fssdkrh37',
                        sex: 'female'
                    };
                    $scope.getData = function() {
                        return JSON.stringify($scope.obj);
                    }
                }
            })
            .state('all.ball', {
                url: '/ball',
                templateUrl: 'public/views/ball.html',
                controller: 'ballCtrl'
            })
            .state('all.arrow', {
                url: '/arrow',
                templateUrl: 'public/views/arrow.html',
            })
    })
    .filter('turnToArray', function() {
        return function(input) {
            var output = +input;
            if (isNaN(output)) {
                return input;
            } else {
                console.log('else');
                return output;
            }
        }
    })
    .controller('mainCtrl', function($scope, $state, $location, $window, $log) {
        var index;
        $scope.back = function() {
            location.href = '/';
            // $state.go('demo1');
        };
        $scope.$on('index', function(e, data) {
            console.log(data);
        });
        $scope.arr = [{ name: 'abby' }, { name: ' cici' }];
        $scope.str = '123456a';
        $scope.type = function(input) {
            return typeof input;
        };
        $scope.go = function() {
            // $location.url('/demo1');
            $window.location.href = 'http://www.google.com'
        };
        $log.debug('hello $log');

        $scope.names = [{
            name: 'abby',
            age: '20',
            sex: 'female'
        }, {
            name: 'cici',
            age: '19',
            sex: 'female'
        }, {
            name: 'john',
            age: '21',
            sex: 'male'
        }];
        $scope.onClick = function(name) {
            $log.info(name);
        };
    })

function upload(_this) {
    var file = _this.files[0];
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function() {
        var url = this.result;
        var imgBox = document.querySelector('.img-wrap');
        var img = document.createElement('img');
        img.src = url;
        img.style.width = '200px';
        img.style.display = 'block';
        imgBox.appendChild(img);
        var imgArr = document.querySelectorAll('img');
        var len = imgArr.length;
        if (len > 1) {
            imgArr[0].remove();
        };

    };
};
