var map = L.map('map').setView([19.15, -98.25], 5.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var corIcon = L.icon({
    iconUrl: "/assets/img/shapes/UbicacionCormago.png",
    
    
    iconSize:     [118, 80], // size of the icon
    
    iconAnchor:   [22, 74], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});



var marker1 = L.marker([21.066, -89.63], {icon: corIcon}).addTo(map).bindPopup("Parque Industrial Yucatán <br>x 59 y 61, C. 60 493, Granjas, 97300 <br> Mérida, Yuc.");
var marker2 = L.marker([14.86, -92.28], {icon: corIcon}).addTo(map).bindPopup("CORMAGO S.A DE C.V <br> Calle Huixtla y Escuintla en camino a <br> la pita esq. Tubo SN <br> Fraccionamiento, Las Flores de <br> Tapachula, 30797 Tapachula de <br> Córdova y Ordoñez, Chis.");
var marker3 = L.marker([17.99, -92.98], {icon: corIcon}).addTo(map).bindPopup("Parque Logístico Industrial Tabasco <br> Carretera, Villahermosa - Cardenas <br> Km. 5.0, 86000 Villahermosa, Tab.");
var marker4 = L.marker([20.64, -103.36], {icon: corIcon}).addTo(map).bindPopup("Parque industrial guadalajara <br> Productividad Poniente, Guadalajara, <br> 45690 Las Pintas, Jal.");
var marker5 = L.marker([21.54,  -104.85], {icon: corIcon}).addTo(map).bindPopup("Parque Industrial Sin Referencia <br> Av Aguamilpa 348, Sin Referencia, <br>63173 Tepic, Nay.");
