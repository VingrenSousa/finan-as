import AsyncStorage from "@react-native-async-storage/async-storage";
import HistoryCard from "../../components/HistoryCard";
import { Conteiner,Header,Title, ChartConteiner, MonthSelect, MonthSelectButton, SelectionIcon, Month} from "./styles";
import { useCallback, useEffect, useState } from "react";
import { categories } from "../../utils/categoty";
import { useFocusEffect } from "@react-navigation/native";
import { Pie, PolarChart } from "victory-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView } from "react-native";
import {addMonths,subMonths,format} from "date-fns"
import {ptBR} from "date-fns/locale"
import { TransactionService } from "../../service/firebase/transaction";
export type propsTransaction={
        type:"positive"|"negative"
        title:string;
        amount:string;
        category:string;
        date:string
}
type propsCategory={
    name:string,
    total:number,
    totalformatted:string,
    color:string,
    kay:string
}
export default function Resume(){
    const firestore = new TransactionService()
    const [TotalByCategories,setTotalByCategories]=useState<propsCategory[]>([])
    const [selectedDate,setSelectedDates]=useState(new Date())


    function handlechangeDate(action:"next"|"prev"){
        if(action==="next"){
            const newDate = addMonths(selectedDate,1)
            setSelectedDates(newDate)
        }else{
            const newDate = subMonths(selectedDate,1)
            setSelectedDates(newDate)
        }

    }
    async function loadDate() {
        



        const responseFormatted= await firestore.getAll()

    
        const expensives=responseFormatted.filter(expensive=>
            expensive.type=="negative" &&
            new Date(expensive.date).getMonth()===selectedDate.getMonth() &&
            new Date(expensive.date).getFullYear()===selectedDate.getFullYear()
        );

        const totalByCategory:propsCategory[]=[]
        categories.forEach((category,index)=>{
            let caregorySum=0

            expensives.forEach(expensive=>{
                if(expensive.category===category.key){
                    caregorySum+=Number(expensive.amount)
                }
            })

            if(caregorySum>0){

                const totalForm=caregorySum.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                })
                totalByCategory.push({
                    name:category.name,
                    total:caregorySum,
                    totalformatted:totalForm,
                    color:category.color,
                    kay:String(index)
                })
            }
           
        })
        setTotalByCategories(totalByCategory)
    }


    useFocusEffect(useCallback(()=>{
         loadDate()
    },[selectedDate]));
    return(
        <Conteiner>
            <Header>
                <Title>
                    Resumo por categoria
                </Title>
            </Header>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal:24,paddingBottom:useBottomTabBarHeight()}}
                
            >

                <MonthSelect>

                    <MonthSelectButton onPress={()=>handlechangeDate("prev")}>
                        <SelectionIcon name="chevron-left"/>
                    </MonthSelectButton>

                    <Month>{format(selectedDate, "MMMM,yyyy",{locale:ptBR})}</Month>

                    <MonthSelectButton onPress={()=>handlechangeDate("next")}>
                        <SelectionIcon name="chevron-right"/>
                    </MonthSelectButton>

                </MonthSelect>

                <ChartConteiner>
                    <PolarChart 
                        data={TotalByCategories}
                        
                        colorKey="color"
                        labelKey="kay"
                        valueKey="total">
                        <Pie.Chart />
                    </PolarChart>
                 </ChartConteiner>
                {
                    TotalByCategories&&
                        TotalByCategories.map((item,index)=><HistoryCard key={String(index)} title={item.name} amount={item.totalformatted} color={item.color}/>)
                }
                 
            </ScrollView>
            
        </Conteiner>
    )
}