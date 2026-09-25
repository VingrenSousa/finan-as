import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Conteiner = styled.View`
background-color:${({theme})=>theme.COLORS.BACKGROUND};
flex:1;
`

export const Header = styled.View`
background-color:${({theme})=>theme.COLORS.PRIMARY};
width:100%;
height: ${RFValue(113)}px;
align-items:center;
justify-content:flex-end;
padding-bottom:19px;
`

export const Title = styled.Text`
font-size: ${RFValue(18)}px;;
font-family:${({theme})=>theme.FONTS.REGULAR};
color:${({theme})=>theme.COLORS.SHAPE};`

export const Form=styled.View`
    flex:1;
    width:100%;
    padding: 24px;
    justify-content: space-between;
`
export const Fields=styled.View``

export const TransactionTypes=styled.View`
justify-content:space-between;
flex-direction:row;

margin-top:8px;
margin-bottom:16px;
`

export const Avisos =styled.View`
    width:100%;
    justify-content: center;
    align-items:center;
`;
export const AvisoName =styled.Text`
    font-size:${RFValue(14)};
    color:${({theme})=>theme.COLORS.ATTENTION}; 
    font-family:${({theme})=>theme.FONTS.MEDIUM};;
`;