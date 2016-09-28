(function () {
    'use strict';
    angular
        .module('bnApp',
            [
                'ui.router',
                'restangular',
                'ui.bootstrap',
                'dialogs.main',
                'ngMap',
                'base64'
            ])
        .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }]
        )
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
        })
        .config(['RestangularProvider', function (RestangularProvider) {
            RestangularProvider.setBaseUrl('https://restgra.herokuapp.com');

        }])
    ;
})();
