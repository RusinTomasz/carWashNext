import React from "react";
import Image from "next/image";
import { MapPlaceholderWrap } from "./styles/MapStyles";
import BasicButton from "../../styles/shared/buttons/BasicButton";

interface MapPlaceholderProps {
  showMap: () => void;
}

const MapPlaceholder = (props: MapPlaceholderProps) => {
  const { showMap } = props;

  return (
    <MapPlaceholderWrap justifyContent="center" wrap="wrap" alignItems="center">
      <BasicButton
        onClick={showMap}
        backgroundColor="blue"
        color="white"
        zIndex={1}
      >
        Zobacz lokalizację
      </BasicButton>
      <Image
        className="bg-index"
        src="/img/map/map-placeholder.jpg"
        alt="Mycie szyby gąbką"
        layout="fill"
        objectFit="cover"
      />
    </MapPlaceholderWrap>
  );
};

export default MapPlaceholder;
