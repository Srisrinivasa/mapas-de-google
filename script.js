createMap = () => {
    const element = document.getElementById('map');
    const options = {
        center: { lat: 12.935, lng: 77.624 },
        zoom: 8
    };

    const map = new google.maps.Map(element, options);
    google.maps.event.addListener(map, 'click', event => {
        placeMarker(event.latLng, map);
    });
}

const placeMarker = (position, map) => {
    const { lat, lng } = position;
    const content = `<b>Lat:</b><span>${lat()}</span> <br />
    <b>Lng:</b><span>${lng()}</span> <br />`;
    const contentWithTS = `${content} <b>Marked time:</b>
    <span>${(new Date()).toLocaleString()}</span> <br />`;

    const marker = new google.maps.Marker({ position, map });
    const infoWindow = new google.maps.InfoWindow({ content });
    getPostalAddr(map, infoWindow, marker, position, content);

    marker.addListener('click', () => {
        infoWindow.setContent(contentWithTS);
        infoWindow.open(map, marker);
    });
}

const getPostalAddr = (map, infoWindow, marker, position, content) => {
    const geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': position }, (results, status) => {
        if (status === 'OK') {
            if (results[0]) {
                const newContent = content + `<span>${results[0].formatted_address}</span>`;
                infoWindow.setContent(newContent);
                infoWindow.open(map, marker);
            } else {
                infoWindow.setContent(content + '<span class="red">Unknown</span>');
                infoWindow.open(map, marker);
            }
        } else {
            infoWindow.setContent(`${content} <span class="red">Geocoder failed - ${status}</span>`);
            infoWindow.open(map, marker);
        }
    });
}