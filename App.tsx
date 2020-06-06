import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Camera
        style={{ flex: 2, width: "100%" }}
        type={type}
        ratio={"1:1"}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={async () => {
            if (cameraRef) {
              let photo = await cameraRef.takePictureAsync();
              console.log("photo", photo);
            }
          }}
        >
          <Text style={{ fontSize: 18, color: "black" }}>Click here</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: "center",
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={{ fontSize: 18, color: "black" }}>
            Flip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
