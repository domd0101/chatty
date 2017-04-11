'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {

      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( newMessage,username,picture ) {
        return $http.post('/messages', { message: newMessage, username: username, picture: picture});
      }

  });
