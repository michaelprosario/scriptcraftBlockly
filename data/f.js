exports.f = function(player){ 
 var drone = new Drone(player); 
 for (var count = 0; count < 10; count++) {
  drone.box('1',1,1,1);
  drone.up(1);
  drone.fwd(1);
}


 }; 
 