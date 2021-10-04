import React, { Component } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { styles } from "../styles/style";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

// export default function Informacao(props){
export default class Informacao extends Component {


    state = {
        titBloco: this.props.titBloco,
        titulo: this.props.titulo,
        autor: this.props.autor,
        conteudo: this.props.conteudo,
        // foto: <img src="../styles/" alt="" />

    }

    render() {

        return (

            <View style={styles.content}>
                <View style={styles.boxInf1}>


                    <View style={styles.layoutInf}>

                        <View style={styles.areaTexto}>

                            <View style={styles.areaTituloBloco}>
                                <Text style={styles.tituloBloco}>{this.state.titBloco}</Text>
                            </View>

                            <View style={styles.areaTextoIntrod}>
                                <Text style={styles.textoInfTitulo}>{this.state.titulo}</Text>
                                <Text style={styles.textoInfTitulo}>{this.state.autor}</Text>
                                <Text style={styles.textoInfTitulo}>{this.state.conteudo}</Text>
                            </View>

                        </View>

                        <View style={styles.areaImgInf}>
                            <Image style={styles.imgInf} source={require('../assets/laranja.png')} />
                        </View>

                    </View>

                    {/* 
                    <View style={styles.boxImcBotaoArea}>
                            <TouchableOpacity style={styles.boxImcBotao} onPress={calcularImc}>
                                <Text style={styles.boxImcBotaoTexto}> Resultado </Text>
                            </TouchableOpacity>
                        </View> */}

                    {/* <TouchableOpacity ><Text style={styles.botaoDicInfo1Font}>Dica 11</Text></TouchableOpacity> */}

                    <View style={styles.botaoDicInfo1}>

                        {/* <Text style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "Alimentação", titulo: "Frutas:", autor: "Coma frutas diariamente", conteudo: "coma" })}>Dica 1</Text> */}

                        <TouchableOpacity style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "Alimentação", titulo: "Consuma Frutas", autor: "diariamente." })}><Text style={styles.textoBotaoDicasInf1}>Dica 1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "Alimentação", titulo: "Consuma alimentos", autor: "integrais." })}><Text style={styles.textoBotaoDicasInf1}>Dica 2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "Alimentação", titulo: "Evite alimentos", autor: "industrializados." })}><Text style={styles.textoBotaoDicasInf1}>Dica 3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "Hidrate-se", titulo: "", autor: "Beba água." })}><Text style={styles.textoBotaoDicasInf1}>Dica 4</Text></TouchableOpacity>


                        {/* <Text style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "2Alimentação", titulo: "", autor: "", conteudo: "" })}>Dica 2</Text> */}
                        {/* <Text style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "3Alimentação", titulo: "", autor: "", conteudo: "" })}>Dica 3</Text> */}
                        {/* <Text style={styles.botaoDicInfo1Font} onPress={() => this.setState({ titBloco: "4Alimentação", titulo: "w", autor: "w", conteudo: "oi" })}>Dica 4</Text>  */}
                    </View>

                    <View style={styles.areaTextInfBloco1}>
                        <Text style={styles.textInfBloco1}> Confira nossas dicas!</Text>
                    </View>

                    <View style={styles.tituloBlocoInferior}>
                        <Text></Text>
                    </View>

                </View>

            </View>


        )

    }
}