import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

function SigninScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }} h3>
        Sign in
      </Text>
      <View>
        <Input autoCapitalize="none" autoCorrect={false} onChangeText={setEmail} value={email}  style={styles.input} label="email" />
        <Input secureTextEntry={true} autoCapitalize="none" autoCorrect={false} onChangeText={setPassword} value={password} style={styles.input} label="Password" />
        <Button onPress={() => console.log(email)} containerStyle={styles.spacer} title="Sign In" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SigninScreen;
