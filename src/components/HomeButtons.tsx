import { Flex, Heading, Pressable, VStack } from "native-base";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
}

const HomeButtons: React.FC<Props> = ({ onPress }) => {
  return (
    <VStack flex={3} p={5} space={5}>
      <Pressable
        onPress={onPress}
        bg="trueGray.700"
        p={5}
        borderRadius={10}
        _pressed={{ opacity: 0.8 }}
      >
        <Ionicons name="ios-car-sport-sharp" size={50} color="white" />
        <Flex flexDir="row" align="center" mt={10}>
          <Heading color="white" mr={2} fontFamily="Poppins_600SemiBold">
            Get a ride
          </Heading>
          <Ionicons name="arrow-forward-circle-sharp" size={30} color="white" />
        </Flex>
      </Pressable>
      <Pressable
        onPress={onPress}
        bg="trueGray.700"
        p={5}
        borderRadius={10}
        _pressed={{ opacity: 0.8 }}
      >
        <Ionicons name="fast-food-sharp" size={50} color="white" />
        <Flex flexDir="row" align="center" mt={10}>
          <Heading color="white" mr={2} fontFamily="Poppins_600SemiBold">
            Get food
          </Heading>
          <Ionicons name="arrow-forward-circle-sharp" size={30} color="white" />
        </Flex>
      </Pressable>
    </VStack>
  );
};

export default HomeButtons;
