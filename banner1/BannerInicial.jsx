import React, { useState } from "react";
import { View, Text, Image, } from "react-native";
import { styles } from "../styles/style";


export default function BannerInicial() {

    return (

        <View style={styles.content}>


            <View style={styles.box}>
                
                <View style={styles.areaImgInicial}>
                <Image style={styles.imgInicial} source={require('../assets/img04.png')} />
              
                </View>



            </View>


        </View>

    )


}