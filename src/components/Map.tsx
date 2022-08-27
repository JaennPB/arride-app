import { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { useAppSelector } from "../hooks/reduxHooks";

const Map: React.FC = () => {
  const origin = useAppSelector((state) => state.origin)!;
  const destination = useAppSelector((state) => state.destination);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.coords?.lat!,
        longitude: origin.coords?.lng!,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          strokeWidth={3}
          strokeColor="#000"
          apikey="AIzaSyDu0tEXYHRZPyzekpYDWQ-kj5Sc4ry8X3w"
        />
      )}
      {origin?.coords && (
        <Marker
          coordinate={{
            latitude: origin.coords?.lat!,
            longitude: origin.coords?.lng!,
          }}
          title="From here"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.coords && (
        <Marker
          coordinate={{
            latitude: destination.coords?.lat!,
            longitude: destination.coords?.lng!,
          }}
          title="To here"
          description={origin.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
