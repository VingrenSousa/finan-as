import { Platform, } from "react-native";
import ButtonSignIn from "../../components/forms/buttonSign";
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
import { useCallback, useEffect } from "react";

type navigationProps= StackNavigationProp<AuthStackParamList>
export default function SiginIn(){
    const date = useAuth()
    const navigate= useNavigation<navigationProps>()
   

  function handleCreate() {
    navigate.navigate("Create")
  }
 
   function handleLogin() {
    date.handleLogin()
  }
  useEffect(()=>{
   handleCreate()
   },[])
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
                    <InputSiginIn label="Email" />
                    <InputSiginIn label="Senha" />
                </ConteinerFooter>

                <ConteinerSubmit>
                     <Button onPress={handleLogin} color={themeWhite.COLORS.PRIMARY} title="Entra"/>

                        
                    <ConteinerSeparator>
                        <Separator/>
                        <TextSeparator>Ou</TextSeparator>
                        <Separator/>
                    </ConteinerSeparator>

                    <ConteinerSignInContas>
                        <ButtonSignInConta type="google" />
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