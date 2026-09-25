import { TextInputProps } from "react-native";
import { Conteiner } from "./styles";


type porps = TextInputProps
export default function ContentInput({...rest}:TextInputProps){
    return(
        <Conteiner {...rest}>

        </Conteiner>
    )
}