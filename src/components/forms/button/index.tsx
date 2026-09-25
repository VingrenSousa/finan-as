import { TouchableOpacityProps } from "react-native";
import { Conteiner, Title } from "./styles";
type props= TouchableOpacityProps &{
    title:string
}
export default function Button({title,...rest}:props){
    return(
        <Conteiner {...rest}>
            <Title>{title}</Title>
        </Conteiner>
    )
}