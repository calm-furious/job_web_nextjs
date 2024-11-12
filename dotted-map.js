const fs = require('fs');
const DottedMap = require('dotted-map').default;
// Or in the browser: import DottedMap from 'dotted-map';

const map = new DottedMap({ height: 80, grid: 'diagonal' });

map.addPin({
    lat: 22.3193,
    lng: 114.1694,
    svgOptions: { color: '#ff8c00', radius: 0.4 },
});
map.addPin({
    lat: 47.1662,
    lng: 8.5155,
    svgOptions: { color: '#ff8c00', radius: 0.4 },
});

const svgMap = map.getSVG({
    radius: 0.22,
    color: '#555555',
    shape: 'circle',
    // backgroundColor: '#000000',
});

fs.writeFileSync('./map.svg', svgMap);