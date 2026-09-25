

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './routes/app.routes';


export default function App() {

  const[fontsLoaded]=useFonts({Poppins_400Regular,Poppins_500Medium,Poppins_700Bold})
  

  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRouter/>
      </NavigationContainer>
    </ThemeProvider>
    
  ) 
}
