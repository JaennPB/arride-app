import { Heading, NativeBaseProvider, StatusBar } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";

import { store } from "./src/app/store";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <Heading>Hello world!</Heading>
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
