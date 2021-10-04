import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "../styles/style";
import Lista from "../lista/Lista"


//página corrida
export default function Informacao22(props) {


    return (

        <View style={styles.content}>

            <View style={styles.boxInf22}>


                <View style={styles.layoutInf22}>


                    <View style={styles.areaTextoBoxInf22}>

                        <View style={styles.areaTituloBloco22}>
                            <Text style={styles.tituloBloco22}>{props.sessao}</Text>
                        </View>

                        <View style={styles.areaImgBloco22}>
                            <Image style={styles.imgInf22} source={require('../assets/img03.png')} />
                        </View>

                        <View style={styles.areaTitBlocoTexIntrod22}>
                            <Text style={styles.titBlocoTexIntrod22}>{props.nome}</Text>
                        </View>


                    </View>


                    <View style={styles.textoAtivBoxInf22}>
                   
                        <View style={styles.areaTextoAtivBoxInTit22}>
                            <Text style={styles.textoAtivBoxInTit22}>Benefícios:</Text>
                        </View>

                        <View style={styles.areaTextoConteúdo}>

                            <View style={styles.textoAtivBoxInfListaCol1}>
                                <Text style={styles.textoAtivBoxInfLista}>Fortalece os ossos</Text>      
                                <Text style={styles.textoAtivBoxInfLista}>Combate a depressão</Text>
                                <Text style={styles.textoAtivBoxInfLista}>Controla a pressão arterial</Text>
                            </View>

                            <View style={styles.textoAtivBoxInfListaCol2}>
                                <Text style={styles.textoAtivBoxInfLista}>Previne doenças cardiovasculares</Text>
                                <Text style={styles.textoAtivBoxInfLista}>Melhora a respiração</Text>
                                <Text style={styles.textoAtivBoxInfLista}>Aumenta a autoestima</Text>
                            </View>

                        </View>

                    </View>

                    <View style={styles.tituloBlocoInferior22}>
                        <Text> </Text>
                    </View>

                </View>
            </View>
        </View>

    )


}










