(function(){
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        this.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/addRoom.html',
                controller: 'AddRoomCtrl as addRoom',
                size: 'sm',
            });
        }

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
