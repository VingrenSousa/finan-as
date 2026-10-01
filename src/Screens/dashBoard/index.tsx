
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard, { propsDateCard } from "../../components/TransactionCard";
import { Conteiner, Header,UserInfo,Photo,User,UserGreeting,UserName, UserConteiner, Icom, HighlightCards,Transactions,Title } from "./styles";
import { FlatList } from "react-native";
import { useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ThemeContext } from "../../hooks/themeContext";
import { useAuth } from "../../hooks/UseAuthContext";


export interface dataListProps extends propsDateCard{
    id:string,
    name:string
    
}
type  higtLightProps ={
    amount:string,
    lastTransaction:string
}
interface higtLightDateProps{
    entries:higtLightProps
    expensive:higtLightProps,
    total:higtLightProps
    

}
export default function Dashboard(){
     const { handleLogout } = useAuth();
    const[date,setDate]=useState<dataListProps[]>([])

    const[higtLightDate,setHigtLightDate]=useState<higtLightDateProps>()

    function getLastTransactionDate(transacton:dataListProps[],type:"positive"|"negative"){
        const timesColetion = transacton
        .filter((transaction)=> transaction.type ===type)
        .map((transaction)=> new Date(transaction.date).getTime());

        // a funcao Math.max.apply pega maio numero de uma arry ele recebe 2 parametro primeiro o Math , e colecao
        const lastTransaction= new Date(Math.max.apply(Math,timesColetion));
        // funcao que fromata a data pegando nome por estenco do mes 
        const formattedTransaction = `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString("pt-BR",{month:"long"})}`

        return formattedTransaction
    }
    
    async function getDateTransaction() {
        const dateTransactionKey="@financas:transaction";
        const response = await AsyncStorage.getItem(dateTransactionKey)
        const transacton = response?JSON.parse(response):[]

        let entriesTotal= 0
        let ExpensiveTotla = 0
        
        const transactonFormat:dataListProps[] =transacton.map((item:dataListProps)=>{

            if(item.type=== "positive"){
                    entriesTotal+=Number(item.amount)
            }else{
                ExpensiveTotla+=Number(item.amount)
            }
         
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

      
        
        const lastTransactionDateEntries=getLastTransactionDate(transacton,"positive");
        const lastTransactionDateExpensive=getLastTransactionDate(transacton,"negative");

        const totalInterval=`01 a ${lastTransactionDateExpensive}`

        const total = entriesTotal-ExpensiveTotla

        setHigtLightDate({
            entries:{
                amount:entriesTotal.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                }),
                lastTransaction:`Última entrada dia ${lastTransactionDateEntries}`
            },
            expensive:{
                amount:ExpensiveTotla.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                }),
                lastTransaction:`Última saída ${lastTransactionDateExpensive}`
            },
            total:{
                  amount:total.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL",
                    
                }),
                lastTransaction:totalInterval
            }
        })
        setDate(transactonFormat)
        
    }
    function handleOut() {
      handleLogout()
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
                    
                    <Icom onPress={handleOut} name="power"/>
                </UserConteiner>
            </Header>
            <HighlightCards >
                <HighlightCard
                    title="Entrada" 
                    amount={higtLightDate?higtLightDate.entries.amount:"R$000,00"}
                    lastTransactions={higtLightDate?higtLightDate.entries.lastTransaction:""}
                    Types="up"/>

                <HighlightCard 
                    Types="down"
                    title="saidas" 
                    amount={higtLightDate?higtLightDate.expensive.amount:"R$000,00"}
                    lastTransactions={higtLightDate?higtLightDate.expensive.lastTransaction:""}/>

                <HighlightCard
                    Types="total"
                    title="Total" 
                    amount={higtLightDate?higtLightDate.total.amount:"R$000,00"}
                    lastTransactions={higtLightDate?higtLightDate.total.lastTransaction:""}/>
                 

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