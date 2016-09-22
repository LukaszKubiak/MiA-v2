(function () {
    'use strict';

    angular
        .module('bnApp')
        .config(function ($stateProvider){
            $stateProvider
                .state('news', {
                    url: "/news",
                    templateUrl: "News/templates/news.html",
                    controller: "newsController as vm",
                })
        })
        .controller('newsController', newsController);

    newsController.$inject = [];
    function newsController() {
        var vm = this;
        
    }
})();