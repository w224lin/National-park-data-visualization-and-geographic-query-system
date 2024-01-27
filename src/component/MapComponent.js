import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// icon
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const iconDefault = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [20, 32],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [30, 30]
});

L.Marker.prototype.options.icon = iconDefault;


const MapComponent = ({locations}) => {
  if (!locations || locations.length === 0) {
    return <div>No locations provided. Please Check the Database Accessibility.</div>;
  }

  const defaultCenter = [34.02, -118.28];
  const defaultZoom = 6;

  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {locations.map(location => (
        <Marker key={location._id} position={[location.geometry.coordinates[1], location.geometry.coordinates[0]]}>
          <Popup>
            {"Name: " + location.properties.Name} <br /> 
            {"Abbreviation: " + location.properties.Code} <br />
            {"longitude and latitude: " + location.geometry.coordinates}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    
  );
};

export default MapComponent;
