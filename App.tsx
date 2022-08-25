import { Image, NativeBaseProvider, StatusBar } from "native-base";
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "./src/app/store";

import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import OriginScreen from "./src/screens/OriginScreen";

const Stack = createNativeStackNavigator<NavParams>();

function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OriginScreen"
          component={OriginScreen}
          options={{
            headerBackVisible: false,
            headerTitle: "",
            headerLeft: () => (
              <Image
                source={require("./assets/title.png")}
                alt="Alternate Text"
                resizeMode="center"
                height={50}
                w={100}
              />
            ),
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <Provider store={store}>
        <NativeBaseProvider>
          <NavStack />
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
