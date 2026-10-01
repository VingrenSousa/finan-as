import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
type props={
    color?:string,
}
export const Conteiner = styled.View`
    flex:1;
   
`

export const Label = styled.Text<props>`

    
    padding: 0 16px;
    font-family:${({theme})=>theme.FONTS.REGULAR};
    color:${({theme,color})=>color || theme.COLORS.SHAPE};
    font-size:${RFValue(14)}px;
    text-align:left;
`

export const Input = styled.TextInput`
    width:100%;
    height:${RFValue(56)}px;
    background-color:${({theme})=>theme.COLORS.SHAPE};
    border-radius:7px;
    padding:16px;
    border-width:0.5px;
    border-color:${({theme})=>theme.COLORS.TEXT};
    font-family:${({theme})=>theme.FONTS.REGULAR};
    color:${({theme})=>theme.COLORS.TEXT_DARK};
    font-size:${RFValue(14)}px;

    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.1);
    
    


`