import { Flex } from "native-base";

import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

import { useAppNavigation } from "../../hooks/navigationHooks";

import { setDestination } from "../../app/mainSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import Favorites from "../../components/Favorites";
import RideTypeButtons from "../../components/RideTypeButtons";

const DestinationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const rideType = useAppSelector((state) => state.rideType);

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
    navigation.navigate("ChooseRideScreen", { rideType });
  }

  return (
    <>
      <Flex px={5}>
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
            textInput: {
              fontSize: 18,
              fontFamily: "Poppins_400Regular",
              borderRadius: 10,
            },
            description: { fontSize: 18, fontFamily: "Poppins_400Regular" },
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          onPress={(data, details = null) =>
            getDestinationDetailsHandler(details, data)
          }
        />
      </Flex>
      <Flex flexDir="row" justify="space-around" my={2}>
        <RideTypeButtons />
      </Flex>
      <Flex px={5}>
        <Favorites />
      </Flex>
    </>
  );
};

export default DestinationScreen;
