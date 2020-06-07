import React, { FunctionComponent } from "react";
import { Button } from "react-native";

interface IParticularsProps {
  onSubmit: () => void;
}

export const Particulars: FunctionComponent<IParticularsProps> = ({
  onSubmit,
}) => <Button title="Done" onPress={onSubmit} />;
