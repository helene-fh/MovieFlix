import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPressed }) => {
  // const onButtonPress = () => {
  //   console.log("lägg till som favorit");
  // };

  return (
    <Pressable onPress={onPressed}>
      <Ionicons name="star" size={18} color="white"></Ionicons>
    </Pressable>
  );
};

export default IconButton;
