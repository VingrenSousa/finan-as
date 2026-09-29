import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
type props ={
    color?:string
}
export const Conteiner = styled.View<props>`
    width:100%;
    background-color:${({theme})=>theme.COLORS.SHAPE};
    flex-direction:row;
    justify-content:space-between;

    padding: 13px 24px;
    border-radius:5px;
    border-left-width:5px;
    border-left-color:${({color})=>color};

    margin-bottom:8px;


`

export const Amount = styled.Text<props>`
    font-family:${({theme})=>theme.FONTS.BOLD};
    font-size:${RFValue(15)}px;
`

export const Title = styled.Text<props>`
    font-family:${({theme})=>theme.FONTS.REGULAR};
    font-size:${RFValue(15)}px;
`