(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
            return {
                all: rooms,
                add: function(roomName) {
                    rooms.$add({ name: roomName });
                },

                delete: function(roomId) {
                    rooms.$remove(roomId);
                }
            };
        }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
