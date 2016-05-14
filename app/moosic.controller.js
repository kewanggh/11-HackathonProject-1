(function() {
    'use strict';

    angular
        .module('moosicApp')
        .controller('MoosicController', Controller);

    Controller.$inject = ['MoosicFactory', '$log', '$sce', '$timeout'];

    /* @ngInject */
    function Controller(MoosicFactory, $log, $sce, $timeout) {
        var vm = this;
        vm.title = 'MoosicController';


        vm.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };


        $("#abouttab").on("click", function() {
            $("#quote").hide();
        });

        $("#apitab").on("click", function() {
            $("#quote").hide();
        });
        $("#toptab").on("click", function() {
            $("#quote").show();
        });

        var get = "GET";
        var post = "POST";

        vm.getMusic = function(music) {
            $("#quote").hide();
            var url = 'https://deezerdevs-deezer.p.mashape.com/search?q=' + music;
            MoosicFactory.getMusic(url, get).then(
                function(response) {
                    vm.musicResults = response.data;
                    vm.musicArray = vm.musicResults.data;
                    console.log(vm.musicArray);
                    console.log(vm.musicArray[0].album.cover_small)


                },
                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };


        vm.find = function(phrase) {
            $("#quote").hide();
            var url = 'https://loudelement-free-natural-language-processing-service.p.mashape.com/nlp-text/?text=' + phrase;
            MoosicFactory.getMusic(url, get).then(
                function(response) {
                    vm.results = response.data;
                    /* vm.movies = vm.results.Search;*/
                    vm.mood = vm.results["sentiment-text"];
                    console.log(vm.mood);
                    console.log(vm.results["sentiment-score"]);
                    if (vm.mood === "positive") {
                        vm.getMusic("happy");

                        vm.getVine("funny");

                    } else if (vm.mood === "neutral") {
                        vm.getMusic("relax");
                        vm.getVine("top");
                    } else if (vm.mood === "negative") {
                        vm.getMusic("sad");
                        vm.getVine("popular");
                    }


                },
                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };

        vm.getVine = function(vine) {
            var url = 'https://community-vineapp.p.mashape.com/timelines/tags/' + vine;
            MoosicFactory.getMusic(url, get).then(
                function(response) {
                    vm.vineResults = response.data;
                    /*vm.vineArray = vm.vineResults.data;*/
                    vm.vineArray = vm.vineResults.data.records;
                    vm.test = vm.vineArray[0].videoUrl;
                    console.log(vm.test);
                    console.log(vm.vineArray);
                    /* $timeout(function() {
                         for(var i=0; i < vm.musicArray.length; i++){
                         vm.musicArray[i].video = vm.vineArray[i]["videoUrl"];
                     }
                     }, 2000);*/


                },
                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };

        vm.quote = "famous";

        vm.getQuote = function(quote) {
            var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=' + quote;
            MoosicFactory.getMusic(url, post).then(
                function(response) {
                    vm.qouteResults = response.data;
                    /*   console.log(vm.qouteResults);*/


                },
                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };

        getQuote(vm.quote);

        function getQuote(quote) {
            var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=' + quote;
            MoosicFactory.getMusic(url, post).then(
                function(response) {
                    vm.qouteResults = response.data;
                    /*console.log(vm.qouteResults);*/

                },
                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };





    };
})();
