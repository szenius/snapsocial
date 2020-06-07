import React, { FunctionComponent } from "react";
import { Button, View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../App";
import { StackScreenProps } from "@react-navigation/stack";

export const HomeScreen: FunctionComponent<StackScreenProps<
  RootStackParamList,
  "Home"
>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Snap" onPress={() => navigation.navigate("Snap")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    width: "60%",
    margin: 10,
  },
});
