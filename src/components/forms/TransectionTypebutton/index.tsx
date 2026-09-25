import { Conteiner,Title,Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";
type propsTransactionType = TouchableOpacityProps &{
    title:string,
    type:"up"|"down",
    isActive:boolean
}
export default function TransactionTypeButtons({isActive,title,type,...rest}:propsTransactionType){
    return(
        <Conteiner 
            isActive={isActive}
            type={type}
            {...rest}>
            <Icon name={type==="up"?"arrow-up-circle":"arrow-down-circle"} type={type} />
            <Title>
                {title}
            </Title>
        </Conteiner>
    )
}

 