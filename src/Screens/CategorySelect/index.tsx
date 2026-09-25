import { FlatList } from "react-native";
import { Category, Conteiner,Header,Icon,Name,Separator,Title,Footer} from "./styles";
import { categories ,propsCategories } from "../../utils/categoty";
import Button from "../../components/forms/button";


interface categoryItem{
    name:string;
    key:string
}
interface categoryProps{
    category:categoryItem;
    setCategory:(category:categoryItem)=>void;
    closeSelectCategory:()=>void

}



export default function CategorySelect({category,closeSelectCategory,setCategory}:categoryProps){
    function handleCategoryselect(item:categoryItem){
        setCategory(item)
    }
    return(
        <Conteiner>
            <Header>
                <Title>
                    Categoria
                </Title>
            </Header>

            <FlatList<propsCategories>
                data={categories}
                style={{flex:1,width:"100%"}}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>(
                    <Category
                        onPress={()=>handleCategoryselect(item)}
                        isActive={category.key ===item.key}
                    >
                        <Icon name={item.icon}/>
                        <Name>
                            {item.name}
                        </Name>
                    </Category>
                )}
                ItemSeparatorComponent={()=><Separator/>}
            />

            <Footer>
                <Button title="Selecionar"
                    onPress={closeSelectCategory}
                />

            </Footer>
        </Conteiner>
    )
}