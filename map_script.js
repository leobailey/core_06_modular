


// Handler for checking the DOM has loaded and ready to be manipulated


//This is a MAPBOX Tiles
$(document).ready(function () {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYmFpbHM5OSIsImEiOiJjajJpeGI1YWswMDNoMzNudHJlODZjZ3R5In0.HstML8KvIO_j_GGyabG7CA';
    var map = L.mapbox.map('map', 'mapbox.dark')
    .setView([18.815, 18.140], 3);


    // Custom designed Map in MapBox Studio called Dark_basic to remove country and ocean names
    var styleLayer = L.mapbox.styleLayer('mapbox://styles/bails99/cj2timdot00222sobdva9vqer')
    .addTo(map);

    //Adding 2020 generated data markers in code : Lat(vert),Long(horiz)
    //1379,09/05/2017 05:58,/api/v1/Projects/30/Update,nikhil.khadtare@mediacom.com,94.200.175.218,"25.2639, 55.3081",25.2639,55.3081,Dubai,United Arab Emirates
    //L.marker([25.2639, 55.3081]).addTo(map); // Dubai, United United Arab Emirates
    ////1973,10/05/2017 08:09,/api/v1/Hub/GetCoreInformation,shauna.hyland@mediacom.com,193.23.120.233,"51.5092, -0.0955",51.5092,-0.0955,London,England
    //L.marker([51.5092, -0.0955]).addTo(map); // London, England

    //Defining an animated icon
    var icon = L.divIcon({
        iconSize: [2, 2],
        iconAnchor: [2, 2],
        popupAnchor: [2, 0],
        shadowSize: [0, 0],
        className: 'animated-icon my-icon'
    });

    //marker latlng
    //var ll = L.latLng(40.795, -73.953)

    // create marker
    //var marker = L.marker(ll, {
    var marker = L.marker(L.latLng(25.2639, 55.3081), {
        icon: icon,
        title: 'look at me!'
    });

    // define what to do after a marker has been added
    marker.on('add', function () {

        doAnimations();
        // putting this in setInterval so it runs forever
        setInterval(function () {
            doAnimations();
        }, 5000);
    });

    //place marker on map   
    marker.addTo(map);


    function doAnimations() {

        var myIcon = document.querySelector('.my-icon');

        setTimeout(function () {
            myIcon.style.width = '50px';
            myIcon.style.height = '50px';
            myIcon.style.backgroundColor = 'rgba(255,255,255,0.2)';
            myIcon.style.marginLeft = '-25px';
            myIcon.style.marginTop = '-25px';
        }, 2000);

        //setTimeout(function () {
        //    myIcon.style.borderRadius = '10%'
        //    myIcon.style.backgroundColor = 'skyblue'
        //}, 2000)

        setTimeout(function () {
            myIcon.style.width = '2px';
            myIcon.style.height = '2px';
            //myIcon.style.borderRadius = '50%';
            myIcon.style.backgroundColor = 'rgba(255,255,255,0.2)';
            myIcon.style.marginLeft = '-1px';
            myIcon.style.marginTop = '-1px';
        }, 4000);
    }


});

