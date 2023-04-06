import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { useFormik } from "formik";
import { styles } from "./RegisterForm.styles";
import { initialValues, validationSchema } from "./RegisterForm.data";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("formulario enviado");
      console.log(formValue);
    },
  });
  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={<Icon color="#c1c1c1" name="at" iconStyle={styles.icon} />}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? true : false}
        rightIcon={
          <Icon
            color="#c1c1c1"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? true : false}
        rightIcon={
          <Icon
            color="#c1c1c1"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
      />
    </View>
  );
}
