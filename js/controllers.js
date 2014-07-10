/*global angular, $ */
angular.module('app.controllers', []).
    controller('NavCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        'use strict';
        
        var nav = document.getElementsByTagName('nav')[0],
            navItems = nav.querySelectorAll('li a');
        
        $('nav a').tooltip({
            placement: 'left'
        });
        
        nav.addEventListener('click', function (e) {
            var target = e.target;
            
            if (target.nodeName === 'A') {
                window.scrollTo(0, 0);
            }
        }, false);
        
        
        document.addEventListener('keydown', function (e) {
            var previous,
                next;
            
            if (e.keyCode === 37) {
                [].map.call(navItems, function (elm) {
                    if (elm.classList.contains('active')) {
                        previous = elm.parentNode.previousElementSibling && elm.parentNode.previousElementSibling.children[0];
                        if (previous) {
                            previous.click();
                            $('nav a').not($(previous)).tooltip('hide');
                            $(previous).tooltip('show');
                            $timeout(function () {
                                $(previous).tooltip('hide');
                            }, 800);
                        }
                        return;
                    }
                });
            }
            
            if (e.keyCode === 39) {
                [].map.call(navItems, function (elm) {
                    if (elm.classList.contains('active')) {
                        next = elm.parentNode.nextElementSibling && elm.parentNode.nextElementSibling.children[0];
                        if (next) {
                            next.click();
                            $('nav a').not($(next)).tooltip('hide');
                            $(next).tooltip('show');
                            $timeout(function () {
                                $(next).tooltip('hide');
                            }, 800);
                        }
                        return;
                    }
                });
            }
        }, false);
    }]);