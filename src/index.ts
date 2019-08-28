const angular = require('angular');
const app = angular.module('App', []);

import MainCtrl from './MainCtrl';

app.directive('tablecomponent', function() {
	return {
		scope: {
			displayColumns: '=',
			data: '=',
			info: '='
	    },
		templateUrl: 'templates/table.html',
		link: function(scope: any, el: any, attr: any) {
			scope.changePermission = function(result: any): void {
				scope.$emit('changePermission', result);
			};
		}
	}
});
app.controller('mainCtrl', MainCtrl);
