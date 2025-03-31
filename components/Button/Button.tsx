import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonText } from "@/components/ui/button"

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Button style={styles.container} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
