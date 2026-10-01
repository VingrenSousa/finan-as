import { TextInputProps } from "react-native";
import { Conteiner,Label,Input } from "./styles";

interface Props extends TextInputProps{
    label:string;
    placeholder?:string;
    color?:string;
    messageError?:string;
}
export default function InputSiginIn({label,placeholder,color,messageError, ...rest}:Props){
    return(
        <Conteiner>
            <Label color={color}>
                {label}
            </Label>
          <Input placeholder={placeholder?placeholder:label} {...rest}/>
          {
            messageError&&
            <Label color="red">
                {messageError}
            </Label>
          }
          
        </Conteiner>
    )


}
