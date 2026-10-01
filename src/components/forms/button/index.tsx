import { TouchableOpacityProps } from "react-native";
import { Conteiner, Title } from "./styles";
type props= TouchableOpacityProps &{
    title:string,
    color?:string,
}
export default function Button({title,color,...rest}:props){
    return(
        <Conteiner {...rest} color={color}>
            <Title>{title}</Title>
        </Conteiner>
    )
}