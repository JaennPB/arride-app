import { Box, Heading } from "native-base";

import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

import { useAppNavigation } from "../../hooks/navigationHooks";

import { setDestination } from "../../app/mainSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const DestinationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  function getDestinationDetailsHandler(details: GooglePlaceDetail | null) {
    dispatch(setDestination(details?.geometry.location));
    navigation.navigate("ChooseRideScreen");
  }

  return (
    <>
      <Box p={5} borderBottomWidth={1} borderBottomColor="#ddd">
        <Heading textAlign="center">Good morning, Jaenn</Heading>
      </Box>
      <Box p={5}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
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
            getDestinationDetailsHandler(details)
          }
        />
      </Box>
    </>
  );
};

export default DestinationScreen;
