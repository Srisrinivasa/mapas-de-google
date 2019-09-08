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
    new google.maps.Marker({ position, map });
}
