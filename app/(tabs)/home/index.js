import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const index = () => {
  const todos=[];
  return (
    <>
      <View style={{marginHorizontal:10,marginVertical:20,paddingVertical:10,borderRadius:20,paddingHorizontal:10, flexDirection:"row",alignItems:"center", gap:12, backgroundColor:"darkgray"}}>
        <Pressable style={{backgroundColor:"gray", paddingHorizontal:10, paddingVertical:5, borderRadius:25,alignItems:"center", justifyContent:"center" }}
        >
            <Text style={{color:"white" , textAlign:"center"}}>All</Text>
        </Pressable>
        <Pressable style={{backgroundColor:"gray", paddingHorizontal:10, paddingVertical:5, borderRadius:25,alignItems:"center", justifyContent:"center" }}
        >
            <Text style={{color:"white" , textAlign:"center"}}>work</Text>
        </Pressable>
        <Pressable style={{backgroundColor:"gray", paddingHorizontal:10, paddingVertical:5, borderRadius:25,marginRight: "auto",alignItems:"center", justifyContent:"center" }}
        >
            <Text style={{color:"white" , textAlign:"center"}}>hobby</Text>
        </Pressable>
        <Pressable>
          <AntDesign name="pluscircle" size={30} color="black" />
        </Pressable>
      </View>
      <ScrollView style={{flex:1}}>
        <View style={{padding:10}}>
          {todos.length > 0 ? (
            <View></View>
          ):(
            <View style={{flex:1, justifyContent:"center", alignItems:"center",marginTop:200 ,textAlign:"center"}}>
              <Pressable>
                <AntDesign name="pluscircle" size={100} color="black" />
              </Pressable>
              <Text style={{marginTop:20}} >No tasks for today.Add task for today!!</Text>
            </View>
          )
          }
        </View>
      </ScrollView>
    </>
  )
}

export default index

const styles = StyleSheet.create({})