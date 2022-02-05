import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

function SignupScreen({ navigation }) {
  const { state, signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(state);
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }} h3>
        Sign up for Tracker
      </Text>
      <View>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          label="email"
        />
        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          label="Password"
        />
        {state.errorMessage ? (
          <Text style={styles.error}>{state.errorMessage}</Text>
        ) : null}
        <Button
          onPress={() => {
            console.log(email);
            signUp({ email, password });
          }}
          containerStyle={styles.spacer}
          title="Sign Up"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text> Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
  error: {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    color: "red",
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
