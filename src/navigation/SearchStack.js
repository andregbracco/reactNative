import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import { screen } from "../utils/screenName";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.buscador.search}
        component={SearchScreen}
        options={{ title: "Buscador" }}
      />
    </Stack.Navigator>
  );
}
