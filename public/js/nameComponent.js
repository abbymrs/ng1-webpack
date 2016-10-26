angular.module('name.component',[])
	.component('nameDetail', {
		bindings: {
			names: '=',
			onClick: "&",
		},
		template: `
			<ul ng-if="$ctrl.isShow">
				<li ng-repeat="name in $ctrl.names">
					<div ng-show="!$ctrl.canEditable">
						<span ng-click="$ctrl.onClick(name)">{{name.name}}</span>
						<span>{{name.age}}</span>
						<span>{{name.sex}}</span>
						<button ng-click="$ctrl.delete($index)">delete</button>
						<button ng-click="$ctrl.edit($index)">edit</button>
					</div>
					
					<div ng-if="$ctrl.canEditable && $ctrl.currentIndex==$index">
						name: <input type="text" name="name" ng-model="name.name"/><br>
						age: <input type="text" name="name" ng-model="name.age"/><br>
						sex: <input type="text" name="name" ng-model="name.sex"/>
						<button ng-click="$ctrl.save()">save</button>
					</div>
				</li>
			</ul>
			<div>{{name}}</div>
		`,
		controller: function($timeout,$element,$attrs) {
			this.isShow = false;
			this.canEditable = false;
			this.current = null;

			this.$onInit = function(){
				var _this = this;
				$timeout(function(){
					_this.isShow = true;
				},1000);
			};
			this.$onChanges = function(){
				console.log('changed');
			}
			this.$doCheck = function(){
				console.log('checked!');
			}
			this.$postLink = function(){
				console.log('view initial!');
			}
			this.$onDestroy =function(){
				console.log('deleted!');
			}
			this.delete = function(index){
				this.names.splice(index,1);
			}
			this.edit = function(index){
				this.canEditable = true;
				this.currentIndex = index;
			}
			this.save = function(){
				this.canEditable = false;
			}
			console.log(this.$element, this.$attrs);
		},

	})