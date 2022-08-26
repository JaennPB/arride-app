import { HStack, Pressable, Text } from "native-base";
import { useState } from "react";

import { useAppNavigation } from "../hooks/navigationHooks";

import { setRideType } from "../app/mainSlice";
import { useAppSelector } from "../hooks/reduxHooks";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const RideTypeButtons: React.FC = () => {
  const navigation = useAppNavigation();

  const rideType = useAppSelector((state) => state.rideType);

  const [rideTypeCache, setRideTypeCache] = useState("ride");

  function toggleTypeAndNavigate(type: "ride" | "package") {
    setRideType(type);
    setRideTypeCache(type);
    navigation.navigate("ChooseRideScreen", { rideType });
  }

  return (
    <>
      <Pressable onPress={toggleTypeAndNavigate.bind(this, "ride")}>
        <HStack
          alignItems="center"
          justifyContent="center"
          space={2}
          bg={rideTypeCache === "ride" ? "trueGray.700" : null}
          p={2}
          borderRadius={20}
          w={120}
        >
          <Ionicons
            name="ios-car-sport-sharp"
            size={24}
            color={rideTypeCache !== "ride" ? "#404040" : "white"}
          />
          <Text
            color={rideTypeCache !== "ride" ? "trueGray.700" : "white"}
            fontSize={16}
          >
            Ride
          </Text>
        </HStack>
      </Pressable>
      <Pressable onPress={toggleTypeAndNavigate.bind(this, "package")}>
        <HStack
          alignItems="center"
          space={2}
          bg={rideTypeCache === "package" ? "trueGray.700" : null}
          p={2}
          borderRadius={20}
          justifyContent="center"
          w={120}
        >
          <MaterialCommunityIcons
            name="package"
            size={24}
            color={rideTypeCache !== "package" ? "#404040" : "white"}
          />
          <Text
            color={rideTypeCache !== "package" ? "trueGray.700" : "white"}
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
