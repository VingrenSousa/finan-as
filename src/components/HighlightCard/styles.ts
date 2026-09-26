import Feather  from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";


 interface propsCard{
    Types:"up"|"down"|"total"
}
export const Conteiner = styled.View<propsCard>`
    background-color:${({theme,Types})=>Types==="total"?theme.COLORS.SECONDARY:theme.COLORS.SHAPE};

    width:${RFValue(280)}px;

    border-radius:7px;
    padding: 19px 23px;
    padding-bottom:${RFValue(42)}px;

    margin-right:16px

    
`




export const Header= styled.View`
    flex-direction:row;
    justify-content: space-between;
`
export const Title= styled.Text<propsCard>`
    font-family:${({theme})=>theme.FONTS.REGULAR};
    font-size:${RFValue(14)}px;
    color:${({theme,Types})=>Types==="total"?theme.COLORS.SHAPE:theme.COLORS.TEXT_DARK};
    padding: 2px;
    
`

export const Icom= styled(Feather)<propsCard>`
 font-size:${RFValue(40)}px;

 ${(props)=>props.Types==="up" && css`
    color:${({theme})=>theme.COLORS.SUCCESS};
    `};

${(props)=>props.Types==="down" && css`
color:${({theme})=>theme.COLORS.ATTENTION};
`};

${(props)=>props.Types==="total" && css`

color:${({theme})=>theme.COLORS.SHAPE};`}

`

export const Footer= styled.View``

export const Amount= styled.Text<propsCard>`

    font-family:${({theme})=>theme.FONTS.MEDIUM};
    font-size:${RFValue(32)}px;

    color:${({theme,Types})=>Types==="total"?theme.COLORS.SHAPE:theme.COLORS.TEXT_DARK};

    margin-top:38px
`
export const LastTransaction= styled.Text<propsCard>`
    font-size:${RFValue(12)}px;
    font-family:${({theme})=>theme.FONTS.REGULAR};
    color:${({theme,Types})=>Types==="total"?theme.COLORS.SHAPE:theme.COLORS.TEXT};
`