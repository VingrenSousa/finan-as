import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
type props={
    color?:string,
}
export const Conteiner=styled.TouchableOpacity<props>`
    width:100%;
    background-color:${({theme, color})=>color || theme.COLORS.SECONDARY};
    border-radius:5px;
    padding:18px;
    align-items:center
`

export const Title=styled.Text`
    font-family:${({theme})=>theme.FONTS.MEDIUM};
    font-size:${RFValue(14)}px;

    color:${({theme})=>theme.COLORS.SHAPE};

   

`