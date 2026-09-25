import { Feather } from "@expo/vector-icons";
import { Conteiner,Title,Amount,Foouter,Category,Icon,CategoryName,Date } from "./styles";

type propscategory={
    name:string;
    icon:React.ComponentProps<typeof Feather>["name"]
}
export type propsDateCard={
        type:"positive"|"negative"
        title:string;
        amount:string;
        category:propscategory;
        date:String
}
interface porpstransactionsCard{
    date:propsDateCard
 
}

export default function TransactionCard({date}:porpstransactionsCard){
    return(
        <Conteiner>
            <Title> {date.title}</Title>
            <Amount type={date.type}>
                {  date.type === "negative" && "- " }
                { date.amount }
            </Amount>
            <Foouter>
                <Category>
                    <Icon name={date.category.icon}/>
                    <CategoryName>
                       {date.category.name}
                    </CategoryName>
                </Category>
                <Date>
                    {date.date}
                </Date>
            </Foouter>
        </Conteiner>
    )
}