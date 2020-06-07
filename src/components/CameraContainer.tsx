import React, { useState, useEffect, FunctionComponent } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Camera, PermissionStatus, CameraCapturedPicture } from "expo-camera";

interface ICameraContainerProps {
  onPhotoTaken: (photo: CameraCapturedPicture) => void;
}

export const CameraContainer: FunctionComponent<ICameraContainerProps> = ({
  onPhotoTaken,
}) => {
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.cameraWrapper}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      />
      <View style={styles.actionPanelWrapper}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Take photo"
            onPress={async () => {
              if (cameraRef) {
                const photo = await cameraRef.takePictureAsync();
                onPhotoTaken(photo);
              }
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Flip"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
        </View>
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
  cameraWrapper: { flex: 2.5, width: "100%" },
  actionPanelWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonWrapper: {
    width: 170,
    height: 100,
    margin: 10,
  },
});
