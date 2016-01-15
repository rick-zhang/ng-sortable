/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').controller('MyTableController', ['$scope', function ($scope) {

    var i;
    $scope.itemsList = {
        items: []
    };

    for (i = 0; i <= 2; i += 1) {
        $scope.itemsList.items.push({'id': i, 'label': 'Item A_' + i});
    }
    //$scope.sortableOptions = {
    //    containment: '#table-container',
    //    containerPositioning: 'relative'
    //};

    $scope.sortableOptions = {
        containment: '#my-table-container'
    };
}]);