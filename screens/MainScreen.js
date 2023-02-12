import { View, StyleSheet, Image } from "react-native";
import Colors from "../utilities/constants/colors";
import MainButton from "../components/ui/MainButton";
import AppHeader from "../components/ui/AppHeader";
import Heading from "../components/ui/Heading";
import ScreenTemplate from "./ScreenTemplate";

// navigation propertyn får vi på köpet från Stack.Navigator
const MainScreen = ({ navigation }) => {
  const onMoviePressHandler = () => {
    navigation.navigate("Movies");
  };
  const onSeriesPressHandler = () => {
    navigation.navigate("Series");
  };

  const onDocumentaryPressHandler = () => {
    navigation.navigate("Documentary");
  };

  const onSportPressHandler = () => {
    navigation.navigate("Sport");
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <View>
          <Heading>Vad vill du se på idag?</Heading>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onSeriesPressHandler}>Serier</MainButton>
          <MainButton onPressed={onMoviePressHandler}>Filmer</MainButton>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onDocumentaryPressHandler}>
            Dokumentärer
          </MainButton>
          <MainButton onPressed={onSportPressHandler}>Sport</MainButton>
        </View>
        <View>
          <Heading>Vi rekommenderar</Heading>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/The_Batman.jpeg")}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primaryText,
    opacity: 0.6,
  },
});
