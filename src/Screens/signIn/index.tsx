import { Platform, } from "react-native";
import ButtonSignIn from "../../components/forms/buttonSign";
import { 
    Conteiner,
    Header,
    Title,
    LogoIcon,
    TitleWrapper,
    SignInTitle,
    Footer,
    ConteinerFooter,

 } from "./styles";
import { useContext } from "react";
import { useAuth } from "../../hooks/UseAuthContext";


export default function SiginIn(){
    const date = useAuth()
   

    async function handleGoogle(){ 
        try {
            await date.signInWithGoogle()
        } catch (error) {
            
        }
        date.signInWithGoogle

    };
     function handleApple(){
        
    };
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
               
                <SignInTitle>
                    Faça seu login com {"\n"}
                    uma das contas a baixo
                </SignInTitle>
            </Header>
            <Footer>
                <ConteinerFooter >
                    <ButtonSignIn onPress={handleGoogle} type={"android"}/>
                    { 
                        Platform.OS==="android" && 
                            <ButtonSignIn onPress={handleApple} type={"ios"}/>
                    }
                </ConteinerFooter>
            </Footer>
        </Conteiner>
    )
}