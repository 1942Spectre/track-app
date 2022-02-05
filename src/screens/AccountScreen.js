import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

function AccountScreen() {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={{ fontSize: 48 }} h3>
        Account Screen
      </Text>

      <Button title="Sign Out" onPress={signOut} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
