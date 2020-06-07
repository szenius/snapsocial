import React, { FunctionComponent } from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";

interface IParticularsProps {
  setHumanName: (input: string) => void;
  setHumanUrl: (input: string) => void;
  onSubmit: () => void;
}

export const Particulars: FunctionComponent<IParticularsProps> = ({
  setHumanName,
  setHumanUrl,
  onSubmit,
}) => (
  <View style={styles.container}>
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>Your name:</Text>
      <TextInput style={styles.inputBox} onChangeText={setHumanName} />
    </View>
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>Your url:</Text>
      <TextInput style={styles.inputBox} onChangeText={setHumanUrl} />
    </View>
    <View style={styles.buttonWrapper}>
      <Button title="Done" onPress={onSubmit} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30, alignItems: "center" },
  inputWrapper: { width: "90%", marginTop: 10, marginBottom: 10 },
  inputLabel: { fontSize: 15 },
  inputBox: {
    borderWidth: 1,
    height: 40,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  buttonWrapper: { width: "90%", marginTop: 30, marginBottom: 10 },
});
