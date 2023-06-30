function initMap() {
  const opciones = {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 2
  };
  const mapa = new google.maps.Map(document.getElementById("map"), opciones);
  // chicheta para londres
  const londres = new google.maps.Marker({
    position: { lat: 51.5074, lng: -0.1278 },
    map: mapa,
    title: "Londres"
  });
  // chincheta para sydney
  const sydney = new google.maps.Marker({
    position: { lat: -33.8688, lng: 151.2093 },
    map: mapa,
    title: "Sydney"
  });
  // chicheta para Rio de Janeiro
  const rioDeJaneiro = new google.maps.Marker({
    position: { lat: -22.9519, lng: -43.2105 },
    map: mapa,
    title: "Rio de Janeiro"
  });
}
initMap();