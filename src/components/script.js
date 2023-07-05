function iniciarMap(){
    var coord = {lat:-36.7028431 ,lng: -56.67902638};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}