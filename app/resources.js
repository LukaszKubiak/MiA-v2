(function () {
    'use strict';

    angular
        .module('bnApp')
        .factory('Messages', Messages)
        .factory('Points', Points)
        .factory('Localization', Localization)
        .factory('Visited', Visited)
        .factory('Users', Users);

    Messages.$inject = ['Restangular'];
    function Messages(Restangular) {
        var service = Restangular.service('messages');
        return service;
    }

    Visited.$inject = ['Restangular'];
    function Visited(Restangular) {
        var service = Restangular.service('visited');
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