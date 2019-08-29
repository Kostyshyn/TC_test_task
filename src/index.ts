const angular = require('angular');
const app = angular.module('App', []);

import MainCtrl from './MainCtrl';
import TableCtrl from './TableCtrl';

const tableDir = function() {
	return {
		scope: {
			displayColumns: '=',
			data: '=',
			info: '='
	    },
		templateUrl: 'templates/table.html',
		controller: TableCtrl,
		controllerAs: 'vm'
	}
}

app.directive('tablecomponent', tableDir);
app.controller('mainCtrl', MainCtrl);