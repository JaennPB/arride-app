import { Image, NativeBaseProvider, StatusBar } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "./src/app/store";

import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";

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
          name="MapScreen"
          component={MapScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <NativeBaseProvider>
          <NavStack />
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
