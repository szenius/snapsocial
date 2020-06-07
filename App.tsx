import React from "react";
import { PopulationContextProvider } from "./src/context/PopulationContextProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/components/HomeScreen";
import { RegisterScreen } from "./src/components/register/RegisterScreen";
import { SnapScreen } from "./src/components/snap/SnapScreen";

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Snap: undefined;
};

const RootStack = createStackNavigator();

export default function App() {
  return (
    <PopulationContextProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
          <RootStack.Screen name="Snap" component={SnapScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </PopulationContextProvider>
  );
}
