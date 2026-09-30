import { TouchableOpacityProps } from "react-native";
import { Conteiner,Icon,Title,ConteinerIcone,ConteinerTitle } from "./styles";


interface propsButtonSignIn extends TouchableOpacityProps{
    type:"ios"|"android"
}


export default function ButtonSignIn({type,...rest}:propsButtonSignIn){
    return(
        <Conteiner 
        activeOpacity={0.8}
        {...rest}>
            <ConteinerIcone>
                <Icon name={type==="ios"?"apple":"google"}/>
            </ConteinerIcone>
           <ConteinerTitle>
                <Title> Entra com {type==="ios"?"Apple":"Google"}</Title>
           </ConteinerTitle>
          
        </Conteiner>
    )
}