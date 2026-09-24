
import HighlightCard from "../../components/HighlightCard";
import { Conteiner, Header,UserInfo,Photo,User,UserGreeting,UserName, UserConteiner, Icom, HighlightCards } from "./styles";




export default function Dashboard(){


    return(
        <Conteiner>  
            <Header>
                <UserConteiner>
                    <UserInfo>
                        <Photo source={{uri:"https://github.com/VingrenSousa.png"}}/>
                        <User>
                            <UserGreeting> Olá, </UserGreeting>
                            <UserName>Vingren</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icom name="power"/>
                </UserConteiner>
            </Header>
            <HighlightCards >
                <HighlightCard
                    title="Entrada" amount="R$17.400,00" lastTransactions="última entrada dia 13 de abril"
                    Types="up"/>

                <HighlightCard 
                    Types="down"
                    title="saidas" amount="R$1.250,00" lastTransactions="última Saida dia 03 de abril"/>

                <HighlightCard
                    Types="total"
                    title="Total" amount="R$16.141,00" lastTransactions="01 á 16 de abril"/>
                 

            </HighlightCards>
        </Conteiner> 
    )
}