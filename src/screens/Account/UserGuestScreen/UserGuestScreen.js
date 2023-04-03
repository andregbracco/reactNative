import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, Image } from "@rneui/themed";
import { screen } from "../../../utils/";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.cuenta.login)
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/restaurant.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurant? Busca y visualiza los mejores
        restaurants de una forma sencilla, vota cuál te ha gustado más y comenta
        cómo ha sido tu experiencia
      </Text>
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={{
          backgroundColor: "#B60CB3",
          borderRadius: 5,
        }}
      />
    </ScrollView>
  );
}
