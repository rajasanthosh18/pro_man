import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {useRouter} from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          router.replace("/(tabs)/home");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios.post("http://10.0.0.0:3000/login", user).then((response) => {
      const token = response.data.token;
      console.log("token",token)
      AsyncStorage.setItem("authToken", token);
      router.replace("/(tabs)/home");
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      <View style={{ marginTop: 200 }}>
        <Text style={{ fontSize: 30, fontWeight: 600, color: "#0066b2" }}>
          PRO_MAN
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 10,
              fontWeight: 600,
              alignItems: "center",
            }}
          >
            Log in to your account
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              style={{ width: 300, marginVertical: 10, paddingHorizontal: 15 }}
              value={email}
              onChangeText={(text)=>setEmail(text)}
              placeholder="Enter your email"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="black"
            />
            <TextInput
              style={{ width: 300, marginVertical: 10, paddingHorizontal: 15 }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ fontWeight: 500, color: "blue" }}>
            Forgot Password
          </Text>
        </View>

        <View>
          <Pressable
            style={{
              marginTop: 25,
              backgroundColor: "#0092ca",
              alignItems: "centre",
              borderRadius: 15,
              paddingVertical: 10,
              width: 200,
              marginLeft: "auto",
              marginRight: "auto",
            }}

            onPress={handleLogin}
          >
            <Text style={{ fontSize: 20, textAlign: "center" , color:"white"}}>Login</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={{marginLeft:"auto",marginRight:"auto",marginTop:20}}
          onPress={()=>router.push("./register")}
          >
            <Text style={{color:"gray"}}>Don't have an account? Register</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
