import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { screen } from "../../utils/screenName";

const RestaurantsScreen = (props) => {
  const { navigation } = props;

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant)
    // navigation.navigate(screen.cuenta.tab, { screen: screen.cuenta.account });
  };
  return (
    <View>
      <Text>Estamos en la screen RestaurantsScreen</Text>
      <Button title="Crear restaurant" onPress={goToAddRestaurant} />
    </View>
  );
};

export default RestaurantsScreen;
