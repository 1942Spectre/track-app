import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

function loadingScreen() {

  const {tryLocalSignin} = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
}

export default loadingScreen;
