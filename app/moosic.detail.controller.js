(function() {
    'use strict';

    angular
        .module('moosicApp')
        .controller('MoosicDetailsController', Controller);

    Controller.$inject = ['MoosicFactory', '$log', '$stateParams', ];

    /*   @ngInject */
    function Controller(MoosicFactory, $log, $stateParams) {
        var vm = this;
        vm.title = 'MoosicDetailsController';


        vm.hello = "hello";
        console.log(vm.hello);



        /*getDetails($stateParams.name);*/

        function getDetails(music) {
            var url = 'http://www.omdbapi.com/?t=' + movie;
            MoosicFactory.getMusic(url).then(
                function(response) {
                    vm.movie = response.data;

                    console.log(vm.movie);
                },

                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });

        };

    };
})();
