import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground } from "react-native";
import Colors from "../utilities/constants/colors";

const ScreenTemplate = ({ children, imageUrl }) => {
  return (
    <LinearGradient
      colors={[
        Colors.primaryBackground800,
        Colors.primaryBackground600,
        Colors.primaryBackground400,
        Colors.primaryBackground200,
      ]}
      style={styles.screen}
    >
      <ImageBackground
        source={require("../assets/images/Batman.jpeg")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
};

export default ScreenTemplate;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
