import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Conteiner=styled.View`
flex:1;
background-color:${({theme})=>theme.COLORS.BACKGROUND};
`

export const Headar=styled.View`
    width:100%;
    height:20%;
    background-color:${({theme})=>theme.COLORS.PRIMARY};
    justify-content:center;
    align-items:center;
    padding:30px 24px 0;
   

`
export const Title=styled.Text`
  font-size:${RFValue(20)}px;
  
  color: ${({theme})=>theme.COLORS.SHAPE};
  font-family:${({theme})=>theme.FONTS.MEDIUM};
`;
export const Main=styled.View`
    height:60%;
    width:100%;
    padding:0 24px;
    margin-top: ${RFPercentage(5)}px;
`

export const ConteinerInpus=styled.View`
    flex:1;
    justify-content:start;
    margin-bottom: ${RFPercentage(5)}px;
    gap: ${RFPercentage(2)}px;

    `

export const Foouter=styled.View`
    height:20%;
    width:100%;
    padding:10px 24px;

`