import { createContext, useContext, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";



interface UserProps {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface PropsContext {
  user: UserProps;
  signInWithGoogle: () => Promise<void>;
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as PropsContext);

function AuthProvider({ children }: ProviderProps) {
  const user: UserProps = {
    id: "1",
    name: "",
    email: "@test.com",
    photo: "",
  };

  const CLIENT_ID =
    "";

  const redirectUri = AuthSession.makeRedirectUri({
    scheme: "financas",
  });

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ["openid", "profile", "email"],
      redirectUri,
      responseType: AuthSession.ResponseType.Code,
      usePKCE: true,
    },
    {
      authorizationEndpoint:
        "https://accounts.google.com/o/oauth2/v2/auth",
    }
  );

  async function signInWithGoogle() {
    try {
      if (!request) {
        console.log("Request ainda não está pronta");
        return;
      }

      const result = await promptAsync();

      console.log("Resultado:", result);
    } catch (error) {
      console.log("Erro no login:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };