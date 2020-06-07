import React, { useState } from "react";
import { CameraContainer } from "../CameraContainer";
import { CameraCapturedPicture } from "expo-camera";
import { Particulars } from "./Particulars";
import { RegisterSucess } from "./RegisterSuccess";
import { IHuman } from "../../context/PopulationContextProvider";
import { Alert } from "react-native";

enum RegisterStage {
  Particulars,
  Photo,
  Success,
}

export const RegisterScreen = () => {
  const [stage, setStage] = useState<RegisterStage>(RegisterStage.Particulars);
  const [human, setHuman] = useState<IHuman>({
    name: "",
    url: "",
    embedding: [],
  });

  switch (stage) {
    case RegisterStage.Photo:
      const onPhotoTaken = (photo: CameraCapturedPicture) => {
        console.log(photo);
        setStage(RegisterStage.Success);
      };
      return <CameraContainer onPhotoTaken={onPhotoTaken} />;
    case RegisterStage.Success:
      return <RegisterSucess />;
    case RegisterStage.Particulars:
    default:
      const setHumanName = (input: string) => {
        setHuman({ ...human, name: input });
      };
      const setHumanUrl = (input: string) => {
        setHuman({ ...human, url: input });
      };
      const onSubmit = () => {
        if (human.name && human.url) {
          setStage(RegisterStage.Photo);
        } else {
          Alert.alert(
            "Error",
            "Please fill in both your name and URL!",
            [{ text: "Dismiss", onPress: () => {} }],
            { cancelable: true }
          );
        }
      };
      return (
        <Particulars
          setHumanName={setHumanName}
          setHumanUrl={setHumanUrl}
          onSubmit={onSubmit}
        />
      );
  }
};
