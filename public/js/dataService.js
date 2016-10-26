angular.module('dataService1',[])
	.factory('data1',function(){
		var obj = {
			list : [],
			add: function(msg){
				this.list.push(msg);
			}
		};
		return obj;
	})