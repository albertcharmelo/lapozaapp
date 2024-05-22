import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";
import { SecondaryButton } from "@/components/atom/Button";
import Divisor from "@/components/atom/Divisor";
import {
  AppleButton,
  FacebookButton,
  GoogleButton,
} from "@/components/atom/SolcialButtons";
import { router } from "expo-router";
const SignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View style={styles.borderStyle}>
              <TextInput placeholder="Email" style={styles.input} />
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Contraseaña</Text>
            <View style={styles.borderStyle}>
              <TextInput
                placeholder=""
                secureTextEntry={isPasswordVisible}
                style={styles.input}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setIsPasswordVisible((prevState) => !prevState)}>
                {isPasswordVisible ? (
                  <Eye color={"#332C45"} size={24} />
                ) : (
                  <EyeOff color={"#332C45"} size={24} />
                )}
              </TouchableOpacity>
            </View>
            <Text
              style={{ color: "#F87146", fontSize: 14, fontWeight: "bold" }}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
          <SecondaryButton text="Inciar Sesión" />
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

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: 24,
    gap: 24,
  },
  containerForm: {
    gap: 24,
  },
  form: {
    paddingHorizontal: 24,
    gap: 24,
  },
  field: {
    gap: 8,
  },
  label: {
    color: "#171725",
    fontSize: 16,
    fontWeight: "bold",
  },
  borderStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    borderColor: "#9CA4AB",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 48,
    flex: 1,
  },
  eyeIcon: {
    padding: 10,
  },
  socialButtons: {
    flexDirection: "column",
    width: "100%",
    gap: 12,
  },
});
