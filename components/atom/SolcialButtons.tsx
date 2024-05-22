import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface GoogleButtonProps {
  callback?: () => void;
  text?: string;
}

export const GoogleButton = ({
  callback = () => {
    console.log("press");
  },
  text = "Continuar con Google",
}: GoogleButtonProps) => {
  return (
    <TouchableOpacity onPress={callback} style={styles.button}>
      <Image
        style={styles.imageIcon}
        source={require("@/assets/images/GoogleIcon.png")}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const FacebookButton = ({
  callback = () => {
    console.log("press");
  },
  text = "Continuar con Facebook",
}: GoogleButtonProps) => {
  return (
    <TouchableOpacity
      onPress={callback}
      style={[styles.button, styles.buttonFacebook]}>
      <Image
        style={[styles.imageIcon]}
        source={require("@/assets/images/FacebookIcon.png")}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const AppleButton = ({
  callback = () => {
    console.log("press");
  },
  text = "Continuar con Apple",
}: GoogleButtonProps) => {
  return (
    <TouchableOpacity
      onPress={callback}
      style={[styles.button, styles.buttonApple]}>
      <Image
        style={styles.imageIcon}
        source={require("@/assets/images/AppleIcon.png")}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#5384EE",
    width: "100%",
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 0,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    gap: 21,
  },
  buttonFacebook: {
    backgroundColor: "#415792",
  },
  buttonApple: {
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
  },
  imageIcon: {
    width: 20,
    height: 20,
  },
});
