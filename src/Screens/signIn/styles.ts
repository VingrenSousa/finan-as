import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";


import styled from "styled-components/native";

export const Conteiner = styled.View`

flex:1;
`


export const Header = styled.View`
width:100%;
height:50%;
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
    margin-bottom:120px;
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
height: 50%;
background-color:${({theme})=>theme.COLORS.SECONDARY};


   
   
    
`

export const ConteinerFooter=styled.View`
    gap:0px;
    padding: 0 16px;
    width: 100%;
    height: 50%;
    margin-top: ${RFValue(-70)}px;

`

export const ConteinerSubmit=styled.View`
    width: 100%;
    height: 50%;
    padding: 0 16px;
    margin-top: ${RFValue(7)}px;

`


 export const   ConteinerSeparator=styled.View`

   
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-top: ${RFValue(20)}px;
    gap: ${RFValue(10)}px;`
    

 export const   Separator=styled.View`
    width: 30%;
    height: 1px;
    gap:3px;
    background-color:${({theme})=>theme.COLORS.SHAPE};`
    

 export const   TextSeparator=styled.Text`
    font-family:${({theme})=>theme.FONTS.REGULAR};  
    color:${({theme})=>theme.COLORS.SHAPE};
    font-size:${RFValue(14)}px;
   
    `

export const ConteinerSignInContas=styled.View`

width: 100%;
height: 50%;
gap: 16px;
justify-content:center;
align-items:center;
flex-direction:row;
`

export const TextCreate=styled.Text`
    font-family:${({theme})=>theme.FONTS.REGULAR};
    color:${({theme})=>theme.COLORS.SHAPE};
    font-size:${RFValue(14)}px;
    text-align: center;
`

export const Br=styled.Text`
    font-size:${RFValue(14)}px;
    font-family:${({theme})=>theme.FONTS.BOLD};
    color:${({theme})=>theme.COLORS.SHAPE};

`
export const ConteinerCreate=styled.View`
    width:100%;
    flex-direction:row;
    justify-content:center;
    align-items:center;
   `

export const Buttom=styled.TouchableOpacity`
  `