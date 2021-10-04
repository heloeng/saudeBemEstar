




import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/style";


export default function Imc() {

    const [valor, setValor] = useState({
        altura: 0,
        peso: 0,
    })

    //calculo
    const [calculovalor, setCalcularvalor] = useState({
        resultado: '',
    });

    const handleInputChange = (parametro, value) => {
        setValor({
            ...valor, [parametro]: value
        })
    }





    const calcularImc = () => {

        var imc = (valor.peso / (valor.altura * valor.altura)).toFixed(2)

        if (imc < 17) {
            setCalcularvalor({
                ...calculovalor, resultado:
               alert(` Seu IMC: ${imc} - Você está muito abaixo do peso`)
               
               
                // `${imc}  
                //  \n\nMuito abaixo do peso: Procure um médico.`

            })
        } else if ((imc >= 17 && imc <= 18.4)) {
            setCalcularvalor({
                ...calculovalor, resultado:
                
                alert(` Seu IMC: ${imc} - Você está abaixo do peso. Probalidade de ter fadiga, stress e ansiedade.`)
               
                // `${imc}  
                //  \n\nAbaixo do peso: fadiga, stress e ansiedade.`

            })

        } else if (imc >= 18.5 && imc <= 24.9) {
            setCalcularvalor({
                ...calculovalor, resultado:
                alert(` Seu IMC: ${imc} - Peso ideal: menor riscos de doenças  cardiacas e vasculares`)
                
                // `${imc}   
                // \n\nPeso ideal: menor riscos de doenças  cardiacas e vasculares.`
            })
        } else if (imc >= 25 && imc <= 29.9) {
            setCalcularvalor({
                ...calculovalor, resultado:
                alert(` Seu IMC: ${imc} - Acima do peso. Probalidade de ter fadiga, má circulação e varizes.`)


                // `${imc}   
                // \n\nAcima do peso. Possiveis sintomas: fadiga, má circulação e varizes.`

            })
        } else if (imc >= 30) {
            setCalcularvalor({
                ...calculovalor, resultado:

                alert(` Seu IMC: ${imc} - Sobre peso: Procure um médico urgente`)
                
                // `${imc}  
                //  \n\nSobre peso: Procure um médico urgente`
            })
        }
    }


    return (

        <View style={styles.content}>
            <View style={styles.boxImc}><Text style={styles.boxImcTitulo}>Calcule seu Imc</Text>


                <View>

                    <View>
                        <Text style={styles.boxImcTextoInput}>Informe o peso:</Text>
                        <TextInput style={styles.inputForm} placeholder="Ex.: 60.5"
                            keyboardType='numeric'
                            onChangeText={(valorDigitado) => handleInputChange("peso", valorDigitado)
                            } />

                        <Text style={styles.boxImcTextoInput}>Informe a altura:</Text>
                        <TextInput style={styles.inputForm} placeholder="Ex: 1.80"
                            keyboardType='numeric'
                            onChangeText={(valorDigitado) => handleInputChange("altura", valorDigitado)
                            } />
                    </View>


                    <View >
                        <View style={styles.boxImcBotaoArea}>
                            <TouchableOpacity style={styles.boxImcBotao} onPress={calcularImc}>
                                <Text style={styles.boxImcBotaoTexto}> Resultado </Text>
                            </TouchableOpacity>
                        </View>

                        {/* <View style={styles.visorResultado}>
                            <Text>O resultado do IMC é: {calculovalor.resultado}</Text>
                        </View> */}
                    </View>

                </View>

                <View style={styles.tituloBlocoInferior2}>
                        <Text> </Text>
                    </View>

            </View>
        </View>
    )
}