(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider){
            $stateProvider
                .state('map', {
                    url: "/map",
                    templateUrl: "Map/templates/map.html",
                    controller: "mapController as vm"
                })
        })
        .controller('mapController', mapController);

    mapController.$inject = ['Users','Localization'];
    function mapController(Users,Localization) {
        var vm = this;
       // vm.users = [];

        activate();

        function activate(){
            Users.one().get().then(function(response){
              vm.users=response;
            })
        }

        vm.changeUser = changeUser;

        function changeUser(){
            Localization.one(vm.user).get().then(function(response){
                vm.loc = response;
            })
        }
    }
})();