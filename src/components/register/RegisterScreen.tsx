import React, { useState } from "react";
import { CameraContainer } from "../CameraContainer";
import { CameraCapturedPicture } from "expo-camera";
import { Particulars } from "./Particulars";
import { RegisterSucess } from "./RegisterSuccess";

enum RegisterStage {
  Particulars,
  Photo,
  Success,
}

export const RegisterScreen = () => {
  const [stage, setStage] = useState<RegisterStage>(RegisterStage.Particulars);

  const onPhotoTaken = (photo: CameraCapturedPicture) => {
    console.log(photo);
    setStage(RegisterStage.Success);
  };

  switch (stage) {
    case RegisterStage.Photo:
      return <CameraContainer onPhotoTaken={onPhotoTaken} />;
    case RegisterStage.Success:
      return <RegisterSucess />;
    case RegisterStage.Particulars:
    default:
      return <Particulars onSubmit={() => setStage(RegisterStage.Photo)} />;
  }
};
