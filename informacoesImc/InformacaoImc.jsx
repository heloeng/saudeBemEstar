import React, { Component } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { styles } from "../styles/style";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";


//pagina sobre IMC


// export default function Informacao(props){
export default class InformacaoImc extends Component {




state = {
    titBloco: this.props.titBloco,
    titulo: this.props.titulo,
    autor: this.props.autor,
    conteudo: this.props.conteudo,
 

}

render() {

    return (

        <View style={styles.content}>
            <View style={styles.boxInf1IMc}>


                <View style={styles.layoutInfImc}>

                    <View style={styles.areaTextoImc}>

                        <View style={styles.areaTituloBlocoImc}>
                            <Text style={styles.tituloBlocoImc}>{this.state.titBloco}</Text>
                        </View>

                        <View style={styles.areaTextoIntrodImc}>
                            <Text style={styles.textoInfTituloImc}>{this.state.titulo}</Text>
                            <Text style={styles.textoInfTituloImc}>{this.state.autor}</Text>
                            <Text style={styles.textoInfTituloImc}>{this.state.conteudo}</Text>
                        </View>

                    </View>

                    <View style={styles.areaImgInfImc}>
                        <Image style={styles.imgInfImc} source={require('../assets/img06.png')} />
                    </View>

                </View>

             
                <View style={styles.botaoDicInfo1Imc}>

                   
                    <TouchableOpacity style={styles.botaoDicInfo1FontImc} onPress={() => this.setState({ titBloco: "IMC", titulo: "É o índice de", autor: "massa corporal" })}><Text style={styles.textoBotaoDicasInf1}>---></Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botaoDicInfo1FontImc} onPress={() => this.setState({ titBloco: "IMC", titulo: "é o cálculo do", autor: "(peso x altura)" })}><Text style={styles.textoBotaoDicasInf1}>---></Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botaoDicInfo1FontImc} onPress={() => this.setState({ titBloco: "IMC", titulo: "que informa a", autor: "massa corporal" })}><Text style={styles.textoBotaoDicasInf1}>---></Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botaoDicInfo1FontImc} onPress={() => this.setState({ titBloco: "IMC", titulo: "avaliando se a pessoa", autor: "está no peso ideal." })}><Text style={styles.textoBotaoDicasInf1}>---></Text></TouchableOpacity>



                    
                </View>

                <View style={styles.areaTextInfBloco1Imc}>
                    <Text style={styles.textInfBloco1Imc}>Você está no peso ideal?</Text>
                </View>

                <View style={styles.tituloBlocoInferiorImc}>
                    <Text></Text>
                </View>

            </View>

        </View>


    )

}
}