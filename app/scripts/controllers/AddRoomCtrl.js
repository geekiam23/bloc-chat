(function(){
    function AddRoomCtrl(Room, $uibModalInstance, $scope) {
        $scope.close = function () {
            $uibModalInstance.dismiss();
        };
        $scope.submit = function (roomName) {
            console.log(Room);
            Room.add(roomName);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['Room', '$uibModalInstance', '$scope', AddRoomCtrl]);
})();
