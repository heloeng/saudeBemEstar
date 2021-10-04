import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


container:{
paddingTop: 70,
flex: 1,
backgroundColor: "#FFFFFF"

},



header:{
    // flex:2,
    height: 60,
    backgroundColor: "#4DFF0A",
    justifyContent: "center",
    alignItems: "center",
    
},

textoHeader:{

    fontSize: 35

},


content:{
    // flex:3,
    flexDirection: "column",
backgroundColor: "#FFE2DD",

},


footer:{
    // flex:1,
    height: 30,
    backgroundColor: "#4DFF0A",
    justifyContent: "center",
    alignItems: "center"
},

textoFooter:{

    fontSize: 20

},


informacao:{
    // flex:3,
    flexDirection: "column",
backgroundColor: "red",

},


//box de informações
box:{
height: 200,
// width: 200,
backgroundColor: "#FFFFFF",
// margin: 10,
marginTop: 10,

},



///////////////////////imagem incial////////////////////
imgInicial:{
// backgroundColor: "blue",
borderColor: 5,
height: 200,
width: 400
},


areaImgInicial:{
// backgroundColor: "red",
justifyContent: "center",
alignItems: "center",
// alignContent: "center",
    height: 200,
    
},

/////////////////fim da imagem inicial/////////////////////





/////////////////////////////////// BOX EXERCICIO FISICOO FISICO CORRIDA///////////////////////////////////




//box de informação: área do box de  exercicio fisico corrida 
boxInf22:{
    padding: 15,
//    flexDirection: "row",
//    alignItems: "center",
    height: 500,
    // width: 200,
    backgroundColor: "#FFFFFF",
    //  margin: 10,


// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
},





//área de texto vs imagem ok
layoutInf22:{
 
    // backgroundColor: "pink",
  
    },



        // área do texto box de informação
        areaTextoBoxInf22:{
         
                    },


//área do titulo exercicios fisico do box corrida
 areaTituloBloco22:{
backgroundColor: "#94FEFF"

 },


// titulo box exercicio fisicos  corrida
tituloBloco22:{

    backgroundColor:"#C9F823",
   justifyContent: "center",
    fontSize: 28,
    // width: 200,
    // marginBottom: 4,
    fontWeight: "bold",
    
    
    // sombra android
    elevation: 24,
    
    
    //sombra ios
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00

},


// áreda imagem exercicio fisico corrida
areaImgBloco22:{

    // backgroundColor: "black",
    height: 145,
    alignItems: "center",
    justifyContent: "center"
},


 //imagem do box : área exercicios fisico corrida
 imgInf22:{
margin: 16,
    // backgroundColor: "red",
    width: 380,
    height: 145,
    
    
    },





//ára do titulo corrida
areaTitBlocoTexIntrod22:{
// backgroundColor: "blue"

    },


// bloco 2 - exercicio fisico: titulo corrida-  titulo inserido via props
titBlocoTexIntrod22:{
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#EFFFF4",
 



    // sombra android
    elevation: 24,
    
    
    //sombra ios
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,




            },


// aréa do texto: título e lista de beneficios/corrida(cards)
 textoAtivBoxInf22:{
    // backgroundColor: "#EC8EFF"

 },


//  área do titulo text atividade
 areaTextoAtivBoxInTit22:{

// backgroundColor: "pink",

 },

// titulo da lista de exercicios: "benecifícios"
textoAtivBoxInTit22:{
    fontSize: 20,
    fontWeight: "bold",

// backgroundColor: "black",

},



// lista de exercicios: benecifícios corrida
textoAtivBoxInfLista:{
// backgroundColor: "#EFFFF4",
fontSize: 19,
textAlign:"center",
fontWeight: "bold"
},


//área do da lista de benefícios corrida: duas colunas
areaTextoConteúdo:{
// backgroundColor:"red",
flexDirection: "row",
justifyContent: "space-around",
alignItems: "center",
height: 200,

},


//área coluna 1 lista de beneficios corrida
textoAtivBoxInfListaCol1:{
width: 170,
backgroundColor: "#FFF6F4",
height: 190,
justifyContent: "space-around",



// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00






},




// área coluna 2 lista de beneficios corrida
textoAtivBoxInfListaCol2:{
width: 170,
height: 190,
backgroundColor: "#FFF6F4",
justifyContent: "space-around",



// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00




},







// fita inferior bloco exercicios fisicos corrida
tituloBlocoInferior22:{
    
 backgroundColor:"#C9F823",
  height: 30,


// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
    
},






/////////////////////////////fim box exercicio fisico corrida/////////////////////////////





////////////////////////BOX 2 DE INFORMAÇÃO - exercicio////////////////////////////////////




//box de informação  - exercicio fisico 
// titulo vs textos introdutório
boxInf2:{
    marginVertical: 20,
    padding: 15,
//    flexDirection: "row",
  
    height: 500,
    // width: 200,
    backgroundColor: "#FFFFFF",
    
justifyContent: "center",
alignItems: "center",
// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
},





//área de bloco/texto vs bloco/imagem vs bloco lista/texto vs fita inferior
layoutInf2:{
    // flexDirection: "row",
    // backgroundColor: "pink",
    height: 450,
    // flexDirection: "collumn",
    // justifyContent: "space-between",
    // alignContent: "space-between"
    },
    
 


// área do texto box  de informação exercicios físicos
  //  titulo do bloco vs texto introdutório
  areaTextoBoxInf2:{
    height: 150,
    // backgroundColor: "blue"
      },
    

//área do  titulo do bloco informação 1
areaTituloBloco2:{
    backgroundColor:"#C9F823",
    height: 40,

     // sombra android
     elevation: 24,
        
     //sombra ios
     shadowColor: "#000",
     shadowOffset: {
         width: 0,
         height: 12,
     },
     shadowOpacity: 0.58,
     shadowRadius: 16.00
    },


//titulo do bloco informação exercícios físicos
tituloBloco2:{
    fontSize: 28,
    fontWeight: "bold",
    color: "black"
},





// área do texto introdutório exercícios físicos
areaTitBlocoTexIntrod2:{

    backgroundColor: "#EFFFF4",


// sombra android
elevation: 24,
        
//sombra ios
shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,


height: 110,

justifyContent: "space-around",
alignContent: "center",



},


// bloco - texto introdutório exercício fisicos - 
//  textos inserido via props
titBlocoTexIntrod2:{
    fontSize: 18,
    fontWeight: "bold",
     textAlign: "center",  

  },




// área da imagem  vs texto exercícios fisico
layoutTextImg2:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "blue",
 height: 270
 
  },


//área da imagem box exercicios físicos
areaImgInf2:{
backgroundColor: "#FFF6F4",
height: 250,
width: 170,
justifyContent: "center",
alignItems: "center",

// sombra android
elevation: 24,
        
//sombra ios
shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00



  },


 //imagem do box 2 : exercicios
 imgInf2:{

    width: 150,
    height: 200
     
    },

// área do título da lista de modalidades vs modalidades de atividades
    areaTextoAtivBoxInf2:{
        justifyContent: "space-around",
         alignItems: "center",
         backgroundColor: "#FFF6F4",
        height: 250,
        width: 170,


// sombra android
elevation: 24,
        
//sombra ios
shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00



    },

//área do título atividade
    areaTextoAtivBoxInTit2:{
    // backgroundColor: "blue",
    },


// titulo da lista de exercicios benecificios da corrida
textoAtivBoxInTit2:{
    fontSize: 22,
color: "black",
fontWeight: "bold",
// backgroundColor: "red",

    },
    



// área do texto da lista de atividades
areaTextoAtivBoxLista:{
// backgroundColor: "#FFF6F4",
justifyContent: "space-between",

},


//lista de modalidade exercícios físicos
textoAtivBoxInf2:{
color: "black",
fontSize: 17
},




// área fita inferior bloco2
tituloBlocoInferior2:{
    
    backgroundColor:"#C9F823",
    height: 30,



// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
    
},








                          
    /////////////////fim box exercicios fisicos /////////////////// //////////////////    







/////////////////////////BOX INFORMAÇÃO IMC////////////

boxInf1IMc:{
    padding: 15,

    height: 400,
   
    backgroundColor: "#FFFFFF",
    margin: 10,

// sombra android
elevation: 24,

//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
},





//área de texto vs imagem
layoutInfImc:{
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-between",
    height: 220
    },


// área do título do box vs texto introdutório
areaTextoImc:{

backgroundColor: "red",
height: 220

    },


    // área do titulo do bloco
    areaTituloBlocoImc:{
        backgroundColor:"#C9F823",
        // fontSize: 28,
        // width: 200,
        // marginBottom: 4,
        
        // fontWeight: "bold",
        
        height: 40,
        // sombra android
        elevation: 24,
        
        //sombra ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,




justifyContent: "center",
alignContent: "center",


    },



//  titulo do bloco informação  alimentação

tituloBlocoImc:{
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
    
    },







// área do texto introdutório
    areaTextoIntrodImc:{
        justifyContent: "center",
        alignItems: "center",

// sombra android
elevation: 24,


backgroundColor: "#CAFFD2",

//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

height: 180,
width: 170
    },





// titulo do box 1 
textoInfTituloImc:{
    // marginTop: 35,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center"
    },
    



areaImgInfImc:{

//  backgroundColor: "red",
width: 170,
height: 220,
alignItems: "center",
justifyContent: "center"
        },

//imagem box

imgInfImc:{
    // backgroundColor: "red",
    // marginLeft: 5,
    // marginRight: 5,
    width: 160,
    height: 170,
    marginRight: 4
    
    },




    

//area do botao de dicas do box informação 1
botaoDicInfo1Imc: {
    flex:1,
// marginTop: 30,
// marginBottom: 30,
flexDirection: "row",
 justifyContent: "space-around",
 alignItems: "center",
    // backgroundColor: "pink",
height: 120
    

},





//  botao de dicas do box informação 1
botaoDicInfo1FontImc: {
    

    alignItems: "center",
    backgroundColor: "#76FFA2",
    width: 70,
    height: 60,
  //   borderRadius: 15,
    justifyContent: "center",
    alignContent: "center",
   
  
  
  
  // sombra android
  elevation: 24,
  
  
  //sombra ios
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00
  
      },
      
  

areaTextInfBloco1Imc:{

alignItems: "center",
justifyContent: "center",

height: 30,
      },


//texto inferior do box 1 alimentação
textInfBloco1Imc:{
fontSize: 20,
fontWeight: "bold",

},



//fita/ fundo inferior do bloco informação 1
tituloBlocoInferiorImc:{
    backgroundColor:"#C9F823",
    // marginTop: 26,

height: 30,

// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
    
    },







/////////////////////FIM BOX INFORMAÇÃO IMC /////////////////////








////////////////////////BOX 1 DE INFORMAÇÃO////////////////////////////////////

boxInf1:{
    padding: 15,

    height: 400,
   
    backgroundColor: "#FFFFFF",
    margin: 10,

// sombra android
elevation: 24,

//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
},





//área de texto vs imagem
layoutInf:{
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-between",
    height: 220
    },


// área do título do box vs texto introdutório
    areaTexto:{
justifyContent: "space-around",
// backgroundColor: "red",
height: 220

    },


    // área do titulo do bloco
    areaTituloBloco:{
        backgroundColor:"#C9F823",
      
        
        height: 40,
        // sombra android
        elevation: 24,
        
        //sombra ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00

    },



//  titulo do bloco informação  alimentação

tituloBloco:{
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
    },


// área do texto introdutório
    areaTextoIntrod:{
        justifyContent: "center",
        alignItems: "center",
backgroundColor: "#CAFFD2",
height: 170,
width: 170,

 // sombra android
 elevation: 24,
        
 //sombra ios
 shadowColor: "#000",
 shadowOffset: {
     width: 0,
     height: 12,
 },
 shadowOpacity: 0.58,
 shadowRadius: 16.00





    },





// titulo do box 1 
textoInfTitulo:{
    // marginTop: 35,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center"
    },
    



 areaImgInf:{

//  backgroundColor: "red",
width: 170,
height: 200,
alignItems: "center",
justifyContent: "center"
        },

//imagem box

imgInf:{
    
    width: 150,
    height: 150,
    marginRight: 4
    
    },




    

//area do botao de dicas do box informação 1
botaoDicInfo1: {
    flex:1,

flexDirection: "row",
 justifyContent: "space-around",
 alignItems: "center",
    // backgroundColor: "pink",
height: 120
    

},





//  botao de dicas do box informação 1
botaoDicInfo1Font: {
    

    alignItems: "center",
    backgroundColor: "#76FFA2",
    width: 70,
    height: 60,
  //   borderRadius: 15,
    justifyContent: "center",
    alignContent: "center",
   
  
  
  
  // sombra android
  elevation: 24,
  
  
  //sombra ios
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00
  
      },
      
  

 areaTextInfBloco1:{

alignItems: "center",
justifyContent: "center",
// backgroundColor: "red",
height: 30,
      },


//texto inferior do box 1 alimentação
textInfBloco1:{
fontSize: 20,
fontWeight: "bold",

},



//fita/ fundo inferior do bloco informação 1
tituloBlocoInferior:{
    backgroundColor:"#C9F823",
    // marginTop: 26,

height: 30,

// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00
    
    },




textoBotaoDicasInf1:{
fontWeight: "bold",
fontSize: 18

},

    

////////////////////////FIM BOX 1 DE INFORMAÇÃO////////////////////////////////////







////////////////////// BOX DO IMC//////////////////////////////////////////////

//box do IMC
boxImc:{
    // flexDirection: "column",
    height: 450,
    // width: 200,
    backgroundColor: "white",
    margin: 10,

    justifyContent: "center",
  
    padding: 15,
//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,


// sombra android
elevation: 24

    },

   
 //titulo do box imc
boxImcTitulo:{

 textAlign: "center",
fontSize: 28,
 fontWeight: "bold",
 backgroundColor:"#C9F823",
color: "black",




//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

// sombra android
elevation: 24

    }, 


    // texto dos input
 boxImcTextoInput:{
     marginTop: 35,
textAlign: "center",
fontSize: 17,
fontWeight: "bold",
 // backgroundColor: "blue",
 color: "black"
            }, 
        




//input de entrada de dados
inputForm: {
// paddingHorizontal: 2,
// paddingVertical: 2,
marginVertical: 4,
marginHorizontal: 8,
borderWidth: 1,
height: 60,
backgroundColor: "#FFFFFF",
textAlign: "center"
},


//area do botao
boxImcBotaoArea:{
justifyContent: "center",
 alignItems: "center",

},


//botao do imc
boxImcBotao: {
margin: 15,
backgroundColor: "#76FFA2",
width: 170,
height: 40,
borderRadius: 8,
justifyContent: "center",
alignItems: "center",
padding: 10,



// sombra android
elevation: 24,


//sombra ios
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00



},



// texto do botão imc
boxImcBotaoTexto: {
fontSize: 25,
color: "black",


},

//saída do resultado
// visorResultado: {
// fontWeight: "bold",
// borderWidth: 1,
// marginLeft: 15,
// marginRight: 15,
// height: 90,
// backgroundColor: "white",
// alignItems: "center"
// },


// cardImc:{
// backgroundColor: "red",
// width: 200,
// height: 100
// },





//box do IMC
boxCardImc:{
    // flexDirection: "column",
    height: 450,
    // width: 200,
    backgroundColor: "white",
    margin: 10,

}



})