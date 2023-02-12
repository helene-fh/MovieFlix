import { View, FlatList, StyleSheet } from "react-native";
import { SPORT_CATEGORIES } from "../data/CategoriesData";
import CategoryItem from "../components/ui/CategoryItem";
import AppHeader from "../components/ui/AppHeader";
import Category from "../models/Category";

const SportCategoryScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item}></CategoryItem>;
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={SPORT_CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderCategoryItem}
      ></FlatList>
    </View>
  );
};

export default SportCategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
