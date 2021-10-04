import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "../styles/style";

// página exercícios fisico
export default function Informacao2(props) {

    //     return (

    //         <View>
    //             <Text>Sessão: {props.sessao}</Text>
    //             <Text>Titulo: {props.titulo}</Text>
    //             <Text>Nome: {props.nome}</Text>
    //             <Text>Autor: {props.autor}</Text>
    //             <Text>Conteúdo: {props.conteudo}</Text>
    //         </View>

    //     )


    // }




    return (

        <View style={styles.content}>
            <View style={styles.boxInf2}>


                <View style={styles.layoutInf2}>

                    <View style={styles.areaTextoBoxInf2}>

                        <View style={styles.areaTituloBloco2}>
                            <Text style={styles.tituloBloco2}>{props.sessao}</Text>
                        </View>

                        <View style={styles.areaTitBlocoTexIntrod2}>
                            <Text style={styles.titBlocoTexIntrod2}>{props.nome}</Text>
                            <Text style={styles.titBlocoTexIntrod2}>{props.autor}</Text>
                            <Text style={styles.titBlocoTexIntrod2}>{props.conteudo}</Text>
                        </View>

                    </View>

                    <View style={styles.layoutTextImg2}>

                        <View style={styles.areaImgInf2}>
                            <Image style={styles.imgInf2} source={require('../assets/img02.png')} />
                        </View>

                        <View style={styles.areaTextoAtivBoxInf2}>

                            <View style={styles.areaTextoAtivBoxInTit2}>
                                <Text style={styles.textoAtivBoxInTit2}>Modalidades:</Text>
                            </View>

                            <View style={styles.areaTextoAtivBoxLista}>
                                
                                <Text style={styles.textoAtivBoxInf2}>Caminhada;</Text>
                                <Text style={styles.textoAtivBoxInf2}>Corrida;</Text>
                                <Text style={styles.textoAtivBoxInf2}>Hidroginástica;</Text>
                                <Text style={styles.textoAtivBoxInf2}>Musculação;</Text>
                                <Text style={styles.textoAtivBoxInf2}>Natação;</Text>
                                <Text style={styles.textoAtivBoxInf2}>Pilates;</Text>
                                <Text style={styles.textoAtivBoxInf2}>Yoga.</Text>
                           
                            </View>

                        </View>

                    </View>
                    
                    <View style={styles.tituloBlocoInferior2}>
                        <Text> </Text>
                    </View>

                </View>



            </View>

        </View>


    )


}










