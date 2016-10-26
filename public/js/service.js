angular.module('dataService',['ngResource'])
	.factory('data', function($resource){
		return $resource('/getInfo',{},{});
	});