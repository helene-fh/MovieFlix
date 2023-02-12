// Kan ej få automatisk uppdatering när något ändrar sig utan useState
import { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import Colors from "../utilities/constants/colors";
import MainButton from "../components/ui/MainButton";
import AppHeader from "../components/ui/AppHeader";

const LoginScreen = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserNameHandler = (value) => {
    setUserName(value);
  };

  const onChangeUserPasswordHandler = (value) => {
    setPassword(value);
  };

  const onResetLoginHandler = () => {
    setUserName("");
  };

  const onLoginHandler = () => {
    if (userName.trim().length == 0 || password.trim().length == 0) {
      Alert.alert(
        "Problem med inloggning",
        "Användarnamn och lösenord måste anges!",
        [{ text: "Tack", style: "default", onPress: onResetLoginHandler }]
      );
      return;
    }
    onLogin(true);
  };
  const onRegisterHandler = () => {
    console.log("registrerad");
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userNameInput}
          placeholder="E-post"
          placeholderTextColor={"#c3cccc"}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={onChangeUserNameHandler}
        />
        <TextInput
          style={styles.userNameInput}
          placeholder="Lösenord"
          placeholderTextColor={"#c3cccc"}
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangeUserPasswordHandler}
        />
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onLoginHandler}> Logga In</MainButton>
          <MainButton onPressed={onRegisterHandler}>Registrera</MainButton>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 70,
  },
  userNameInput: {
    heigt: 28,
    fontSize: 16,
    borderBottomColor: Colors.secondaryText,
    borderBottomWidth: 1,
    paddingVertical: 4,
    marginVertical: 6,
    color: Colors.secondaryText,
  },
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    // IOS kräver backgrundfärg för att få till shadow
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 10,
    elevation: 10,
    //nedan krävs i IOS för shadow effekt
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
