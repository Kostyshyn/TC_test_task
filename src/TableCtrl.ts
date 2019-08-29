interface ITableCtrl {
	scope: any;
	checkboxes: any;
	masterCheck: (col: string) => void;
	changePermission: (col: string) => void;
	disabled: (related: [], source: any) => boolean;
}

export default class TableCtrl implements ITableCtrl {

	public checkboxes: any = {};

	public scope: any;

    static $inject: string[] = ['$scope'];

    constructor($scope: any){
    	$scope.vm = this;

    	for (let i in $scope.info) {
    		if ($scope.info.hasOwnProperty(i) && $scope.info[i] && $scope.info[i].type === 'checkbox') {
		    	this.checkboxes[i] = $scope.data.every((d: any) => d[i]);
    		}
    	}

    	this.scope = $scope;

    }

    public masterCheck(col: string): void {
    	this.scope.data = this.scope.data.map((d: any) => Object.assign({}, d, { [col]: this.checkboxes[col] }));
    	this.scope.$emit('change', this.scope.data);
    }

	public changePermission(col: string): void {
		this.checkboxes[col] = this.scope.data.every((d: any) => d[col]);
		this.scope.$emit('change', this.scope.data);
	}

	public disabled(related: [], source: any) {
		return related.every((r: string) => source[r]);
	}
}