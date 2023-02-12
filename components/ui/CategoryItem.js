import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../../utilities/constants/colors";

const CategoryItem = ({ item, onPress }) => {
  return (
    <View style={styles.grid}>
      <Pressable onPress={onPress}>
        <View style={styles.categoryContainer}>
          <Image style={styles.image} source={item.image}></Image>
          <Text style={styles.categoryTitle}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    marginTop: 40,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primaryText,
  },
  categoryTitle: {
    color: Colors.primaryText,
    fontSize: 18,
    marginVertical: 8,
  },
  categoryContainer: {
    flex: 1,
    alignItems: "center",
  },
});
