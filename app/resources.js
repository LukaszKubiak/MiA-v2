(function () {
    'use strict';

    angular
        .module('bnApp')
        .factory('Messages', Messages);

    Messages.$inject = ['Restangular'];
    function Messages(Restangular) {
        var service = Restangular.service('messages');
        return  service;
    }
})();