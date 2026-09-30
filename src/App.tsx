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
import { useContext } from "react";
import SiginIn from "./Screens/signIn";
import { AuthProvider } from "./hooks/UseAuthContext";



function AppContent() {
  const { themes } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes === "white" ? themeWhite : ThemeDarck}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </ThemeProvider>
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
          <SiginIn />
        </AuthProvider>
      </ThemeProvider>
    </ContextTheme>
  );
}