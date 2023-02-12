import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import Colors from "../../utilities/constants/colors";
import { useNavigation } from "@react-navigation/native";

const DisplayItem = ({ item }) => {
  const navigation = useNavigation();

  const onSelectedItemHandler = () => {
    // skickas över som route data till vår detaljsida
    navigation.navigate("Details", { id: item.id });
  };

  return (
    <View style={styles.movieContainer}>
      <Pressable onPress={onSelectedItemHandler}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Image style={styles.movieImage} source={{ uri: item.imageUrl }} />
        <Text>{item.plot}</Text>
      </Pressable>
    </View>
  );
};

export default DisplayItem;

const styles = StyleSheet.create({
  movieContainer: {
    borderWidth: 2,
    borderColor: Colors.primaryText,
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.lightText,
  },
  movieImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    marginBottom: 20,
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 10,
    color: Colors.primaryText,
  },
});
