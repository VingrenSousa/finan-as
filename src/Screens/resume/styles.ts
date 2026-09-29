import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";


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


export const ChartConteiner=styled.View`
    
    margin-bottom:22px;
    width: 100%;
    height: 400px;
    margin-top:20px;
    
   
`
export const MonthSelect=styled.View`
    width: 100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    margin-top:24px;

   

    
`

export const MonthSelectButton=styled.TouchableOpacity`


    
`

export const SelectionIcon=styled(Feather)`
    font-size:${RFValue(24)}px;
    
`

export const Month=styled.Text`
    font-family:${({theme})=>theme.FONTS.REGULAR};
    font-size:${RFValue(20)}px;
    
`

    

