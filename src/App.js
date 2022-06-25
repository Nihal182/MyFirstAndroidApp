import React from 'react';
import {View, Image, Text, Linking, Pressable, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const colorGithub = '#010409' ;
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/71907716?s=400&u=b374d68bd9a654f0ed2551c1dc9e8964e2194263&v=4';
const colorFontGithub ='#C9D1D9' ;
const colorDarkFontGithub ='#4F565E';
const urlToMyGithub = 'https://github.com/Nihal182' ;

const App = ()=> {

    const handlePressGoToGithub = async ()=> {
        console.log('Verificando Link');
      const res = await  Linking.canOpenURL(urlToMyGithub);
      if (res){
          console.log('Link aprovado');
         await Linking.openURL(urlToMyGithub);
      }
    };

    return (
     <SafeAreaView style={style.container}>
         <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
            <Image accessibilityLabel="Nayara com fone de ouvido" style={style.avatar} source={{uri: imageProfileGithub}} />
            <Text accessibilityLabel="Nayara Arruda de Carvalho" style={[style.defaultText, style.name]}> Nayara Arruda de Carvalho</Text>
            <Text accessibilityLabel="@Nihal182" style={[style.defaultText, style.nickname]}> @Nihal182</Text>
            <Text accessibilityLabel=" Descrição: Front End Jr || HTML || CSS || 2D Game Designer" style={[style.defaultText, style.description]}>Front End Jr || HTML || CSS || 2D Game Designer</Text>
            <Pressable onPress={handlePressGoToGithub}>

            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
            </View>
            </Pressable>
        </View>
     </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expandir pra tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 180,
        width: 180,
        borderRadius: 90,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 16,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontSize: 15,
        fontWeight: 'bold',
    },
});