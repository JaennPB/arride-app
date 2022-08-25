import { Flex, KeyboardAvoidingView } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Map from "../components/Map";
import ChooseRideScreen from "./nested/ChooseRideScreen";
import DestinationScreen from "./nested/DestinationScreen";

const NestedStack = createNativeStackNavigator<NavParams>();

const MapScreen: React.FC = () => {
  return (
    <Flex flex={1}>
      <Flex flex={1}>
        <Map />
      </Flex>
      <KeyboardAvoidingView flex={1} behavior="padding">
        <NestedStack.Navigator screenOptions={{ headerShown: false }}>
          <NestedStack.Screen
            name="DestinationScreen"
            component={DestinationScreen}
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
