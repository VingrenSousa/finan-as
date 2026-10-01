import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
type props={ 
    backColor?:string,
    border?:boolean;
 }
export const Conteiner=styled.TouchableOpacity<props>`
 width:${RFValue(57)}px;
 height: ${RFValue(57)}px;
 background-color:${({theme,backColor})=>backColor||theme.COLORS.SHAPE};
 border-radius:100%;
 justify-content:center;
 align-items:center;    
 border-width:${({border})=>border?0.8:0}px;
 border-color:${({theme})=>theme.COLORS.TEXT};

 box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.1);
 
`

export const Icon=styled(AntDesign)`

font-size:${RFValue(28)}px;
color:${({theme})=>theme.COLORS.SECONDARY};`