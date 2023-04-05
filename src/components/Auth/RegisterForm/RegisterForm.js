import React from "react";
import { View } from "react-native";
import { Input, Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFormik } from "formik";
import { styles } from "./RegisterForm.styles";
import { initialValues } from "./RegisterForm.data";

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("formulario enviado");
      console.log(formValue);
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={<Icon color="#c1c1c1" name="at" iconStyle={styles.icon} />}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        rightIcon={<Icon color="#c1c1c1" name="eye" iconStyle={styles.icon} />}
        secureTextEntry={true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.input}
        rightIcon={<Icon color="#c1c1c1" name="eye" iconStyle={styles.icon} />}
        secureTextEntry={true}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
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
