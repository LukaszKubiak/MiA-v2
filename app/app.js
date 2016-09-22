(function () {
  'use strict';
  angular
      .module('bnApp',
          [
            'ui.router'
          ])
      .constant("GEMINI_BASE", "http://demo.mobilebox.pl/ws/")
      .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
          }]
      )
      .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/news");
      })
  ;
})();
