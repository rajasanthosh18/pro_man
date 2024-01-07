import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ tabBarLabel: "Home", tabBarLabelStyle: {color:"skyblue"}, headerShown:false, tabBarIcon:({focused}) => 
        focused ? (<FontAwesome name="tasks" size={24} color="skyblue" />) :(<FontAwesome name="tasks" size={24} color="black" />)
      }} />
      <Tabs.Screen name="calendar" options={{ tabBarLabel: "calendar", tabBarLabelStyle: {color:"skyblue"}, headerShown:false, tabBarIcon:({focused}) => 
        focused ? (<AntDesign name="calendar" size={24} color="skyblue" />) :(<AntDesign name="calendar" size={24} color="black" />)
      }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile", tabBarLabelStyle: {color:"skyblue"}, headerShown:false, tabBarIcon:({focused}) => 
        focused ? (<MaterialCommunityIcons name="account-details" size={24} color="skyblue" />) :(<MaterialCommunityIcons name="account-details" size={24} color="black" />)
      }} />
    </Tabs>
  );
};

export default Layout;
