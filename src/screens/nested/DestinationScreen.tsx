import { Box, Flex, Heading } from "native-base";

import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

import { useAppNavigation } from "../../hooks/navigationHooks";

import { setDestination } from "../../app/mainSlice";
import Favorites from "../../components/Favorites";
import { useAppDispatch } from "../../hooks/reduxHooks";

const DestinationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  function getDestinationDetailsHandler(
    details: GooglePlaceDetail | null,
    data: GooglePlaceData | null
  ) {
    dispatch(
      setDestination({
        coords: details?.geometry.location,
        description: data?.description,
      })
    );
    navigation.navigate("ChooseRideScreen");
  }

  return (
    <>
      <Box p={5} borderBottomWidth={1} borderBottomColor="#ddd">
        <Heading textAlign="center">Good morning, Jaenn</Heading>
      </Box>
      <Box px={5} mt={5}>
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
            getDestinationDetailsHandler(details, data)
          }
        />
      </Box>
      <Flex px={5}>
        <Favorites />
      </Flex>
    </>
  );
};

export default DestinationScreen;
