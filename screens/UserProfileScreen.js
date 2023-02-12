import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/constants/colors";
import ScreenTemplate from "./ScreenTemplate";

const UserProfileScreen = () => {
  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Text style={styles.title}>Mina inställningar</Text>
      </View>
    </ScreenTemplate>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    color: Colors.primaryText,
    fontSize: 24,
    textAlign: "center",
  },
});
