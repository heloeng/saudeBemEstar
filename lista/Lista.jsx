import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { styles } from "../styles/style";

// componente baseado em função
export default function Lista() {


    //array de lista estática
    const lista = [
        {nome: "fortalece os ossos" },
        {nome: "Previne Pressão Alta" },
        {nome: "beneficio3" },
        {nome: "beneficio4" },
        {nome: "beneficio5" },
        {nome: "beneficio3" },
        {nome: "beneficio4" },
        {nome: "beneficio5" },


    ]

   

    return (

        <View >

            {/* renderizar a flat list */}
            {/* // os dados da flat list vai vir da lista pessoa */}

           

            <FlatList  style = {styles.containerLista}
horizontal
                data={lista}


            // dentro do render chamo uma função anônima
//  objeto será retornar um text para cada item da minha lista
// abro parenteses defino -item que é o parametro-
// na propridade text:-intem.nome- para cada item da minha lista exiba o nome */

                renderItem={({ item }) => <Text>{item.nome}</Text>}
            />
        </View>

    );

    

}