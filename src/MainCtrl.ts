import { toJson } from 'angular';

interface IMainCtrl {
	displayColumns: string[];
	data: any[];
	info: any[];
	onInit: () => void;
	onChange: (event: any, result: any) => void;
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
		},
		{
			section: 'Property',
			view: false,
			edit: false,
			remove: false
		},
		{
			section: 'Contacts',
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
			label: 'View',
			icon: 'fa-eye'
		},
		edit: {
			type: 'checkbox',
			label: 'Edit',
			icon: 'fa-edit',
			related: ['view']
		},
		remove: {
			type: 'checkbox',
			label: 'Remove',
			icon: 'fa-times',
			related: ['view', 'edit']
		}
	};

	public listeners: any = {
		'change': this.onChange
	};


    static $inject: string[] = ['$scope'];

    constructor($scope: any){
    	$scope.vm = this;

    	for (let l in this.listeners) {
    		if (this.listeners.hasOwnProperty(l) && this.listeners[l]) {
		    	$scope.$on(l, this.listeners[l].bind(this));
    		}
    	}

    	this.onInit();

    }

    public onInit(): void {
    	try {
    		const state = localStorage.getItem('state');
	        if (state) {
	        	this.data = JSON.parse(state);
	        }
	    } catch(e) {
	        console.log(e);
	    }
    }

    public onChange(event: any, result: any): void {
    	try {
	        localStorage.setItem('state', toJson(result));
	    } catch(e) {
	        console.log(e);
	    }
    }

}