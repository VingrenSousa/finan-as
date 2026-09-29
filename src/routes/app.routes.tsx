import {
  createBottomTabNavigator,
  
} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/dashBoard';

import Register from '../Screens/register';

import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Resume from '../Screens/resume';


const{Navigator,Screen}=createBottomTabNavigator()

export default function AppRouter(){
    
    const theme = useTheme();
    return(
        <Navigator
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:theme.COLORS.SECONDARY,
            tabBarInactiveTintColor:theme.COLORS.TEXT,
            tabBarLabelPosition:"beside-icon",
            tabBarStyle:{
                height:88,
                paddingVertical:Platform.OS==="ios"?23:18,
                backgroundColor:theme.COLORS.SHAPE,
            }
        }}>
            <Screen
                options={{
                    tabBarIcon:(({size,color})=><MaterialIcons name='format-list-bulleted' size={size} color={color}/>)
                }}
                name='Listagem'
                component={Dashboard}
            />
            <Screen
                options={{
                    tabBarIcon:(({size,color})=><MaterialIcons name='attach-money' size={size} color={color}/>)
                }}
                name='Cadastrar'
                component={Register}
            />
            <Screen
                options={{
                    tabBarIcon:(({size,color})=><MaterialIcons name='pie-chart' size={size} color={color}/>)
                }}
                name='Resumo'
                component={Resume}
            />
        </Navigator>
    )
}