import { Flex, KeyboardAvoidingView, Pressable } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppNavigation } from "../hooks/navigationHooks";

import Map from "../components/Map";
import ChooseRideScreen from "./nested/ChooseRideScreen";
import DestinationScreen from "./nested/DestinationScreen";

import { Feather } from "@expo/vector-icons";

const NestedStack = createNativeStackNavigator<NavParams>();

const MapScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <Flex flex={1}>
      <Pressable
        onPress={() => navigation.navigate("HomeScreen")}
        position="absolute"
        top={12}
        left={5}
        zIndex={100}
        bg="white"
        p={3}
        borderRadius={50}
        shadow={3}
      >
        <Feather name="menu" size={24} color="black" />
      </Pressable>
      <Flex flex={1}>
        <Map />
      </Flex>
      <KeyboardAvoidingView flex={1} behavior="padding">
        <NestedStack.Navigator>
          <NestedStack.Screen
            name="DestinationScreen"
            component={DestinationScreen}
            options={{
              headerTitle: "Good morning, Jaenn",
              headerTitleStyle: { fontFamily: "Poppins_600SemiBold" },
              headerStyle: { backgroundColor: "#f5f5f5" },
              headerShadowVisible: false,
            }}
          />
          <NestedStack.Screen
            name="ChooseRideScreen"
            component={ChooseRideScreen}
          />
        </NestedStack.Navigator>
      </KeyboardAvoidingView>
    </Flex>
  );
};

export default MapScreen;
