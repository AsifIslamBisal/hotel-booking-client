import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { div } from "framer-motion/m";

const position = [23.7925, 90.4078];

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
const Map = () => {
    return (
      <div className="w-full h-[400px] my-8 rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <strong>BlueSky Residences</strong><br />
            Gulshan Avenue, Dhaka.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    );
};

export default Map;