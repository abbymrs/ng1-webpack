angular.module('rangeValidator',[])
	.directive('range', function($q,$timeout){
		return {
			require: 'ngModel',
			link: function(scope,ele,attr,ctrl){
				
				ctrl.$validators.range = function(modelValue,viewValue){
					if(ctrl.$isEmpty(modelValue)){
						return true;
					}
					var flag = parseInt(viewValue);
					if( flag >= 1 && flag <= 10){
						return true;
					}
					return false;
				};
			}
		}
	})