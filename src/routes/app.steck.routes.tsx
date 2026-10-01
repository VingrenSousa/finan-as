
import Create from "../Screens/Create";
import SiginIn from "../Screens/signIn";

import {
  createStackNavigator,
  StackNavigationProp,
 
} from '@react-navigation/stack';

export type AuthStackParamList = {
  login: undefined;
  Create: undefined;
};

export type navigationProps = StackNavigationProp<AuthStackParamList>;

const Navigator = createStackNavigator<AuthStackParamList>();




export default function RouterSiginIn() {
  return (
    <Navigator.Navigator
    
      screenOptions={{
        animationTypeForReplace: "pop",
        animation: "slide_from_bottom",
        headerShown: false,
      }}
    >
      <Navigator.Screen
        name="login"
        component={SiginIn}
      />
        <Navigator.Screen
        name="Create"
        component={Create}
      />

    
    </Navigator.Navigator>
  );
}