createMap = () => {
    const element = document.getElementById('map');
    const options = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    };

    const map = new google.maps.Map(element, options);
    google.maps.event.addListener(map, 'click', event => {
        placeMarker(event.latLng, map);
    });
}

const placeMarker = (position, map) => {
    const marker = new google.maps.Marker({ position, map });
    const infoWindow = new google.maps.InfoWindow({ content: "Your marked location" });
    infoWindow.open(map, marker)
}
