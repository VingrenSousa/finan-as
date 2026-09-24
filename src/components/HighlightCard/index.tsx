import { Feather } from "@expo/vector-icons";
import { 
    Conteiner,
    Header,
    Title,
    Icom,
    Footer,
    Amount,
    LastTransaction,

 } from "./styles";

 interface propsCard{
    title:string;
    amount:string;
    lastTransactions:string;
    Types:"up"|"down"|"total"
}

export default function HighlightCard({amount,lastTransactions,title,Types}:propsCard){


    const icon: Record<propsCard["Types"], React.ComponentProps<typeof Feather>["name"]>={
        up:"arrow-up-circle",
        down:"arrow-down-circle",
        total:"dollar-sign"
    }
    return(
        <Conteiner Types={Types}>
            <Header>
                <Title Types={Types}> {title}</Title>
                <Icom Types={Types} name={icon[Types]}/>
            </Header>
            <Footer>
                <Amount Types={Types}>
                    {amount}
                </Amount>
                <LastTransaction Types={Types}> {lastTransactions}</LastTransaction>
            </Footer>

        </Conteiner>
    )
}