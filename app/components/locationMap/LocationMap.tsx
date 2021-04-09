import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

const Map = styled(MapContainer)`
  height: 300px;
  position: relative;
  outline: none;
  margin: 5rem 0;
`;

const LocationMap = (props) => {
  const position: [number, number] = props.position;
  return (
    <Map center={position} maxZoom={18} zoom={9}>
      {" "}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key={1} position={[50.0647, 20.0704]}>
        <Popup>
          <div>
            <p>Yakuza</p>
          </div>
        </Popup>
      </Marker>
    </Map>
  );
};

export default LocationMap;
