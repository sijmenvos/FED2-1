var app = app || {};

(function(){
 
    app.controller = {
            init: function() {
                
            }
        }
        
    app.setup = {

        SANDBOX : "SANDBOX",
        LINEAIR : "LINEAIR",
        GPS_AVAILABLE : 'GPS_AVAILABLE',
        GPS_UNAVAILABLE : 'GPS_UNAVAILABLE',
        POSITION_UPDATED : 'POSITION_UPDATED',
        REFRESH_RATE : 1000,
        currentPosition : currentPositionMarker = customDebugging = debugId = map = interval =intervalCounter = updateMap = false,
        locatieRij : markerRij = []
    }
    
    controller.init();

})();