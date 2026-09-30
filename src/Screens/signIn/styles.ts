import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";


import styled from "styled-components/native";

export const Conteiner = styled.View`

flex:1;
`


export const Header = styled.View`
width:100%;
height:70%;
background-color:${({theme})=>theme.COLORS.PRIMARY};

justify-content:flex-end;
align-items:center;
`



export const TitleWrapper = styled.View`
align-items:center;


`

export const Title = styled.Text`
    font-family:${({theme})=>theme.FONTS.MEDIUM};
    color:${({theme})=>theme.COLORS.SHAPE};
    font-size:${RFValue(30)}px;

    text-align: center;
    margin-top:45px;
`

export const LogoIcon = styled(Entypo)`
    font-size: ${RFValue(68)}px;
    color:${({theme})=>theme.COLORS.SECONDARY};

`


export const SignInTitle = styled.Text`
    font-family:${({theme})=>theme.FONTS.REGULAR};
    color:${({theme})=>theme.COLORS.SHAPE};
    font-size:${RFValue(16)}px;

    text-align: center;

    margin-top:80px;
    margin-bottom:67px;

   
    
`

export const Footer = styled.View`
width: 100%;
height: 30%;
background-color:${({theme})=>theme.COLORS.SECONDARY};
position:relative;
   
   
    
`

export const ConteinerFooter=styled.View`
    gap:20px;
    padding:0 30px;

    position: absolute;
    top: -40px;

`