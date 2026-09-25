import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";
type props ={
    type:"up"|"down"
}
 type propsActive= props &{
    isActive:boolean
 }
export const Conteiner=styled(TouchableOpacity)<propsActive>`
width:48%;

flex-direction:row;
align-items:center;
justify-content:center ;

border-width:${({isActive})=>isActive?0:1.5}px;
border-style: solid;
border-color:${({theme})=>theme.COLORS.TEXT};

border-radius:5px;
padding: 16px ;


${({isActive,type})=>isActive && type ==="down" && css`
    background-color:${({theme})=>theme.COLORS.ATTENTION_LIGTH}
`}

${({isActive,type})=>isActive && type ==="up" && css`
    background-color:${({theme})=>theme.COLORS.SUCCESS_LIGTH}
`}


`

export const Title=styled.Text`
font-family:${({theme})=>theme.FONTS.REGULAR};
font-size:${RFValue(14)}px;`

export const Icon=styled(Feather)<props>`
    font-size:${RFValue(24)}px;
    margin-right:12px;

    color:${({theme,type})=>type==="up"?theme.COLORS.SUCCESS:theme.COLORS.ATTENTION}
    
`

