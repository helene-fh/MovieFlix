import { View, StyleSheet, FlatList } from "react-native";
import AppHeader from "../components/ui/AppHeader";
import Colors from "../utilities/constants/colors";
import { CATEGORIES } from "../data/CategoriesData";
import CategoryItem from "../components/ui/CategoryItem";
import ScreenTemplate from "./ScreenTemplate";

const MovieCategoriesScreen = ({ navigation }) => {
  // (category) datan jag kommer få från CATEGORIES automatiskt)
  const renderCategoryItem = (category) => {
    const onCategorySelectedHandler = () => {
      // skickar med data från objektet (options)
      navigation.navigate("Sammanfattning", { category: category.item });
    };
    return (
      // {category} referens till CATEGORIES
      // renderar
      <CategoryItem item={category.item} onPress={onCategorySelectedHandler} />
    );
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          numColumns={3}
          // renderItem tar varje objekt och gör detta för varje objekt som finns i listan, körs för varje objekt i listan CATEGORIES, vi kommer åt allt med hjälp av item.egenskapen, {category} är referens/representation till objektet
          // renderItem={(category) => {
          //   return (
          //     <View>
          //       <Text style={styles.title}>{category.item.title}</Text>
          //     </View>
          //   );
          // }}
          renderItem={renderCategoryItem}
        ></FlatList>
      </View>
    </ScreenTemplate>
  );
};

export default MovieCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    color: Colors.lightText,
    fontSize: 16,
    marginHorizontal: 12,
  },
});
