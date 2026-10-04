import { Feather } from "@expo/vector-icons";
import { Conteiner,Title,Amount,Foouter,Category,Icon,CategoryName,Date } from "./styles";
import { categories } from "../../utils/categoty";
import CardModal from "../cardModal";
import { useState } from "react";

type propscategory={
    name:string;
    icon:React.ComponentProps<typeof Feather>["name"]
}
export type propsDateCard={
        type:"positive"|"negative"
        title?:string;
        amount:string;
        category:string;
        date:string
        id:string
}
interface porpstransactionsCard{
    date:propsDateCard
    dalete():Promise<void>
}

export default function TransactionCard({date,dalete}:porpstransactionsCard){
    const [modal,setModal]=useState(false)

    const myCategory = categories.filter(item=>item.key===date.category)[0]
    return(
        <Conteiner onPress={()=>setModal(true)} >
            <Title> {date.title}</Title>
            <Amount type={date.type}>
                {  date.type === "negative" && "- " }
                { date.amount }
            </Amount>
            <Foouter>
                <Category>
                    <Icon name={myCategory.icon}/>
                    <CategoryName>
                       {myCategory.name}
                    </CategoryName>
                </Category>
                <Date>
                    {date.date}
                </Date>
            </Foouter>
            <CardModal  onDelete={dalete} date={date} modal={modal} setModal={setModal}/>
        </Conteiner>
    )
}