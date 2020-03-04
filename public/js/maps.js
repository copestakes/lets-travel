let platform = new H.service.Platform({
    'apikey': 'EkTR2R4ymwa5Q-5yox6oiefkvpNaeZpiqW-Q1zNx9Cs' //KhkwkKimM0AWa2EOkYLE
  });

function landmarkGeocode() {
  let title = document.querySelector('h1').textContent;
  var geocoder = platform.getGeocodingService(),
    landmarkGeocodingParameters = {
      searchtext: title,
      jsonattributes : 1
    };

  geocoder.search(
    landmarkGeocodingParameters,
    showMap,
    (e) => console.log(e)
  );
}
function showMap(result) {
  let location = result.response.view[0].result[0].place.locations[0].displayPosition;
  let defaultLayers = platform.createDefaultLayers();
  let map = new H.Map(
    document.querySelector('.map'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: {lat: location.latitude, lng: location.longitude} 
    });
    let marker = new H.map.Marker({lat: location.latitude, lng: location.longitude});
    map.addObject(marker);
    let ui = H.ui.UI.createDefault(map, defaultLayers);
}

landmarkGeocode();