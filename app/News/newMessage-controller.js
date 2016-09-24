(function () {
    'use strict';

    angular
        .module('bnApp')
        .controller('newMessageController', newMessageController);

    newMessageController.$inject = ['Messages','$uibModalInstance'];
    function newMessageController(Messages,$uibModalInstance) {
        var vm = this;
        vm.addMessage = addMessage;

        function addMessage() {
            Messages.one().post(undefined,vm.message).then(function(response){
                $uibModalInstance.close(response);
            });
        }
    }
})();