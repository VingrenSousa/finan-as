import { createContext, useContext, ReactNode, useState, useEffect } from "react";

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";



interface UserProps {
  uid:string

}

interface PropsContext {
  user: UserProps|null;
  handleLoginGoogle: () => void;
  handleLogout: () => void;
 
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as PropsContext)

 GoogleSignin.configure({
    webClientId: "555165574838-73prp4vpcssbd6vr36bq7dit03qhb0f8.apps.googleusercontent.com",
});

function AuthProvider({ children }: ProviderProps) {
  const[user, setUser] = useState<UserProps|null>(null);
  const auth = getAuth()
 
 
  async function handleLoginGoogle() {
    await GoogleSignin.hasPlayServices();

    const result = await GoogleSignin.signIn();

    const idToken = result.data?.idToken;

    if (!idToken) {
      throw new Error("Não foi possível obter o ID Token");
    }

    const credential = GoogleAuthProvider.credential(idToken);

    await signInWithCredential(auth, credential);
  }

  function handleLogout() {
    signOut(auth)
  }
  useEffect(()=>{

    const dateUser = onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })

    return dateUser;
  },[])
  return (
    <AuthContext.Provider
      value={{ user, handleLoginGoogle, handleLogout }}
      
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };