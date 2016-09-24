(function () {
    'use strict';
    angular
        .module('bnApp',
            [
                'ui.router',
                'restangular',
                'ui.bootstrap',
                'dialogs.main',
                'ngMap'
            ])
        .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }]
        )
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/news");
        })
        .config(['RestangularProvider', function (RestangularProvider) {
            RestangularProvider.setBaseUrl('https://restgra.herokuapp.com');

        }])
    ;
})();
