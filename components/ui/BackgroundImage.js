import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../utilities/constants/colors";

const BackgroundImage = () => {
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
        source={require("./assets/images/Batman.jpeg")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
