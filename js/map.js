var mapOpts = { mapTypeId: google.maps.MapTypeId.TERRAIN, zoom: 2, center:
    new google.maps.LatLng(20, 0) }; 
    var map = new google.maps.Map(document.getElementById("map"), mapOpts); 
    var infoWindow = new google.maps.InfoWindow(); 
   var markerBounds = new google.maps.LatLngBounds(); 
    var markerArray = []; 

   function makeMarker(options) { 
  var pushPin = new google.maps.Marker({ map: map }); 
  pushPin.setOptions(options); 
  google.maps.event.addListener(pushPin, "click", 
  function () { infoWindow.setOptions(options); 
  infoWindow.open(map, pushPin); });
  markerBounds.extend(options.position); 
  markerArray.push(pushPin);
  return pushPin; } google.maps.event.addListener(map, "click", 
  function () { infoWindow.close(); }); 

      makeMarker({ title: "Test1", position: new google.maps.LatLng(10, 10),
     content: "Content1",      icon: '' });
      makeMarker({ title: "Test2", position: new google.maps.LatLng(20, 20),
    content: "Content2",    icon: '' });
      makeMarker({ title: "Test3", position: new google.maps.LatLng(30, 30), 
   content: "Content3", icon: '' });