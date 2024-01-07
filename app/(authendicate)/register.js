import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from 'axios'

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegister = () => {
    const user = { 
        name:name,
        email:email,
        password:password
    }

    axios.post("http://10.0.0.0:3000/register",user).then((response) => {
        console.log(response);
        Alert.alert("Registration successfull","You have been registered succesfully");
        setEmail("");
        setPassword("");
        setName("");
    }).catch((error) => {
        Alert.alert("Registration failed","an error ocurred during registration");
        console.log("error",error)
    })
}
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
            Register in to your account
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
              name="person"
              size={24}
              color="black"
            />
            <TextInput
              style={{ width: 300, marginVertical: 10, paddingHorizontal: 15 }}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter your name"
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
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              style={{ width: 300, marginVertical: 10, paddingHorizontal: 15 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
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

        <View>
          <Pressable
            style={{
              marginTop: 35,
              backgroundColor: "#0092ca",
              alignItems: "centre",
              borderRadius: 15,
              paddingVertical: 10,
              width: 200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onPress={handleRegister}
          >
            <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>
              Register
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={{ marginLeft: "auto", marginRight: "auto", marginTop: 20 }}
            onPress={() => router.push("./login")}
          >
            <Text style={{ color: "gray" }}>
              Already have an account? Register
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
