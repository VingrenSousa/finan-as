import { ThemeProvider } from "styled-components";
import { ThemeDarck, themeWhite } from "./styles/theme";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./routes/app.routes";

import { ContextTheme, ThemeContext } from "./hooks/themeContext";

import { AuthProvider, useAuth } from "./hooks/UseAuthContext";
import RouterSiginIn from "./routes/app.steck.routes";



function AppContent() {
 
  const {user} =useAuth()
  return (
  
      <NavigationContainer>
        {user.isLogin?<AppRouter/>:<RouterSiginIn/>}
      </NavigationContainer>
    
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ContextTheme>
       <ThemeProvider theme={themeWhite }>
        <AuthProvider>
           <AppContent/>
        </AuthProvider>
      </ThemeProvider>
    </ContextTheme>
  );
}