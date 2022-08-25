import { Flex } from "native-base";

import MapView, { Marker } from "react-native-maps";

import { useAppSelector } from "../hooks/reduxHooks";

const MapScreen: React.FC = () => {
  const origin = useAppSelector((state) => state.origin)!;

  return (
    <Flex flex={1}>
      <Flex flex={1}>
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
          {origin && (
            <Marker
              coordinate={{
                latitude: origin?.lat,
                longitude: origin?.lng,
              }}
              title="From here"
              description="Let's go!"
            />
          )}
        </MapView>
      </Flex>
      <Flex flex={1}></Flex>
    </Flex>
  );
};

export default MapScreen;
