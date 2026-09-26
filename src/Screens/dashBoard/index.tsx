
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard, { propsDateCard } from "../../components/TransactionCard";
import { Conteiner, Header,UserInfo,Photo,User,UserGreeting,UserName, UserConteiner, Icom, HighlightCards,Transactions,Title } from "./styles";
import { FlatList } from "react-native";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";


export interface dataListProps extends propsDateCard{
    id:string,
    name:string
    
}

export default function Dashboard(){
    const[date,setDate]=useState<dataListProps[]>([])
    
    async function getDateTransaction() {
        const dateTransactionKey="@financas:transaction";
        const response = await AsyncStorage.getItem(dateTransactionKey)
        const transacton = response?JSON.parse(response):[]
        
        const transactonFormat:dataListProps[] =transacton.map((item:dataListProps)=>{
            const amount = Number(item.amount).toLocaleString("pt-BR",{style:'currency',currency:"BRL"});

      
            const dateFormatted = Intl.DateTimeFormat('pt-BR',{
                day:"2-digit",
                month:"2-digit",
                year:"2-digit",
            }).format(new Date(item.date))

            return{
                id:item.id,
                title:item.name,
                amount,
                type:item.type,
                category:item.category,
                date:dateFormatted
                
           
         }
        })
        setDate(transactonFormat)
        
    }

    useEffect(()=>{
        getDateTransaction();
    },[])

    useFocusEffect(useCallback(()=>{
        getDateTransaction();
    },[]));
   
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