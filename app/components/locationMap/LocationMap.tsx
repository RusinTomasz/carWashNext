import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../styles/breakpoints";

interface LocationMapProps {
  position: [number, number];
  popupTitle: string;
}

const Map = styled(MapContainer)`
  height: 300px;
  position: relative;
  outline: none;
  margin: 5rem 0;
  ${maxWidth(breakpoints.md)} {
    margin: 1rem 0 3rem;
  }
`;

const LocationMap = (props: LocationMapProps) => {
  const { position, popupTitle } = props;
  const titleLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

  return (
    <Map center={position} maxZoom={18} zoom={9}>
      <TileLayer url={titleLayerUrl} attribution={attribution} />
      <Marker key={1} position={position}>
        <Popup>{popupTitle}</Popup>
      </Marker>
    </Map>
  );
};

export default LocationMap;
