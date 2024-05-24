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
import Button from "@/components/atom/Button";
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
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const registerValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("El correo es inválido")
      .required("El correo es requerido"),
    phoneNumber: yup.string().required("El teléfono es requerido"),
    name: yup.string().required("El nombre es requerido"),
    password: yup.string().required("La contraseña es requerida"),
    confirmPassword: yup
      .string()
      .required("La confirmación de contraseña es requerida")
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
  });

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
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            email: "",
            password: "",
            phoneNumber: "",
            name: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.form}>
              <View style={styles.field}>
                <Text style={styles.label}>Nombre completo</Text>
                <View
                  style={[
                    styles.borderStyle,
                    { borderColor: errors.name ? "#E53935" : "#9CA4AB" },
                  ]}>
                  <TextInput
                    placeholder="Escribe tu nombre completo aquí"
                    style={styles.input}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                  />
                </View>
                {errors.name && (
                  <Text
                    style={{
                      color: "#E53935",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>
                    {errors.name}
                  </Text>
                )}
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Correo electrónico</Text>
                <View
                  style={[
                    styles.borderStyle,
                    { borderColor: errors.email ? "#E53935" : "#9CA4AB" },
                  ]}>
                  <TextInput
                    placeholder="Escribe tu Correo electrónico aquí"
                    style={styles.input}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                  />
                </View>
                {errors.email && (
                  <Text
                    style={{
                      color: "#E53935",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>
                    {errors.email}
                  </Text>
                )}
              </View>
              {/* telefono */}
              <View style={styles.field}>
                <Text style={styles.label}>Teléfono</Text>
                <View
                  style={[
                    styles.borderStyle,
                    { borderColor: errors.phoneNumber ? "#E53935" : "#9CA4AB" },
                  ]}>
                  <TextInput
                    placeholder="000-00-00-00"
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={(text) => {
                      formatPhoneNumber(text);
                      handleChange("phoneNumber")(text);
                    }}
                    onBlur={handleBlur("phoneNumber")}
                    keyboardType="number-pad"
                    maxLength={12}
                  />
                </View>
                {errors.phoneNumber && (
                  <Text
                    style={{
                      color: "#E53935",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>
                    {errors.phoneNumber}
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
                    secureTextEntry={isPasswordVisible}
                    style={styles.input}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() =>
                      setIsPasswordVisible((prevState) => !prevState)
                    }>
                    {isPasswordVisible ? (
                      <Eye color={"#332C45"} size={24} />
                    ) : (
                      <EyeOff color={"#332C45"} size={24} />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Text
                    style={{
                      color: "#E53935",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Confirmar contraseaña</Text>
                <View
                  style={[
                    styles.borderStyle,
                    {
                      borderColor: errors.confirmPassword
                        ? "#E53935"
                        : "#9CA4AB",
                    },
                  ]}>
                  <TextInput
                    placeholder=""
                    secureTextEntry={isPasswordVisible}
                    style={styles.input}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() =>
                      setIsPasswordVisible((prevState) => !prevState)
                    }>
                    {isPasswordVisible ? (
                      <Eye color={"#332C45"} size={24} />
                    ) : (
                      <EyeOff color={"#332C45"} size={24} />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.confirmPassword && (
                  <Text
                    style={{
                      color: "#E53935",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>
                    {errors.confirmPassword}
                  </Text>
                )}
                <Text
                  style={{
                    color: "#78828A",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}>
                  Al hacer clic en Registrarse, aceptas los{" "}
                  <Text
                    style={{
                      color: "#F87146",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}>
                    Términos y políticas{" "}
                  </Text>
                  del sistema.
                </Text>
              </View>
              <Button text="Registrarse" callback={handleSubmit} />
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
