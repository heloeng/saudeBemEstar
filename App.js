import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Content from "./content/Content";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { styles } from './styles/style';


export default function App() {

  return (

  <ScrollView>
    <View  style = {styles.container} >
      
   <Header />
   <Content />
  <Footer/>

    </View>
    </ScrollView>

    
  );
}

