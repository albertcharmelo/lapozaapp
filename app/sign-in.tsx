import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSession } from "@/ctx";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/atom/Button";
import Divisor from "@/components/atom/Divisor";
import {
  AppleButton,
  FacebookButton,
  GoogleButton,
} from "@/components/atom/SolcialButtons";

const SignIn = () => {
  const { signIn } = useSession();
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/loginImage.png")}
        style={styles.loginImage}
      />
      <LinearGradient
        colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
        style={styles.gradient}
      />
      <View style={styles.formContainer}>
        <Image
          source={require("@/assets/images/logo-full-vertical-black.png")}
          style={styles.logo}
        />
        <View style={styles.buttonContainer}>
          <View style={{ width: "100%" }}>
            <Button
              text="Iniciar Sesión"
              callback={() => router.push("sign-in-form")}
            />
          </View>
          <Divisor />
          <View style={styles.socialButtons}>
            <View style={{ width: "100%" }}>
              <GoogleButton />
            </View>
            <View style={{ width: "100%" }}>
              <FacebookButton />
            </View>
            <View style={{ width: "100%" }}>
              <AppleButton />
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text
                style={{
                  textAlign: "center",
                  marginVertical: 10,
                }}>
                No tienes cuenta?{" "}
                <Text
                  style={{ color: "#F87146" }}
                  onPress={() => router.push("sign-up")}>
                  Registrate
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  loginImage: {
    flex: 1,
    width: "100%",
    height: 541,
    top: 0,
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: 300,
    top: 241,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  logo: {
    width: 300,
    height: 290,
    position: "absolute",
    top: 150,

    //contain
    objectFit: "contain",
  },
  buttonContainer: {
    width: "70%",
    marginTop: 400,
    alignItems: "center",
    gap: 16,
  },
  socialButtons: {
    flexDirection: "column",
    width: "100%",
    gap: 12,
  },
});

export default SignIn;
