import React,{useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "../styles/style";
import BannerInicial from "../banner1/BannerInicial";
import Informacao from "../informacoes/Informacao";
import Banner2 from "../banner2/Banner2";
import Informacao2 from "../informacoes2/Informacao2"
import Informacao22 from "../informacoes22/Informacao22";
// import InformacaoEx from "../informacoesImc/InformacaoImc";
import Imc from "../imc/Imc";
import InformacaoImc from "../informacoesImc/InformacaoImc";

export default function Content(){
    
    return (

<View style = {styles.content}> 


<BannerInicial />

<View>


<Informacao  titBloco="+ Saúde"  titulo = "Quer Cuidar" autor= "da sua saúde?" conteudo = ""/>


{/* bloco de  exercicios fisicos introdução */}
<Informacao2   sessao = "Exercícios Físicos" nome = "Faz bem a saúde mental." autor = "Menor riscos de desenvolver doenças crônicas." conteudo = "Ajuda a controlar a glicemia."  />



{/* informação passada para o bloco de  exercicios fisicos corrida */}
<Informacao22   sessao = "Exercícios Físicos" nome = "Corrida" autor = "" conteudo = ""  />


</View>

{/* < Banner2 />   */}

{/* informção sobre imc  */}
<InformacaoImc titBloco="Bem Estar"  titulo = "Você sabe" autor= "o que é IMC?" conteudo = "" conteudo = ""/>

{/* <Informacao3/> */}
<Imc/>


</View>

    )


}