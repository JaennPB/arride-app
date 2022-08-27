import {
  Box,
  Button,
  Divider,
  FlatList,
  Flex,
  Heading,
  Pressable,
  Text,
} from "native-base";
import { ListRenderItemInfo, SafeAreaView } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { useAppNavigation } from "../../hooks/navigationHooks";

type DATA_OBJ = {
  title: string;
  multiplier: number;
  icon: string;
};

const DATA_RIDE: DATA_OBJ[] = [
  { title: "Arride Share", multiplier: 0.5, icon: "share" },
  { title: "Arride Basic", multiplier: 1, icon: "basic" },
  { title: "Arride Premium", multiplier: 2, icon: "premium" },
];

const DATA_PACKAGE: DATA_OBJ[] = [
  { title: "Arride Basic", multiplier: 1, icon: "basic-p" },
  { title: "Arride Express", multiplier: 2, icon: "premium-p" },
];

const ChooseRideScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const route = useRoute<RouteProp<NavParams, "ChooseRideScreen">>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose a ride - Travel time...",
      headerStyle: { backgroundColor: "#f5f5f5" },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
    });
  }, []);

  function renderRideOptionHandler(itemData: ListRenderItemInfo<DATA_OBJ>) {
    const item = itemData.item;

    return (
      <Pressable
        key={itemData.index}
        flexDir="row"
        my={5}
        alignItems="center"
        _pressed={{ opacity: 0.5 }}
        w="100%"
        h={50}
      >
        <Box
          borderRadius={100}
          p={3}
          w="15%"
          alignItems="center"
          justifyContent="center"
        >
          {item.icon === "share" && (
            <Entypo name="slideshare" size={26} color="#404040" />
          )}
          {item.icon === "basic" && (
            <FontAwesome name="car" size={23} color="#404040" />
          )}
          {item.icon === "premium" && (
            <Ionicons name="ios-car-sport-sharp" size={30} color="#404040" />
          )}
          {item.icon === "basic-p" && (
            <MaterialIcons name="local-shipping" size={30} color="#404040" />
          )}
          {item.icon === "premium-p" && (
            <FontAwesome5 name="shipping-fast" size={24} color="#404040" />
          )}
        </Box>
        <Flex
          flexDir="row"
          align="center"
          justify="space-between"
          w="85%"
          px={5}
        >
          <Flex>
            <Text fontWeight="bold" fontSize="md">
              {item.title}
            </Text>
            <Text color="trueGray.500">Travel time...</Text>
          </Flex>
          <Heading>$9</Heading>
        </Flex>
      </Pressable>
    );
  }

  return (
    <Flex flex={1} px={5}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={route.params.rideType === "ride" ? DATA_RIDE : DATA_PACKAGE}
          renderItem={renderRideOptionHandler}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <Divider />}
        />
        <Button
          bg="trueGray.700"
          colorScheme="trueGray"
          borderRadius={20}
          size="lg"
        >
          Choose...
        </Button>
      </SafeAreaView>
    </Flex>
  );
};

export default ChooseRideScreen;
