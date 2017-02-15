/**
 * Created by siaskov on 2/3/17.
 */

APP.controller('UserDataCtrl', ['$scope', "$http", function($scope, $http) {
    $http.get(APP.constants.USER_API).success(function(data) {
        $scope.userData = data;
        $scope.userPick = $scope.userData.data.avatar;

        if ($scope.userPick == null) {
            $scope.userPick = APP.constants.DEFAULT_FEMALE_PICK;
        }

        /* TODO: Сделать определение пола и выбор картинки от пола */

    });
}]);