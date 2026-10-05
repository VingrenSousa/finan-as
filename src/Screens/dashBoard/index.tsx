

import HighlightCard from "../../components/HighlightCard";
import TransactionCard, { propsDateCard } from "../../components/TransactionCard";
import { Conteiner, Header,UserInfo,Photo,User,UserGreeting,UserName, UserConteiner, Icom, HighlightCards,Transactions,Title } from "./styles";
import { FlatList } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";

import { useAuth } from "../../hooks/UseAuthContext";


import { TransactionService } from "../../service/firebase/transaction";
import { getAuth } from "@react-native-firebase/auth";




export interface dataListProps extends propsDateCard{
    id:string,
    name?:string
    
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
    const[UserNeme,setUserNeme]=useState("")
    const[UserImg,setUserImg]=useState("")
    const firebase = new TransactionService()

    const auth = getAuth();

    const[higtLightDate,setHigtLightDate]=useState<higtLightDateProps>()

    function getLastTransactionDate(transacton:dataListProps[],type:"positive"|"negative"){
        const timesColetion = transacton
        .filter((transaction)=> transaction.type ===type)
        .map((transaction)=> new Date(transaction.date).getTime());

        // a funcao Math.max.apply pega maio numero de uma arry ele recebe 2 parametro primeiro o Math , e colecao
        const lastTransaction= new Date(Math.max.apply(Math,timesColetion));
        // funcao que fromata a data pegando nome por estenco do mes 
        const formattedTransaction = `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString("pt-BR",{month:"long"})}`
        
        if(isNaN(lastTransaction.getTime())){
            return null
        }else{
            return formattedTransaction
        }
        
        
    }
    
    async function getDateTransaction() {
        
       const transacton:dataListProps[] = await firebase.getAll();
        
     
       
        
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

        const totalInterval=lastTransactionDateExpensive?`01 a ${lastTransactionDateExpensive}`:""

        const total = entriesTotal-ExpensiveTotla

        setHigtLightDate({
            entries:{
                amount:entriesTotal.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                }),
                lastTransaction:lastTransactionDateEntries?`Última entrada dia ${lastTransactionDateEntries}`:"ainda nao a entrada"
            },
            expensive:{
                amount:ExpensiveTotla.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                }),
                lastTransaction:lastTransactionDateExpensive?`Última saída ${lastTransactionDateExpensive}`:"ainda nao a entrada"
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
    function getUserDate(){
        const user = auth.currentUser;
        setUserNeme(user?.displayName ?? "");
        setUserImg(user?.photoURL ?? "");
        
        
    }

    useEffect(()=>{
        getDateTransaction();
        getUserDate()
    },[])

    useFocusEffect(useCallback(()=>{
        getDateTransaction();
    },[]));
   
    async function hendleDelete(id:string) {
        try {
            firebase.delete(id)
             getDateTransaction();
        
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
        <Conteiner>  
            <Header>
                <UserConteiner>
                    <UserInfo>
                        <Photo source={UserImg?{uri:UserImg}:require("../../assets/do-utilizador.png")}/>
                        <User>
                            <UserGreeting> Olá, </UserGreeting>
                            <UserName>{UserNeme}</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icom onPress={handleOut} name="power"/>
                </UserConteiner>
            </Header>
            <HighlightCards >
                <HighlightCard
                    title="Entrada" 
                    amount={higtLightDate?higtLightDate.entries.amount:"R$0,00"}
                    lastTransactions={higtLightDate?higtLightDate.entries.lastTransaction:""}
                    Types="up"/>

                <HighlightCard 
                    Types="down"
                    title="saidas" 
                    amount={higtLightDate?higtLightDate.expensive.amount:"R$0,00"}
                    lastTransactions={higtLightDate?higtLightDate.expensive.lastTransaction:""}/>

                <HighlightCard
                    Types="total"
                    title="Total" 
                    amount={higtLightDate?higtLightDate.total.amount:"R$0,00"}
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
                  renderItem={({item})=><TransactionCard dalete={()=>hendleDelete(item.id)} date={item}/>}
                  contentContainerStyle={{
                    paddingBottom:22
                  }}
                />

             
            </Transactions>
        </Conteiner> 
    )
}