
import { StyleSheet } from "react-native";
import { propsDateCard } from "../TransactionCard";
import { Amount, Conteiner, Content, Date, Footer, Header, IconDelete, IconGoback, Main, Title } from "./styles";
import { TransactionService } from "../../service/firebase/transaction";
import { useNavigation } from "@react-navigation/native";
type propsCardModal={
    modal:boolean,
    setModal(value:boolean):void;
    date:propsDateCard,
    onDelete():Promise<void>
}
export default function CardModal({onDelete,date,setModal,modal}:propsCardModal){

    function hendleCloseModal(){
        setModal(false)
    }
    async function hendleDelete(){
        
        await onDelete()
        hendleCloseModal()
       
        

    }
    return(
        <Conteiner
            animationType="slide"
            transparent
            visible={modal}>
                <Main onPress={hendleCloseModal}>
                    <Content
                    style={shadow.content} 
                    onStartShouldSetResponder={() => true}>
                       <Header>
                            <IconGoback onPress={hendleCloseModal} name="arrow-left"/>
                            <IconDelete onPress={hendleDelete} name="delete"/>
                       </Header>
                       <Footer>
                            <Title> {date.title}</Title>
                            <Amount type={date.type}>{date.type=="negative"&&" - "}{ date.amount}</Amount>
                            <Date>{date.date}</Date>
                       </Footer>

                    </Content>
                </Main>
        </Conteiner>
    )
}

export const shadow = StyleSheet.create({
  content: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
});