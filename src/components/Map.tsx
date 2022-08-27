import { useEffect, useRef } from "react";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { setMatrix } from "../app/mainSlice";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const Map: React.FC = () => {
  const dispatch = useAppDispatch();

  const origin = useAppSelector((state) => state.origin)!;
  const destination = useAppSelector((state) => state.destination);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
    });

    async function getTravelTime() {
      try {
        const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination?.description}&origins=${origin?.description}&units=metric&key=AIzaSyDu0tEXYHRZPyzekpYDWQ-kj5Sc4ry8X3w`;

        const res = await fetch(URL);
        const data = await res.json();

        const duration = data.rows[0].elements[0].duration;
        const distance = data.rows[0].elements[0].distance;

        dispatch(setMatrix({ duration, distance }));
      } catch {
        console.log("Error getting data");
      }
    }

    getTravelTime();
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
          strokeColor="#404040"
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
