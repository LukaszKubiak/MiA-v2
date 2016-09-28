(function () {
    'use strict';

    angular
        .module('bnApp')
        .factory('Messages', Messages)
        .factory('Points', Points)
        .factory('Localization', Localization)
        .factory('Users', Users);

    Messages.$inject = ['Restangular'];
    function Messages(Restangular) {
        var service = Restangular.service('messages');
        return service;
    }

    Points.$inject = ['Restangular'];
    function Points(Restangular) {
        var service = Restangular.service('points');
        return service;
    }

    Users.$inject = ['Restangular'];
    function Users(Restangular) {
        var service = Restangular.service('users');
        return service;
    }

    Localization.$inject = ['Restangular'];
    function Localization(Restangular) {
        var service = Restangular.service('localization');
        return service;
    }

})();