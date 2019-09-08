createMap = () => {
    const element = document.getElementById('map');
    const options = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    };

    const map = new google.maps.Map(element, options);

    new google.maps.Marker({position: options.center, map: map});
}