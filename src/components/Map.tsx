import MapView, { Marker } from "react-native-maps";

import { useAppSelector } from "../hooks/reduxHooks";

const Map: React.FC = () => {
  const origin = useAppSelector((state) => state.origin)!;

  return (
    <MapView
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.lat,
        longitude: origin?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Marker
        coordinate={{
          latitude: origin?.lat,
          longitude: origin?.lng,
        }}
        title="From here"
        description="Let's go!"
      />
    </MapView>
  );
};

export default Map;
