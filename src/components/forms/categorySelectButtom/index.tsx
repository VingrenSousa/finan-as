import { TouchableOpacityProps } from "react-native";
import { Conteiner,Category, Icon } from "./styles";



interface porps extends TouchableOpacityProps{
    title:string
}

export default function Categoryselect({title,...rest}:porps){
    return(
        <Conteiner {...rest}>
            <Category>
                {title}
            </Category>
            <Icon name="chevron-down"/>
        </Conteiner>
    )
}