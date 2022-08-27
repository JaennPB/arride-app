import { HStack, Pressable, Text } from "native-base";
import { useState } from "react";

import { useAppNavigation } from "../hooks/navigationHooks";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppSelector } from "../hooks/reduxHooks";

const RideTypeButtons: React.FC = () => {
  const navigation = useAppNavigation();

  const destination = useAppSelector((state) => state.destination);

  const [rideType, setRideType] = useState<"ride" | "package">("ride");

  function toggleTypeAndNavigate(type: "ride" | "package") {
    setRideType(type);

    if (destination) {
      navigation.navigate("ChooseRideScreen", { rideType: type });
    }
  }

  return (
    <>
      <Pressable onPress={toggleTypeAndNavigate.bind(this, "ride")}>
        <HStack
          alignItems="center"
          justifyContent="center"
          space={2}
          bg={rideType === "ride" ? "trueGray.700" : null}
          p={2}
          borderRadius={20}
          w={120}
        >
          <Ionicons
            name="ios-car-sport-sharp"
            size={24}
            color={rideType === "ride" ? "white" : "#404040"}
          />
          <Text color={rideType === "ride" ? "white" : "#404040"} fontSize={16}>
            Ride
          </Text>
        </HStack>
      </Pressable>
      <Pressable onPress={toggleTypeAndNavigate.bind(this, "package")}>
        <HStack
          alignItems="center"
          space={2}
          bg={rideType === "package" ? "trueGray.700" : null}
          p={2}
          borderRadius={20}
          justifyContent="center"
          w={120}
        >
          <MaterialCommunityIcons
            name="package"
            size={24}
            color={rideType === "package" ? "white" : "#404040"}
          />
          <Text
            color={rideType === "package" ? "white" : "#404040"}
            fontSize={16}
          >
            Package
          </Text>
        </HStack>
      </Pressable>
    </>
  );
};

export default RideTypeButtons;
