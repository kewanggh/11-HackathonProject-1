(function() {
    'use strict';

    angular
        .module('moosicApp')
        .factory('MoosicFactory', MoosicFactory);

    MoosicFactory.$inject = ["$http", "$q", "$log"]; //maybe need ""

    /* @ngInject */
    function MoosicFactory($http, $q, $log) {
        var service = {
            getMusic: getMusic

            //, if more functions
        };
        return service;

        ////////////////




        function getMusic(url) {
            var defer = $q.defer();
            /*var url = 'http://www.omdbapi.com/?s=';*/

            $http({
                    method: 'GET',
                    url: url
                        /*   params: {
                                       s: movie,
                                       t: type
                           }*/
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            toastr.success('Successful!');
                        } else {
                            defer.reject(response);
                            toastr.warning('Sorry there has been an error connecting to the API <br/>' + response.config.url);
                        }
                    },
                    //failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;

        } //end getMovie function

    } //end factory function
})(); // last closing notation
