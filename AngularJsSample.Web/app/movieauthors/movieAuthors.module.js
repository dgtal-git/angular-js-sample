﻿(function () {

    'use strict';

    angular
        .module('movieAuthors', ['movieAuthorsServices'])
        .controller('movieAuthorsOverviewCtrl', movieAuthorsOverviewCtrl)
        .controller('movieAuthorProfileCtrl', movieAuthorProfileCtrl)
        .controller('movieAuthorManageCtrl', movieAuthorManageCtrl)
        ;

    movieAuthorsOverviewCtrl.$inject = ['$scope', 'movieAuthorsSvc'];
    function movieAuthorsOverviewCtrl($scope, movieAuthorsSvc) {
        var vm = this;
        movieAuthorsSvc.getMovieAuthors().then(function (result) {
            console.log(result.data.authors);
            //vm.movieAuthors = result.data.authors;
            //vm.data = new kendo.data.DataSource({ data: result.data.authors });

            $("#movieAuthorGrid").kendoGrid({
                dataSource: {
                    data: result.data.authors,
                    pageSize: 20
                },
                //height:500,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                groupable: true,
                sortable: true,
                filterable: true,
                resizable: true,
                columns: [
                    {
                        field: "id",
                        title: "Id",
                        width: "5%"
                    },
                    {
                        template: '<a ui-sref="movieAuthorProfile({id:#: data.id#})" href="/movieauthors/#: data.id#"><div align="center"><img src="#: data.imageUrl#" style="max-height: 100px" /></div></a>',
                        //field: "id",
                        title: "Foto",
                        width: "15%"
                    },
                    {
                        field: "firstName",
                        title: "Ime",
                        width: "10%"
                    },
                    {
                        field: "lastName",
                        title: "Prezime",
                        width: "10%"
                    },
                    {
                        field: "birthPlace",
                        title: "Mjesto rođenja",
                        width: "10%"
                    },
                    {
                        field: "biography",
                        title: "Opis",
                    },
                    {
                        field: "popularity",
                        title: "Popularnost",
                        width: "5%"
                    }
                ]
            });


        });

    };

    movieAuthorProfileCtrl.$inject = ['$scope', '$state', 'movieAuthor', 'movieAuthorsSvc', '$stateParams']
    function movieAuthorProfileCtrl($scope, $state, movieAuthor, movieAuthorsSvc, $stateParams) {
        var vm = this;

        vm.movieAuthor = movieAuthor;

        $("#delete-dialog").kendoDialog({
            width: "450px",
            title: "POZOR",
            closable: false,
            visible: false,
            modal: true,
            content:"<p>Jeste li sigurni da želite obrisati redatelja?<p/>",
            actions: [
                {
                    text: "Da",
                    action: function (e) {
                        movieAuthorsSvc.deleteMovieAuthor($stateParams.id).then(function (data) {
                            $state.go("movieAuthorsOverview");
                        });
                    }
                },
                {
                    text: "Ne",
                    primary:true
                }
            ]
        });

        $("#deleteButton").kendoButton({
            click: function (e) {
                $("#delete-dialog").data("kendoDialog").open();
                //$("#delete-dialog").open();
            }
        });
        $("#deleteButton").removeClass("k-button");

        console.log("Controller");
        console.log(movieAuthor);

    }

    movieAuthorManageCtrl.$inject = ['$scope', 'movieAuthorsSvc', 'movieAuthor', '$state', '$stateParams']
    function movieAuthorManageCtrl($scope, movieAuthorsSvc, movieAuthor, $state, $stateParams) {
        var vm = this;
        vm.movieAuthor = movieAuthor ? movieAuthor : null;
        console.log(vm.movieAuthor);


        $("#movieAuthorForm").kendoForm({
            orientation: "vertical",
            layout: "grid",
            grid: {
                cols: 2,
                gutter: 20
            },
            formData: vm.movieAuthor ? {
                firstName: vm.movieAuthor.firstName,
                lastName: vm.movieAuthor.lastName,
                birthDate: vm.movieAuthor.birthDate,
                birthPlace: vm.movieAuthor.birthPlace,
                biography: vm.movieAuthor.biography,
                imageUrl: vm.movieAuthor.imageUrl,
                imdbUrl: vm.movieAuthor.imdbUrl,
                popularity: vm.movieAuthor.popularity
            } : {},
            validatable: {
                validationSummary: true
            },
            buttonsTemplate: "",//Maknuti default gumbe za submit i clear
            items: [
                {
                    field: "firstName",
                    label: "Ime",
                    validation: {
                        required: true
                    },
                    colSpan: 1
                },
                {
                    field: "lastName",
                    label: "Prezime",
                    validation: {
                        required: true
                    },
                    colSpan: 1
                },
                {
                    field: "birthDate",
                    label: "Datum rođenja",
                    editor: "DatePicker",
                    editorOptions: {
                        max: new Date(),
                        min: new Date(1800, 0, 1)//1.1.1800
                    },
                    validation: {
                        required: true
                    },
                    colSpan: 1
                },
                {
                    field: "birthPlace",
                    label: "Mjesto rođenja",
                    validation: {
                        required: true
                    },
                    colSpan: 1
                },
                {
                    field: "biography",
                    label: "Opis",
                    editor: "Editor",
                    editorOptions: {
                        tools: [],
                        resizable: {
                            min: 50,
                            max: 300
                        },
                        paste: function (ev) {
                            ev.html = $(ev.html).text();
                        }

                    },
                    validation: {
                        required: true,
                        validSize: function (input) {
                            if (input.is("[name='biography']")) {
                                input.attr("data-validSize-msg", "String is too long, 2000 characters max");
                                console.log(input.val());
                                if (input.val().length > 2000) return false;
                                else return true;
                                //var validImdbLink = /^https?:\/\/(www\.)?imdb.com/g.test();
                                //var validImg = /\.jpg$/g.test(input.val()) || /\.jpeg$/g.test(input.val()) || /\.gif$/g.test(input.val()) || /\.png$/g.test(input.val());
                            }
                            return true;
                        }
                    },
                    colSpan: 2
                },
                {
                    field: "imageUrl",
                    label: "Foto URL",
                    validation: {
                        required: true,
                        validImageLink: function (input) {
                            if (input.is("[name='imageUrl']")) {
                                input.attr("data-validImageLink-msg", "Image link is invalid");
                                var validHttp = /^https?:\/\//g.test(input.val());
                                var validImg = /\.jpg$/g.test(input.val()) || /\.jpeg$/g.test(input.val()) || /\.gif$/g.test(input.val()) || /\.png$/g.test(input.val());
                                return validHttp && validImg;
                            }
                            return true;
                        }
                    },
                    colSpan: 2
                },
                {
                    field: "imdbUrl",
                    label: "IMDB URL",
                    validation: {
                        required: true,
                        validImdbLink: function (input) {
                            if (input.is("[name='imdbUrl']")) {
                                input.attr("data-validImdbLink-msg", "IMDB link is invalid");
                                var validImdbLink = /^https?:\/\/(www\.)?imdb.com/g.test(input.val());
                                //var validImg = /\.jpg$/g.test(input.val()) || /\.jpeg$/g.test(input.val()) || /\.gif$/g.test(input.val()) || /\.png$/g.test(input.val());
                                return validImdbLink;
                            }
                            return true;
                        }
                    },
                    colSpan: 2
                }
                ,
                {
                    field: "popularity",
                    label: "Popularnost:",
                    editor: "NumericTextBox",
                    editorOptions: {
                        decimals: 0,
                        min: 1,
                        format: "n0"
                    },
                    validation: {
                        required: true
                    },
                    colSpan: 1
                }
            ],
            submit: function (e) {
                e.preventDefault();
                console.log(e.model);
                if (vm.movieAuthor == null) {
                    movieAuthorsSvc.createMovieAuthor(e.model).then(function (result) {
                        $state.go("movieAuthorsOverview");
                    });
                }
                else {
                    movieAuthorsSvc.updateMovieAuthor(vm.movieAuthor.id, e.model).then(function (result) {
                        $state.go("movieAuthorsOverview");
                    });
                }

            }
        });


        $("#submit-button").kendoButton({
            click: function (e) {
                $("#movieAuthorForm").submit();
            }
        });
        $("#submit-button").removeClass("k-button");

        //
        //if (vm.movieAuthor) {
        //    //update
        //}
        //else {
        //    //create
        //}

    }

})();
