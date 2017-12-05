var initialise = function() {
  var container = document.getElementById("main-map");
  var center = {lat: 55.8532, lng: -4.3093};
  var zoom = 12;
  var mainMap = new MapWrapper(container, center, zoom);
  var content = "CodeClan building, Glasgow";
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  mainMap.addClickEventInfo(content);

  var bounceButton = document.getElementById("button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var relocateButton = document.getElementById("button-set-center");
  relocateButton.addEventListener("click", mainMap.relocateCenter.bind(mainMap));

};

window.addEventListener("load", initialise);
