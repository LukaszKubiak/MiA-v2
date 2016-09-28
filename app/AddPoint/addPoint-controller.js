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

    addPointController.$inject = ['NgMap','Points'];
    function addPointController(NgMap, Points) {
        var vm = this;
        vm.addPoint = addPoint;
        vm.setPosition = setPosition;
        vm.point = {};
        vm.map = {};
        NgMap.getMap().then(function(evtMap) {
            vm.map = evtMap;
        });

        function addPoint(){
            Points.one().post(undefined,vm.point).then(function(response){
                console.info(response);
            });
        }

        function setPosition(event) {
            vm.map.setCenter(event.latLng);
            vm.point.lat = event.latLng.lat();
            vm.point.lng = event.latLng.lng();
        }

    }
})();