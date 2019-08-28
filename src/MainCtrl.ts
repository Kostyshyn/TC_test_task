interface IMainCtrl {
	displayColumns: string[];
	data: any[];
	info: any[];
	changePermission: (event: any, result: any) => void;
}

export default class MainCtrl implements IMainCtrl {

	public displayColumns: string[] = ['section', 'view', 'edit', 'remove'];

	public data: any[] = [
		{
			section: 'Calendar',
			view: false,
			edit: false,
			remove: false
		},
		{
			section: 'Profile',
			view: false,
			edit: false,
			remove: false
		}
	];

	public info: any = {
		section: {
			type: 'string',
			label: 'Sections'
		},
		view: {
			type: 'checkbox',
			label: 'View'
		},
		edit: {
			type: 'checkbox',
			label: 'Edit',
			related: 'view'
		},
		remove: {
			type: 'checkbox',
			label: 'Remove',
			related: 'view'
		}
	};

	public listeners: any = {
		'changePermission': this.changePermission
	};


    static $inject: Array<string> = ['$scope'];

    constructor($scope: any){
    	$scope.vm = this;

    	for (let l in this.listeners) {
    		if (this.listeners.hasOwnProperty(l) && this.listeners[l]) {
		    	$scope.$on(l, this.listeners[l].bind(this));
    		}
    	}

    }

    public changePermission(event: any, result: any): void {
    	console.log('Result', result);
    }
}