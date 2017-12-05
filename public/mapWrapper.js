var MapWrapper = function(container, coords, zoom) {
  // set where the map view starts
  this.googleMap = new google.maps.Map(container, {center: coords, zoom: zoom});
  this.markers = [];
};

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({position: coords, map: this.googleMap});
  this.markers.push(marker);
};

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, "click", function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    this.addMarker({lat, lng});
  }.bind(this));
};

MapWrapper.prototype.addClickEventInfo = function(infoWindowContent) {
  var marker = this.markers[0];
  var infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });
  google.maps.event.addListener(marker, "click", function() {
  infoWindow.open(this.googleMap, marker);
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  });
};

MapWrapper.prototype.relocateCenter = function() {
  var newLocation = {lat: 48.848913, lng: 2.368273};
  this.googleMap.setCenter(newLocation);
  this.addMarker(newLocation);
};
