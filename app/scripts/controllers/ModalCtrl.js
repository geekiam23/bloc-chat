(function(){
    function ModalCtrl(Room, $uibModalInstance, $scope, $cookies) {
        $scope.close = function () {
            $uibModalInstance.dismiss();
        };
        $scope.submit = function (roomName) {
            console.log(Room);
            Room.add(roomName);
            $uibModalInstance.close();
        };

        this.createUsername = function(username) {
            $cookies.put('blocChatCurrentUser', username);
            if (userName !== undefined) {
  					$uibModalInstance.close();
            }
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$scope', ModalCtrl]);
})();
