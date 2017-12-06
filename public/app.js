var initialise = function() {
  var container = document.getElementById("main-map");
  var center = {lat: 55.768733, lng: -4.061221};
  var zoom = 12;
  var mainMap = new MapWrapper(container, center, zoom);
  var content = "Home";
  var newLocation = {lat: 48.848913, lng: 2.368273};

  mainMap.addMarker(center);
  mainMap.addClickEvent();
  mainMap.addClickEventInfo(content);

  var bounceButton = document.getElementById("button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var relocateButton = document.getElementById("button-set-center");
  relocateButton.addEventListener("click", function() {
     mainMap.relocateCenter(newLocation);
   });

};

window.addEventListener("load", initialise);
