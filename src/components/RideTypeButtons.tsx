import { HStack, Text } from "native-base";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const RideTypeButtons: React.FC = () => {
  return (
    <>
      <HStack
        alignItems="center"
        justifyContent="center"
        space={2}
        bg="trueGray.700"
        p={2}
        borderRadius={20}
        w={100}
      >
        <Ionicons name="ios-car-sport-sharp" size={24} color="white" />
        <Text color="white">Ride</Text>
      </HStack>
      <HStack
        alignItems="center"
        space={2}
        p={2}
        borderRadius={20}
        justifyContent="center"
        w={100}
      >
        <MaterialCommunityIcons name="package" size={24} color="black" />
        <Text color="black">Package</Text>
      </HStack>
    </>
  );
};

export default RideTypeButtons;
