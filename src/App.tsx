
import Dashboard from './Screens/dashBoard';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';


export default function App() {

  const[fontsLoaded]=useFonts({Poppins_400Regular,Poppins_500Medium,Poppins_700Bold})
  

  return(
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
    
  ) 
}
