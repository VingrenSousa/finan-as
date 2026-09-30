import { AntDesign } from "@expo/vector-icons";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Conteiner=styled.TouchableOpacity`
    width:100%;
    height: 80px;
    background-color:${({theme})=>theme.COLORS.SHAPE};
    border-radius:8px;

    flex-direction:row;
`
export const Icon=styled(AntDesign)`
    font-size:${RFValue(28)}px;`

export const ConteinerIcone=styled.View`
    width:20%;
    height:100%;
    justify-content:center;
    align-items:center;

    border-right-width:0.2px;
    
    `

export const ConteinerTitle=styled.View`
    width:80%;
    height:100%;
    justify-content:center;
    align-items:center;`

export const Title=styled.Text`
    font-size:${RFValue(14)}px;
    font-family:${({theme})=>theme.FONTS.MEDIUM};
    color:${({theme})=>theme.COLORS.TEXT_DARK};
`