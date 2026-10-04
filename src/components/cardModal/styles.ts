import { AntDesign } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
 type props={
    type:"negative"|"positive"
 }

export const Conteiner = styled.Modal`
flex:1;`

export const Main = styled.Pressable`
padding: 50px;
flex:1;
justify-content: center;
align-items:center;
`

export const Content = styled.View`
    width:100%;
    height:${RFPercentage(30)}px;
    background-color:${({theme})=>theme.COLORS.SHAPE};
    border-radius:10px;
   
    `

    export const Header=styled.View`
        width:100%;
        flex-direction:row;
        justify-content:space-between;
        padding:22px;

    `
    export const IconGoback=styled(AntDesign)`
        font-size:${RFValue(22)}px;
        color:${({theme})=>theme.COLORS.TEXT_DARK};
    `
    export const IconDelete=styled(AntDesign)`
        font-size:${RFValue(22)}px;
        color:${({theme})=>theme.COLORS.ATTENTION};
    `
    export const Footer =styled.View`
        width:100%;
        padding:20px;
        justify-content:center;
        align-items:center;
        gap:${RFValue(18)}px;
        
        `

    export const Title =styled.Text`
        font-size:${RFValue(18)}px;
        font-family:${({theme})=>theme.FONTS.MEDIUM};
    `

    export const Amount =styled.Text<props>`
        font-size:${RFValue(20)}px;
        font-family:${({theme})=>theme.FONTS.BOLD};
        color:${({theme,type})=>type==="positive"?theme.COLORS.SUCCESS:theme.COLORS.ATTENTION};
    `

    export const Date =styled.Text`
    
        font-size:${RFValue(14)}px;
        font-family:${({theme})=>theme.FONTS.REGULAR};`