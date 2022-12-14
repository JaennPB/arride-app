import { Flex, Image } from "native-base";
import { Dimensions } from "react-native";

import { useAppNavigation } from "../hooks/navigationHooks";

import HomeButtons from "../components/HomeButtons";

const { width } = Dimensions.get("screen");

const HomeScreen: React.FC = () => {
  const navigation = useAppNavigation();

  function navigateToMapHandler() {
    navigation.navigate("OriginScreen");
  }

  return (
    <Flex flex={1} bg="white">
      <Flex flex={1} mt={10} w={width / 2} pl={5}>
        <Image
          source={require("../../assets/title.png")}
          alt="Alternate Text"
          resizeMode="contain"
        />
      </Flex>
      <HomeButtons onPress={navigateToMapHandler} />
    </Flex>
  );
};

export default HomeScreen;
