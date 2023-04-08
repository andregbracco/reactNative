import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "@rneui/themed";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./LoginForm.styles";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.cuenta.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario o Password incorrectos",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={<Icon color="#9b9b9b" name="at" iconStyle={styles.icon} />}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            color="#9b9b9b"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
