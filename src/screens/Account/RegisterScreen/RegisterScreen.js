import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "@rneui/themed";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/Auth/RegisterForm";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/register.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
