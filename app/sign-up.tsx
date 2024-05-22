import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";
import Button, { SecondaryButton } from "@/components/atom/Button";
import Divisor from "@/components/atom/Divisor";
import {
  AppleButton,
  FacebookButton,
  GoogleButton,
} from "@/components/atom/SolcialButtons";
import { router } from "expo-router";
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (text: string) => {
    let formattedText = text.replace(/\D/g, "");
    if (formattedText.length > 3) {
      formattedText =
        formattedText.substring(0, 3) + "-" + formattedText.substring(3);
    }
    if (formattedText.length > 6) {
      formattedText =
        formattedText.substring(0, 6) + "-" + formattedText.substring(6);
    }
    if (formattedText.length > 9) {
      formattedText =
        formattedText.substring(0, 9) + "-" + formattedText.substring(9);
    }
    setPhoneNumber(formattedText);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerForm}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Nombre completo</Text>
            <View style={styles.borderStyle}>
              <TextInput
                placeholder="Escribe tu nombre completo aquí"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View style={styles.borderStyle}>
              <TextInput
                placeholder="Escribe tu Correo electrónico aquí"
                style={styles.input}
              />
            </View>
          </View>
          {/* telefono */}
          <View style={styles.field}>
            <Text style={styles.label}>Teléfono</Text>
            <View style={styles.borderStyle}>
              <TextInput
                placeholder="000-00-00-00"
                style={styles.input}
                value={phoneNumber}
                onChangeText={formatPhoneNumber}
                keyboardType="number-pad"
                maxLength={12}
              />
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
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Confirmar contraseaña</Text>
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
              style={{ color: "#78828A", fontSize: 14, fontWeight: "bold" }}>
              Al hacer clic en Registrarse, aceptas los{" "}
              <Text
                style={{ color: "#F87146", fontSize: 14, fontWeight: "bold" }}>
                Términos y políticas{" "}
              </Text>
              del sistema.
            </Text>
          </View>
          <Button text="Registrarse" />
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
    </ScrollView>
  );
};

export default SignUp;

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
