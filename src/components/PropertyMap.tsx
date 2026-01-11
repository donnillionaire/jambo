// src/components/PropertyMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet';

interface PropertyMapProps {
  lat: number;
  lng: number;
  address: string;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ lat, lng, address }) => {
  const position: LatLngTuple = [lat, lng];

  return (
    <div className="mt-4 rounded-lg overflow-hidden border">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '200px', width: '100%' }}
        dragging={true}
        touchZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PropertyMap;