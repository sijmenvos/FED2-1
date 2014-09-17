(function(){
	
var data = {

    SANDBOX : "SANDBOX",
    LINEAIR : "LINEAIR",
    GPS_AVAILABLE : 'GPS_AVAILABLE',
    GPS_UNAVAILABLE : 'GPS_UNAVAILABLE',
    POSITION_UPDATED : 'POSITION_UPDATED',
    REFRESH_RATE : 1000,
    currentPosition : currentPositionMarker = customDebugging = debugId = map = interval =intervalCounter = updateMap = false,
    locatieRij : markerRij = []
}


var events = {

    EventTarget: function (){
        //
    }
}

var gps = {

    init: function{
        //
    },

    startInterval: function (event){
        //
    },

    updatePosition: function (){
        //
    },

    setPosition: function (position){
        //
    },

    checkLocations: function (event){
        //
    },

    calculateDistance: function (p1, p2){
        //
    }
}

var map = {

    generate: function (myOptions, canvasId){
        //
    }

    isNumber: function (n) {
        //
    }

    updatePositie: function (event){
        //
    }
}

var debug = {

    geoErrorHandler: function (code, message) {
        //
    }

    debugMessage: function (message){
        //
    }

    setCustomDebugging: function (debugId){
        //
    }

}

})();