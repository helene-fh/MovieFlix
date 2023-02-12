import { View, Text, FlatList, StyleSheet } from "react-native";
import AppHeader from "../components/ui/AppHeader";
import { DOCUMENTARY_CATEGORIES } from "../data/CategoriesData";
import CategoryItem from "../components/ui/CategoryItem";

const DocumentaryCategoryScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item}></CategoryItem>;
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={DOCUMENTARY_CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderCategoryItem}
      ></FlatList>
    </View>
  );
};

export default DocumentaryCategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
