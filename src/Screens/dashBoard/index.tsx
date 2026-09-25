
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard, { propsDateCard } from "../../components/TransactionCard";
import { Conteiner, Header,UserInfo,Photo,User,UserGreeting,UserName, UserConteiner, Icom, HighlightCards,Transactions,Title } from "./styles";
import { FlatList } from "react-native";


export interface dataListProps extends propsDateCard{
    id:string
}

export default function Dashboard(){

    const date:dataListProps[]=[
        {
            id:"1",
            type:"positive",
            title:"Desenvolvimento de site",
            amount:"R$12.000,00",
            date:"13/04/2026",
            category:{
                name:"Vendas",
                icon:"dollar-sign"
        }},
        {
             id:"2",
            type:"negative",
            title:"Haburgueria pizzy",
            amount:"R$59,00",
            date:"13/04/2026",
            category:{
                name:"Alimentacao",
                icon:"coffee"
        }},
        {
             id:"3",
            type:"negative",
            title:"aluguel do apartamento",
            amount:"R$1.200,00",
            date:"13/04/2026",
            category:{
                name:"casa",
                icon:"shopping-bag"
        }},
    ]
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

            <Transactions>
                <Title>
                    Listagem
                </Title>
                <FlatList<dataListProps>
                
                  data={date}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item=>item.id}
                  renderItem={({item})=><TransactionCard date={item}/>}
                  contentContainerStyle={{
                    paddingBottom:22
                  }}
                />

             
            </Transactions>
        </Conteiner> 
    )
}