import { Conteiner,Title,Amount } from "./styles";

interface propshistoryCard{
    title:string;
    amount:string;
    color:string;
}
export default function HistoryCard({amount,color,title}:propshistoryCard){
    return(
        <Conteiner color={color}>
            <Title>
                {title}
            </Title>
            <Amount>
                {amount}
            </Amount>
        </Conteiner>
    )
}