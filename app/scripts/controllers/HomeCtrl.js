(function(){
    function HomeCtrl($scope, Message, Room, $uibModal) {
        this.rooms = Room.all;

        this.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/addRoom.html',
                controller: 'AddRoomCtrl as addRoom',
                size: 'sm',
            });
        };

        $scope.setCurrentRoom = function (room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            console.log($scope.messages);
        };
    };


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Message', 'Room', '$uibModal', HomeCtrl]);
})();
