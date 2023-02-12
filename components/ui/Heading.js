import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utilities/constants/colors";

const Heading = ({ children }) => {
  return (
    <View>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  titleText: {
    color: Colors.lightText,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: Colors.lightText,
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
});
