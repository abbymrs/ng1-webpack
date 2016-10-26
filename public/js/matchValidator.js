angular.module('matchValidator',[])
	.directive('match', function($q,$timeout){
		return {
			require: 'ngModel',
			link: function(scope,ele,attr,ctrl){
				ctrl.$asyncValidators.match = function(modelValue,viewValue){
					var names = ['abby','cici','lily'];

					if(ctrl.$isEmpty(modelValue)){
						return $q.when();
					}
					
					var defer = $q.defer();

					$timeout(function(){
						if(names.indexOf(viewValue) === -1){
							console.log('available');
							defer.resolve();
						}else{
							console.log('not available');
							defer.reject();
						}
					},2000)
					console.log(defer.promise);
					return defer.promise;
				};
			}
		}
	})