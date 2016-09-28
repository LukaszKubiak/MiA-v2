(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('authorization', {
                    url: "/",
                    templateUrl: "Authorization/templates/authorization.html",
                    controller: "authorizationController as vm"
                })
        })
        .controller('authorizationController', authorizationController);

    authorizationController.$inject = ['$rootScope', '$state', 'Restangular','$base64', '$http'];
    function authorizationController($rootScope, $state, Restangular,$base64, $http) {
        var vm = this;
        vm.authorize = authorize;

        activate();
        function activate() {
        }

        function authorize() {
            var encoded = $base64.encode(vm.user+':'+vm.password);
            console.info(encoded);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + encoded;
            Restangular.one('').get().then(function (response) {
                if(response == 'Authorized'){
                    $rootScope.authorized = true;
                    $state.go("news");
                }
            })
        }
    }
})();