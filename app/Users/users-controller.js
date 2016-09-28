(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('users', {
                    url: "/users",
                    templateUrl: "Users/templates/users.html",
                    controller: "usersController as vm"
                })
        })
        .controller('usersController', usersController);

    usersController.$inject = ['Users', 'dialogs'];
    function usersController(Users, dialogs) {
        var vm = this;
        vm.newUser = newUser;

        activate();
        function activate() {
            Users.one().get().then(function (users) {
                vm.users = users;
            })
        }

        function newUser() {
            var dialog = dialogs.create('Users/templates/newUser.html', 'newUserController', {}, {}, 'vm');
            dialog.result.then(function (user) {
                vm.users.push(user);
            });

        }
    }
})();