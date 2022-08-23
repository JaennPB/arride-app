import { Flex } from "native-base";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MapScreen: React.FC = () => {
  return (
    <Flex flex={1} p={5} bg="white">
      <GooglePlacesAutocomplete
        placeholder="Where from?"
        debounce={400}
        nearbyPlacesAPI="GooglePlacesSearch"
        query={{
          key: "AIzaSyDu0tEXYHRZPyzekpYDWQ-kj5Sc4ry8X3w",
          language: "en",
        }}
        styles={{
          container: { flex: 0 },
          textInput: { fontSize: 18 },
          description: { fontSize: 18 },
        }}
        enablePoweredByContainer={false}
      />
    </Flex>
  );
};

export default MapScreen;
