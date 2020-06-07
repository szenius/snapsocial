import React, { useState } from "react";
import { SnapResult } from "./SnapResult";
import { CameraCapturedPicture } from "expo-camera";
import { CameraContainer } from "../CameraContainer";

enum SnapStage {
  Photo,
  Result,
}

export const SnapScreen = () => {
  const [stage, setStage] = useState<SnapStage>(SnapStage.Photo);

  const onPhotoTaken = (photo: CameraCapturedPicture) => {
    console.log(photo);
    setStage(SnapStage.Result);
  };

  switch (stage) {
    case SnapStage.Result:
      return <SnapResult />;
    case SnapStage.Photo:
    default:
      return <CameraContainer onPhotoTaken={onPhotoTaken} />;
  }
};
