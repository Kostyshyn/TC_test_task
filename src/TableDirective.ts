export default class TableDirective {

    static $inject: Array<string> = ['$scope'];

    constructor($scope: any){
    	$scope.vm = this;

    }
    
}