angular.module('navApp',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
				url: '/home',
				template: '<div>Welcome to home page!</div>'
			})
			.state('recommend',{
				url: '/recommend',
				template: '<div>recommend</div>'
			})
			.state('videos',{
				url: '/videos',
				template: '<div>videos</div>'
			})
			.state('shopping',{
				url: '/shopping',
				template: '<div>shopping</div>'
			})
	})
	.directive('navBar', function(){
		return {
			restrict: 'EA',
			scope:{},
			templateUrl: 'public/views/tab.html',
			controller: function($scope){
				$scope.tabs = ['Home','Recommend','Videos','Shopping'];
			}
		}
	})
	.controller('navCtrl', function($scope){

	})