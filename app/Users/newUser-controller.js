(function () {
    'use strict';

    angular
        .module('bnApp')
        .controller('newUserController', newUserController);

    newUserController.$inject = ['Users','$uibModalInstance'];
    function newUserController(Users,$uibModalInstance) {
        var vm = this;
        vm.addUser = addUser;

        function addUser() {
            Users.one().post(undefined,vm.user).then(function(response){
                $uibModalInstance.close(response);
            });
        }
    }
})();