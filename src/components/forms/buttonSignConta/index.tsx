import { TouchableOpacityProps } from "react-native";
import { Conteiner, Icon } from "./styles";
import { useTheme } from "styled-components";
interface Props extends TouchableOpacityProps{
   type:"google" | "apple" | "facebook" | "GoBack";
   backColor?:string;
   color?:string;
   border?:boolean;
}
export default function ButtonSignInConta({type,backColor,color,border,...rest}:Props) {
    return(
        <Conteiner {...rest} backColor={backColor} border={border}>
          {type==="google" && <Icon color={color||useTheme().COLORS.SECONDARY} name="google"/>}
          {type==="apple" && <Icon color={color||useTheme().COLORS.SECONDARY}  name="apple"/>}
          {type==="facebook" && <Icon color={color||useTheme().COLORS.SECONDARY}  name="facebook"/>}
          {type==="GoBack" && <Icon color={color||useTheme().COLORS.SECONDARY}  name="arrow-left"/>}
        </Conteiner>
    )
}