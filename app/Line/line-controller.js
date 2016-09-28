(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider){
            $stateProvider
                .state('line', {
                    url: "/line",
                    templateUrl: "Line/templates/line.html",
                    controller: "lineController as vm",
                })
        })
        .controller('lineController', lineController);

    lineController.$inject = ['Points'];
    function lineController(Points) {
        var vm = this;
        vm.changeLine = changeLine;
        vm.points = [];

        function changeLine(){
            Points.one(vm.line).get().then(function (response){
                vm.points = response;
            })
        }
    }
})();