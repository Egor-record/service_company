/**
 * Created by siaskov on 2/3/17.
 */

APP.controller('JournalsCtrl', ['$scope', "$http", function($scope, $http) {
    $http.get(APP.constants.REPORT_API).success(function(data) {
        $scope.reportData = data;
        $scope.journalsData = $scope.reportData.data.body;

    });

}]);