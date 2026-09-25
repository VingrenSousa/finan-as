
import { useState } from "react";
import Button from "../../components/forms/button";
import ContentInput from "../../components/forms/input";
import TransactionTypeButtons from "../../components/forms/TransectionTypebutton";
import { Conteiner, Header, Title,Form ,Fields,TransactionTypes,Avisos,AvisoName} from "./styles";
import CategoryselectButton from "../../components/forms/categorySelectButtom";

import CategorySelect from "../CategorySelect";
import { Keyboard, Modal, TouchableWithoutFeedback } from "react-native";


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

    function handleTransactionTypesSelect(type:"up"|"down"){
        setTransectionType(type)
    }
    function handleCloseSelectCategoryModal(){
        setCategoryModal(false)
    }
    function handleOpemSelectCategoryModal(){
        setCategoryModal(true)
    }

    function handleRegister(){

        if(!name||!amount){
           return setAviso("É preciso coloca nome e um valor ")
        }
        if(!transectionType){
             return setAviso("É preciso coloca tipo de transação ")
        }
        if(category.key=="category"){
           return setAviso("É preciso coloca uma categoria")
        }
        
        const date={
            name:name,
            amount:amount,
            transectionType,
            category:category.key
        }
       
        console.log(date)
        return setAviso("")
    }
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
                            />

                        <ContentInput 
                            keyboardType="numeric" 
                            onChangeText={(submit)=>setAmount(submit)} 
                            placeholder="Preço"
                            /> 
                        <TransactionTypes>
                            <TransactionTypeButtons isActive={transectionType==="up"} onPress={()=>handleTransactionTypesSelect("up")} type={"up"} title="Income"/> 
                            <TransactionTypeButtons isActive={transectionType==="down"} onPress={()=>handleTransactionTypesSelect("down")} type={"down"} title="OutCome"/>  
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