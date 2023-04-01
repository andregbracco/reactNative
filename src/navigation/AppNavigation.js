import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { RestaurantStack } from "./RestaurantStack";
import { screen } from "../utils/screenName";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#B60CB3",
        tabBarInactiveTintColor: "#646464",
        headerShown: false,
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurants" }}
      />
      <Tab.Screen
        name={screen.favoritos.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.cuenta.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.buscador.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
    </Tab.Navigator>
  );
  function screenOptions(route, color, size) {
    let iconName;
    if (route.name === screen.restaurant.tab) {
      iconName = "rocket";
    }
    if (route.name === screen.favoritos.tab) {
      iconName = "heart";
    }
    if (route.name === screen.cuenta.tab) {
      iconName = "user";
    }
    if (route.name === screen.ranking.tab) {
      iconName = "star";
    }
    if (route.name === screen.buscador.tab) {
      iconName = "eye";
    }
    return (
      <Icon
        // type="material-community"
        name={iconName}
        color={color}
        size={size}
      />
    );
  }
}
