import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import {} from "react-native-gesture-handler";

interface ButtonProps {
  callback?: () => void;
  text?: string;
}

const Button = ({
  callback = () => {
    console.log("press");
  },
  text = "Enviar",
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={callback} style={styles.button}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({
  callback = () => {
    console.log("press");
  },
  text = "Enviar",
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={callback} style={styles.secondaryButton}>
      <Text style={{ color: "#434E58", fontWeight: "bold" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F87146",
    width: "100%",
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 0,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    backgroundColor: "#E3E9ED",
    width: "100%",
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 0,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
