(function() {
    'use strict';
    angular.module('moosicApp').factory('mashapeHttpInterceptor', function() {
        return {
            request: function(request) {
                request.headers["X-Mashape-Key"] = 'tKqONvHheWmshcqagpfyWMKIUQxwp19t8Vxjsns7RJ2knacRv4'
                request.headers["Accept"] = 'text/plain'
                request.headers["Accept"] = 'application/json'
                return request;
            }
        };
    });

})();
