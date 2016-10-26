angular.module('dataService',['ngResource'])
	.factory('data', function($resource){
		return $resource('/api/getInfo',{},{});
	});