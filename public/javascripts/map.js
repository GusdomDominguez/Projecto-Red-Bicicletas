var map = L.map("main_map").setView([-32.93, -68.737], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-32.978189, -68.70066]).addTo(map);
L.marker([-32.903486, -68.759469]).addTo(map);
L.marker([-32.909859, -68.798431]).addTo(map);
