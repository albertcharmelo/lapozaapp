import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

interface ButtonProps {
  callback?: () => void;
  text?: string;
  loading?: boolean;
}

const Button = ({
  callback = () => {
    console.log("press");
  },
  text = "Enviar",
  loading = false,
}: ButtonProps) => {
  const handleCallback = () => {
    if (!loading) {
      callback();
    }
  };

  return (
    <TouchableOpacity onPress={handleCallback} style={styles.button}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
      )}
      {/* <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text> */}
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({
  callback = () => {
    console.log("press");
  },
  text = "Enviar",
  loading = false,
}: ButtonProps) => {
  const handleCallback = () => {
    if (!loading) {
      callback();
    }
  };
  return (
    <TouchableOpacity onPress={handleCallback} style={styles.secondaryButton}>
      {loading ? (
        <ActivityIndicator size="small" color="black" />
      ) : (
        <Text style={{ color: "#434E58", fontWeight: "bold" }}>{text}</Text>
      )}
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
    flexDirection: "row",
    gap: 8,
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
    flexDirection: "row",
    gap: 8,
  },
});
