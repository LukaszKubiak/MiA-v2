(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider){
            $stateProvider
                .state('map', {
                    url: "/map",
                    templateUrl: "Map/templates/map.html",
                    controller: "mapController as vm",
                })
        })
        .controller('mapController', mapController);

    mapController.$inject = [];
    function mapController() {
        var vm = this;

    }
})();