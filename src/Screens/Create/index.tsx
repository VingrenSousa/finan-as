
import { useEffect, useState } from "react";
import Button from "../../components/forms/button";
import InputSiginIn from "../../components/forms/InputSignIn";
import { themeWhite } from "../../styles/theme";
import { Conteiner,ConteinerInpus,Headar,Main,Title,Foouter} from "./styles";
import { Alert } from "react-native";
import { navigationProps } from "../../routes/app.steck.routes";
import { useNavigation } from "@react-navigation/native";
import ButtonSignIn from "../../components/forms/buttonSign";
import ButtonSignInConta from "../../components/forms/buttonSignConta";


export default function Create() {

    const [neme, setNeme] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repitaSenha, setRepitaSenha] = useState('');


    const [messagemNeme, setMessagemNeme] = useState('');
    const [messagemEmail, setMessagemEmail] = useState('');
    const [messagemSenha, setMessagemSenha] = useState('');
    const [messagemRepitaSenha, setMessagemRepitaSenha] = useState('');

    const navigate= useNavigation<navigationProps>()


    function handleMenssage() {
        
        if(neme.length<3 && neme.length>0){
            setMessagemNeme('minimo 3 caracteres')
        } else if(neme.length>20){
            setMessagemNeme('Nome deve ter no maximo 20 caracteres')
        }else if(isNaN(Number(neme))===false && neme.length>0){
            setMessagemNeme('nao pode conter numeros')
        }else{
            setMessagemNeme('')
        }

        if(!email.includes('@') && email.length>0){
            setMessagemEmail('Email invalido')
        }else{
            setMessagemEmail('')
        }

        if(senha.length<6 && senha.length>0){
            setMessagemSenha('minimo 8 caracteres')
        }else{
            setMessagemSenha('')
        }

        if(repitaSenha!==senha && repitaSenha.length>0){
            setMessagemRepitaSenha('Senhas não conferem')
        }else{
            setMessagemRepitaSenha('')
        }
    }

    function handleVerificaoCreate() {
        if(messagemNeme==='' && messagemEmail==='' && messagemSenha==='' && messagemRepitaSenha===''){
            if(neme.length>0 && email.length>0 && senha.length>0 && repitaSenha.length>0){
                handleCreate()
            }else{
                Alert.alert('Preencha todos os campos')
            }
        }
    }
    function handleCreate() {
        navigate.goBack()
    }
    useEffect(()=>{
       handleMenssage()
    },[email,senha,repitaSenha,neme])
  return (
    <Conteiner>
      <Headar>
        <ButtonSignInConta 
        backColor={themeWhite.COLORS.PRIMARY}
        border={false}
        type="GoBack" 
        onPress={()=>navigate.goBack()}/>
        <Title>Crie sua conta</Title>
      </Headar>
      <Main>
        <ConteinerInpus>
            <InputSiginIn 
                onChangeText={setNeme}
                messageError={messagemNeme}
                value={neme}
                color={messagemNeme?themeWhite.COLORS.ATTENTION:themeWhite.COLORS.TITLE}  
                placeholder="ex: João da Silva" 
                label="Nome"/>
            <InputSiginIn 
                onChangeText={setEmail}
                value={email}
                color={messagemEmail?themeWhite.COLORS.ATTENTION:themeWhite.COLORS.TITLE} 
                messageError={messagemEmail} 
                placeholder="ex: joao@email.com" 
                label="Email"/>
            <InputSiginIn 
                onChangeText={setSenha}
                value={senha}
                color={messagemSenha?themeWhite.COLORS.ATTENTION:themeWhite.COLORS.TITLE} 
                messageError={messagemSenha} 
                placeholder="ex: ********"
                label="Senha"/>
            <InputSiginIn 
                onChangeText={setRepitaSenha}
                value={repitaSenha}
                color={messagemRepitaSenha?themeWhite.COLORS.ATTENTION:themeWhite.COLORS.TITLE} 
                messageError={messagemRepitaSenha} 
                placeholder="ex: ********" 
                label="Repita a Senha"/>
        </ConteinerInpus>
      </Main>
      <Foouter>
        <Button onPress={handleVerificaoCreate} title="Criar" color="#FF872C"/>
      </Foouter>
    </Conteiner>
  );
}