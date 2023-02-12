import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../utilities/constants/colors";
import { CATEGORIES } from "../data/CategoriesData";
import AppHeader from "../components/ui/AppHeader";
import CategoryItem from "../components/ui/CategoryItem";

const SeriesCategoryScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item}></CategoryItem>;
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderCategoryItem}
      ></FlatList>
    </View>
  );
};

export default SeriesCategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
