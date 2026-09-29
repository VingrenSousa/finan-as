
import { useEffect, useState } from "react";
import Button from "../../components/forms/button";
import ContentInput from "../../components/forms/input";
import TransactionTypeButtons from "../../components/forms/TransectionTypebutton";
import { Conteiner, Header, Title,Form ,Fields,TransactionTypes,Avisos,AvisoName} from "./styles";
import CategoryselectButton from "../../components/forms/categorySelectButtom";
import  uuid  from 'react-native-uuid' ;
import CategorySelect from "../CategorySelect";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export default function Register(){
    const [transectionType,setTransectionType]=useState("")
    const [categoryModal,setCategoryModal]=useState(false)

    const [Aviso,setAviso]=useState("")


    const [name,setName]=useState("")
    const [amount,setAmount]=useState("")


    const [category,setCategory]=useState({
        key:"category",
        name:"Categoria",
      
    })

    const navigate = useNavigation()

    function handleTransactionTypesSelect(type:"positive"|"negative"){
        setTransectionType(type)
    }
    function handleCloseSelectCategoryModal(){
        setCategoryModal(false)
    }
    function handleOpemSelectCategoryModal(){
        setCategoryModal(true)
    }
    function resertState(){
            setCategory({ key:"category", name:"Categoria",})
            setName("")
            setAmount("")
            setTransectionType("")
    }
    async function handleRegister(){

        if(!name||!amount){
           return setAviso("É preciso coloca nome e um valor ")
        }
        if(!transectionType){
             return setAviso("É preciso coloca tipo de transação ")
        }
        if(category.key=="category"){
           return setAviso("É preciso coloca uma categoria")
        }
        if( Number.isNaN(Number(amount))){
            return setAviso("É numero valido")
        }

        const value = amount.split(",")[0];
        
        console.log(Number(value))
        const NewTansaction={
            id:String(uuid.v4()),
            name:name,
            amount:String(value),
            category:category.key,
            date: new Date(),
            type:transectionType
        }
        
        try {
            const dateKey="@financas:transaction";

            const date = await AsyncStorage.getItem(dateKey);

            const currendDate= date? JSON.parse(date):[];

            const dateFormatted=[
                ...currendDate,
                NewTansaction
            ];

            await AsyncStorage.setItem(dateKey,JSON.stringify(dateFormatted));

            resertState();
            navigate.goBack()

        } catch (error) {
            console.log(error)
            Alert.alert("nao foi possivel salva, tente novamente")
        }
        
        return setAviso("")
    }

    useEffect(()=>{
        async function name() {
            await AsyncStorage.removeItem("@financas:transaction")
        }
        
  
      
    },[])
    return( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Conteiner>
           

            
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>
                <Form>
                    <Fields>
                        <ContentInput 
                            onChangeText={(submit)=>setName(submit)} 
                            placeholder="Nome"
                            autoCapitalize="sentences" 
                            autoCorrect={false}
                            value={name}
                            />

                        <ContentInput 
                            keyboardType="numeric" 
                            onChangeText={(submit)=>setAmount(submit)} 
                            placeholder="Preço"
                             value={amount}
                            /> 
                        <TransactionTypes>
                            <TransactionTypeButtons isActive={transectionType==="positive"} onPress={()=>handleTransactionTypesSelect("positive")} type={"up"} title="Income"/> 
                            <TransactionTypeButtons isActive={transectionType==="negative"} onPress={()=>handleTransactionTypesSelect("negative")} type={"down"} title="OutCome"/>  
                        </TransactionTypes>

                        <CategoryselectButton 
                        onPress={handleOpemSelectCategoryModal}
                        title={category.name}/>
                    </Fields>
                    {Aviso&&
                        <Avisos>
                            <AvisoName>
                                {Aviso}
                            </AvisoName>
                        </Avisos>
                    }

                    <Button 
                    onPress={handleRegister}
                    title="Cadastra"/>
                </Form>

                <Modal 
                animationType="slide"
                visible={categoryModal}>
                    <CategorySelect
                        category={category}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                        setCategory={(n)=>setCategory(n)}
                    
                    />
                </Modal>  
           
        </Conteiner> 
        </TouchableWithoutFeedback>
    )
}