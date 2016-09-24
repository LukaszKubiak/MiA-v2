(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider){
            $stateProvider
                .state('addPoint', {
                    url: "/addPoint",
                    templateUrl: "AddPoint/templates/AddPoint.html",
                    controller: "addPointController as vm",
                })
        })
        .controller('addPointController', addPointController);

    addPointController.$inject = ['NgMap'];
    function addPointController(NgMap) {
        var vm = this;
        vm.setPosition = setPosition;
        vm.point = {};
        vm.map = {};
        NgMap.getMap().then(function(evtMap) {
            vm.map = evtMap;
        });

        function setPosition(event) {
            vm.map.setCenter(event.latLng);
            vm.point.latitude = event.latLng.lat();
            vm.point.longitude = event.latLng.lng();
        }

    }
})();