import { useState, Fragment } from "react";
import { StyleSheet } from "react-native";
import Colors from "./utilities/constants/colors";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import MovieCategoriesScreen from "./screens/MovieCategoriesScreen";
import SeriesCategoryScreen from "./screens/SeriesCategoryScreen";
import DocumentaryCategoryScreen from "./screens/DocumentaryCategoryScreen";
import SportCategoryScreen from "./screens/SportCategoryScreen";
import MovieOverviewScreen from "./screens/MovieOverviewScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfileScreen from "./screens/UserProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Denna blir tillgänlig utanför App funktionen så att den blir tillgänglig globalt
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000000" },
        headerTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#000000" },
        tabBarActiveTintColor: "#f0f0f0f0",
        tabBarInactiveTintColor: "#781c1c",
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "Start sida",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // const isLoggedInHandler = (value) => {
  //   if (value) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // };

  // let screen = <LoginScreen onLogin={isLoggedInHandler} />;

  // if (isLoggedIn) {
  //   screen = <MainScreen />;
  // }

  return (
    <Fragment>
      {/* <StatusBar barStyle="light-content" /> */}
      {/* Kan använda Collors.gradient också men då utan [] paranteser */}
      {/* Statusbar, LinearGradient, SafeArea finns inbyggt i navigeringen */}
      {/* <LinearGradient
        colors={[
          Colors.primaryBackground800,
          Colors.primaryBackground600,
          Colors.primaryBackground400,
          Colors.primaryBackground200,
        ]}
        style={styles.screen}
      > */}
      {/* <ImageBackground
          source={require("./assets/images/Batman.jpeg")}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        > */}
      {/* <SafeAreaView style={styles.screen}> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#ffffff",
            contentStyle: { backgroundColor: "#000000" },
          }}
        >
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ title: "Start", headerShown: false }}
          />
          <Stack.Screen name="Movies" component={MovieCategoriesScreen} />
          <Stack.Screen name="Series" component={SeriesCategoryScreen} />
          <Stack.Screen
            name="Documentary"
            component={DocumentaryCategoryScreen}
          />
          <Stack.Screen name="Sport" component={SportCategoryScreen} />
          <Stack.Screen name="Sammanfattning" component={MovieOverviewScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return (
            //       <IconButton onPressed={onButtonPressHandler}></IconButton>
            //     );
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  // },
  // backgroundImage: {
  //   opacity: 0.15,
  // },
});
