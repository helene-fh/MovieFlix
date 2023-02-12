import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
// Hook, jacka in vid behov
import { useLayoutEffect } from "react";
import AppHeader from "../components/ui/AppHeader";
import { MOVIES } from "../data/MoviesData";
import ScreenTemplate from "./ScreenTemplate";
import DisplayItem from "../components/ui/DisplayItem";

const MovieOverviewScreen = ({ route, navigation }) => {
  const category = route.params.category;
  console.log(category);

  const displayedMovies = MOVIES.filter((movie) => {
    return movie.categoryId == category.id;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [navigation, category]);

  const renderMovie = (movieItem) => {
    return <DisplayItem item={movieItem.item}></DisplayItem>;
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <Text style={styles.subTitle}>{category.title}</Text>
        <View style={styles.container}>
          <FlatList
            data={displayedMovies}
            keyExtractor={(item) => item.id}
            renderItem={renderMovie}
          ></FlatList>
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default MovieOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 16,
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  // movieContainer: {
  //   borderWidth: 2,
  //   borderColor: Colors.primaryText,
  //   marginVertical: 16,
  //   padding: 16,
  //   borderRadius: 10,
  //   backgroundColor: Colors.lightText,
  // },
  // movieImage: {
  //   width: "100%",
  //   height: 400,
  //   resizeMode: "cover",
  //   marginBottom: 20,
  // },
  // movieTitle: {
  //   fontWeight: "bold",
  //   fontSize: 18,
  //   paddingVertical: 10,
  //   color: Colors.primaryText,
  // },
});
