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

    addPointController.$inject = [];
    function addPointController() {
        var vm = this;

    }
})();