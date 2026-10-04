
import { 
    Conteiner,
    Header,
    Title,
    LogoIcon,
    TitleWrapper,
    Footer,
    ConteinerFooter,
    ConteinerSubmit,
    ConteinerSeparator,
    Separator,
    TextSeparator,
    ConteinerSignInContas,
    TextCreate,
    Br,
    Buttom,
    ConteinerCreate,

 } from "./styles";

import { useAuth } from "../../hooks/UseAuthContext";
import InputSiginIn from "../../components/forms/InputSignIn";
import Button from "../../components/forms/button";
import { themeWhite } from "../../styles/theme";
import ButtonSignInConta from "../../components/forms/buttonSignConta";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../routes/app.steck.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword
} from "@react-native-firebase/auth";
import { Alert } from "react-native";

type navigationProps= StackNavigationProp<AuthStackParamList>
export default function SiginIn(){
    const auth = getAuth()
    const date = useAuth()
    const navigate= useNavigation<navigationProps>()

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   

  function handleCreate() {
    navigate.navigate("Create")
  }
 
   async function handleLoginAndEmail() {
    if(email && password ){
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        console.log(result.user);
        

    } catch (error) {
        console.log(error);
    }
    }else{
        Alert.alert("email e senha é obrigatorio ")
    }
       
  }
  function handleLoginGooogle(){
    date.handleLoginGoogle()
  }
  
    return(
        
        <Conteiner>
            <Header>
                <TitleWrapper>
                    <LogoIcon name="wallet"/>

                    <Title>
                        Controle suas {"\n"} 
                        finanças de forma {"\n"}
                        muito simples
                    </Title>

                </TitleWrapper>
               
               
            </Header>
            <Footer>

                <ConteinerFooter >
                    <InputSiginIn onChangeText={setEmail} value={email} label="Email" />
                    <InputSiginIn onChangeText={setPassword} value={password} label="Senha" />
                </ConteinerFooter>

                <ConteinerSubmit>
                     <Button onPress={handleLoginAndEmail} color={themeWhite.COLORS.PRIMARY} title="Entra"/>

                        
                    <ConteinerSeparator>
                        <Separator/>
                        <TextSeparator>Ou</TextSeparator>
                        <Separator/>
                    </ConteinerSeparator>

                    <ConteinerSignInContas>
                        <ButtonSignInConta onPress={handleLoginGooogle} type="google" />
                        <ButtonSignInConta  type="apple"/>
                    </ConteinerSignInContas>

                    <ConteinerCreate>
                        <>
                            <TextCreate>Não tem uma conta?</TextCreate>
                            <Buttom onPress={handleCreate}  >
                                <Br> Crie uma agora </Br>
                            </Buttom>
                        </>
                    </ConteinerCreate>
                </ConteinerSubmit>

             
            </Footer>
        </Conteiner>
               

    )
}