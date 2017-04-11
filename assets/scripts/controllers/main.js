'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( newMessage,username,picture ) {
      if (newMessage,username,picture) {
        messageService.addMessage(newMessage,username,picture).then(function ( response ) {
          $scope.messages = response.data.messages;
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
