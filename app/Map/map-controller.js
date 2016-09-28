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

    mapController.$inject = ['Users','Localization', 'Visited'];
    function mapController(Users,Localization, Visited) {
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
            Visited.one(vm.user).get().then(function(response){
                vm.visited = response;
            })
        }
    }
})();