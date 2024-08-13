import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";
import { SecondaryButton } from "@/components/atom/Button";
import Divisor from "@/components/atom/Divisor";
import {
  AppleButton,
  FacebookButton,
  GoogleButton,
} from "@/components/atom/SolcialButtons";
import { router } from "expo-router";

//forms
import { Formik } from "formik";
import * as yup from "yup";
import { useSession } from "@/ctx";
const SignInForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <LoginForm />
      </View>
    </View>
  );
};

export const LoginForm = () => {
  const { signIn, session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("El correo es inválido")
      .required("El correo es requerido"),
    password: yup.string().required("La contraseña es requerida"),
  });

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        setLoading(true);
        const myHeaders = new Headers();
        const raw = JSON.stringify({
          email: values.email,
          password: values.password,
        });
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        const url = `${process.env.EXPO_PUBLIC_SERVER_URL}/auth/login`;
        console.log(url);
        fetch(url, {
          method: "POST",
          headers: myHeaders,
          body: raw,
        })
          .then((response) => response.json())
          .then((result) => {
            //if status == 401
            if (result.statusCode == 401) {
              ToastAndroid.showWithGravity(
                "Correo o contraseña incorrectos",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
              );
            } else {
              setLoading(false);
              signIn(result.access_token);
              router.replace("/(app)");
            }
          })
          .catch((error) => {
            setLoading(false);

            ToastAndroid.showWithGravity(
              "Ha ocurrido un error, intente más tarde",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM
            );
          });
      }}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View
              style={[
                styles.borderStyle,
                { borderColor: errors.email ? "#E53935" : "#9CA4AB" },
              ]}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
            {errors.email && (
              <Text
                style={{ color: "#E53935", fontSize: 12, fontWeight: "bold" }}>
                {errors.email}
              </Text>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Contraseaña</Text>
            <View
              style={[
                styles.borderStyle,
                { borderColor: errors.password ? "#E53935" : "#9CA4AB" },
              ]}>
              <TextInput
                placeholder=""
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
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
            {errors.password && (
              <Text
                style={{ color: "#E53935", fontSize: 12, fontWeight: "bold" }}>
                {errors.password}
              </Text>
            )}
            <Text
              style={{ color: "#F87146", fontSize: 14, fontWeight: "bold" }}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
          <SecondaryButton
            loading={loading}
            callback={handleSubmit}
            text="Iniciar Sesión"
          />
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
      )}
    </Formik>
  );
};

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
export default SignInForm;
