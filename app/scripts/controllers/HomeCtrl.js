(function(){
    function HomeCtrl($scope, Message, Room, $uibModal, $cookies) {
        this.rooms = Room.all;
        $scope.currentRoom = null;

        this.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/addRoom.html',
                controller: 'ModalCtrl as modal',
                size: 'sm',
            });
        };

        $scope.setCurrentRoom = function (room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            $scope.currentUser = $cookies.blocChatCurrentUser;
            console.log($scope.messages);
        };

        $scope.sendMessage = function(newMessage) {
            console.log(newMessage);
              Message.send(newMessage, $scope.currentRoom.$id);
              $scope.newMessage = "";
        }

        // $scope.logOut = function() {
        //  	$cookies.remove("blocChatCurrentUser");
        //  	$uibModal.open({
 	//   			// Modal configuration object properties
 	//   			templateUrl: '/templates/Modal.html',
 	//   			controller: 'ModalCtrl as modal',
 	//   			size: 'sm',
 	//   			backdrop: 'static',
 	//   			keyboard: false
 	//   		})
        //  }

         $scope.deleteRoom = function(roomId) {
         	Room.delete(roomId);
        }
    };


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Message', 'Room', '$uibModal', '$cookies', HomeCtrl]);
})();
