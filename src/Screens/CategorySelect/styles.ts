import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
type porps ={
    isActive:boolean
}
export const Conteiner =styled.View`
    flex:1;
    background-color:${({theme})=>theme.COLORS.BACKGROUND};
`

export const Header =styled.View`
width: 100%;
height: ${RFValue(113)}px;

background-color:${({theme})=>theme.COLORS.PRIMARY};

align-items:center;
justify-content: flex-end;

padding-bottom:19px;
`

export const Title =styled.Text`

    font-family:${({theme})=>theme.FONTS.REGULAR};
    color:${({theme})=>theme.COLORS.SHAPE};
    font-size: ${RFValue(18)}px;
`

export const Category=styled.TouchableOpacity<porps>`
    width:100%;
    padding: ${RFValue(15)}px;

    flex-direction:row;
    align-items: center;

    background-color:${({theme,isActive})=>isActive?theme.COLORS.SECONDARY_LIGTH:theme.COLORS.BACKGROUND}
`

export const Icon=styled(Feather)`
font-size: ${RFValue(20)}px;
margin-right:16px;
`

export const Name=styled.Text`
    font-family:${({theme})=>theme.FONTS.REGULAR};
     font-size: ${RFValue(14)}px;
`

export const Separator=styled.View`
    width:100%;
    height:1px ;
    background-color:${({theme})=>theme.COLORS.TEXT};
`

export const Footer=styled.View`
    width:100%;
    padding:24px;
`
