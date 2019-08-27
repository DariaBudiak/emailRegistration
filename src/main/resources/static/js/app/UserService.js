'use strict';

angular.module('demo.services', []).factory('UserService',
    ["$http", "CONSTANTS", function ($http, CONSTANTS) {
        var service = {};

        service.getAllUsers = function () {
            return $http.get(CONSTANTS.getAllUsers);
        }
        service.saveUser = function (userDto) {
            return $http.post(CONSTANTS.saveUser, userDto);
        }
        service.getUserByLoginOrEmail = function (loginOrEMail) {
            return $http.get(CONSTANTS.getUserUrl + loginOrEMail);
        }


        return service;
    }]);