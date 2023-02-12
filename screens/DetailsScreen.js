import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../utilities/constants/colors";
import AppHeader from "../components/ui/AppHeader";
import ScreenTemplate from "./ScreenTemplate";
import { MOVIES } from "../data/MoviesData";
import IconButton from "../components/ui/IconButton";

// Plockar med routedatan
const DetailsScreen = ({ route, navigation }) => {
  const itemId = route.params.id;
  console.log(itemId);

  // find => tar ut specifik film inom viss kategori
  const selectedItem = MOVIES.find((item) => {
    return item.id == itemId;
  });

  const onFavouritePressHandler = () => {
    console.log("lägg till som favorit");
  };

  // en funktion som tar en funktion och dependencis (vad den ska ta och inte) i arrayen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPressed={onFavouritePressHandler} />;
      },
    });
  }, [navigation, onFavouritePressHandler]);

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <Image
          style={styles.image}
          source={{ uri: selectedItem.imageUrl }}
        ></Image>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Titel: {selectedItem.title}</Text>
          <Text style={styles.title}>
            Releaseår: {selectedItem.releaseYear}
          </Text>
          <Text style={styles.title}>Filmtid: {selectedItem.runtime}</Text>
          <Text style={styles.title}>Regisör: {selectedItem.director}</Text>
          <Text style={styles.title}>Skådespelare: {selectedItem.actors}</Text>
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "red",
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "black",
    marginHorizontal: 40,
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    resizeMode: "cover",
    marginBottom: 20,
    borderColor: "red",
    borderWidth: 1,
    marginHorizontal: 40,
  },
});
