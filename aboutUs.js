function initMap() {
    // Specify coordinates for the map center
    var center = {lat: 12.5657, lng: 104.9910}; //Cambodia
  
    // Create a new map and place it inside the designated div
    var map = new google.maps.Map(
        document.getElementById('map'), {center: center, zoom: 8});
  
    // Create a marker and place it at the designated coordinates
    var marker = new google.maps.Marker({position: center, map: map});
  
    // Initialize the info window text
    var contentString = '<h2>Our Location</h2>' +
        '<p>Phnom Penh<br>Cambodia</p>';
  
    // Create an info window and bind it to the marker
    var infowindow = new google.maps.InfoWindow({content: contentString});
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
  