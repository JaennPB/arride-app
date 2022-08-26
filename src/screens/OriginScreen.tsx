import { Flex, Heading } from "native-base";

import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

import { useAppNavigation } from "../hooks/navigationHooks";

import { setOrigin } from "../app/mainSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

import Favorites from "../components/Favorites";

const OriginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  function getOriginDetailsHandler(
    details: GooglePlaceDetail | null,
    data: GooglePlaceData | null
  ) {
    dispatch(
      setOrigin({
        coords: details?.geometry.location,
        description: data?.description,
      })
    );
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
        onPress={(data, details = null) =>
          getOriginDetailsHandler(details, data)
        }
      />
      <Favorites />
    </Flex>
  );
};

export default OriginScreen;
