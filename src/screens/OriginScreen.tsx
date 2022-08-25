import { Flex, Heading } from "native-base";

import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

import { useAppNavigation } from "../hooks/navigationHooks";

import { setOrigin } from "../app/mainSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

const OriginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  function getOriginDetailsHandler(details: GooglePlaceDetail | null) {
    dispatch(setOrigin(details?.geometry.location));
    navigation.navigate("MapScreen");
  }

  return (
    <Flex flex={1} p={5}>
      <Heading mb={5}>Choose an origin</Heading>
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
        fetchDetails={true}
        onPress={(data, details = null) => getOriginDetailsHandler(details)}
      />
    </Flex>
  );
};

export default OriginScreen;
