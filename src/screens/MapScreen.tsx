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
        <NestedStack.Navigator>
          <NestedStack.Screen
            name="DestinationScreen"
            component={DestinationScreen}
            options={{
              headerTitle: "Good morning, Jaenn",
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
