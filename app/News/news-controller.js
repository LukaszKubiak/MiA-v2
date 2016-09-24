(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('news', {
                    url: "/news",
                    templateUrl: "News/templates/news.html",
                    controller: "newsController as vm"
                })
        })
        .controller('newsController', newsController);

    newsController.$inject = ['Messages','dialogs'];
    function newsController(Messages,dialogs) {
        var vm = this;
        vm.newMessage = newMessage;

        activate();
        function activate() {
            Messages.one().get().then(function (messages) {
                vm.messages = messages;
            })
        }

        function newMessage() {
            var dialog = dialogs.create('News/templates/newMessage.html', 'newMessageController', {}, {}, 'vm');
            dialog.result.then(function (message) {
                vm.messages.push(message);
            });

        }
    }
})();