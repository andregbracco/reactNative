import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Image } from "@rneui/themed";
import { screen } from "../../../utils/";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.cuenta.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/login.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text>Estamos en el login</Text>
        <Text onPress={goToRegister}>Registrarse</Text>
      </View>
    </ScrollView>
  );
}
