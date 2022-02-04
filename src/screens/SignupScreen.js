import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }} h3>
        Sign up for Tracker
      </Text>
      <View>
        <Input autoCapitalize="none" autoCorrect={false} onChangeText={setEmail} value={email}  style={styles.input} label="email" />
        <Input secureTextEntry={true} autoCapitalize="none" autoCorrect={false} onChangeText={setPassword} value={password} style={styles.input} label="Password" />
        <Button onPress={() => console.log(email)} containerStyle={styles.spacer} title="Sign Up" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
  input: {
    padding: 5,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
    marginBottom: "25%",
  },
});
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
