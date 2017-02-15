/**
 * Created by siaskov on 2/4/17.
 */


APP.controller('MenuCtrl', ['$scope',function($scope) {

    var menuLinks = [
        {name: 'Лицевой счет', href: APP.constants.ACCOUNT_HREF},
        {name: 'Счетчики', href: APP.constants.COUNTERS_HREF },
        {name: 'Журналы', href: APP.constants.JOURNALS_HREF },
        {name: 'Обращения', href: APP.constants.APPEAL_HREF}
    ];

    $scope.links = [].concat(menuLinks);

    $scope.playMarketHref = APP.constants.PLAYSTORE__ADRESS;

    $scope.appleStoreHref = APP.constants.APPSTORE_ADDRESS;

}]);
