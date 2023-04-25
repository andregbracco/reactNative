import React from "react";
import { View } from "react-native";
import { Avatar, Text } from "@rneui/base";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoUser.styles";

export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  const changeAvatar = () => {
    console.log("Cambiar avatar");
  };
  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        containerStyle={styles.avatar}
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        source={{ uri: photoURL }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
