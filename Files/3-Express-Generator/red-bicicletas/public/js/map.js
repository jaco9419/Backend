var mymap = L.map('main_map').setView([-34.6127769,-58.4204329], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

L.marker([-34.618419, -58.394105]).addTo(mymap);
L.marker([-34.593157, -58.422803]).addTo(mymap);
L.marker([-34.603175, -58.494469]).addTo(mymap);