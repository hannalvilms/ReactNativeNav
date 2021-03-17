import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Recipes from './screens/Recipes';
import Guacamole from './screens/Guacamole';
import Choc from './screens/Choc';
import Poke from './screens/Poke';
import Nachos from './screens/Nachos';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Recipes"
        component={Recipes}
        options={{ title: 'Recipes' }}
      />
     <Stack.Screen
         name="Guacamole"
         component={Guacamole}
         options={{ title: 'Guacamole' }}
     />
     <Stack.Screen
         name="Choc"
         component={Choc}
         options={{ title: 'Choc-chip cookies' }}
     />
     <Stack.Screen
         name="Poke"
         component={Poke}
         options={{ title: 'Poke bowl' }}
     />
     <Stack.Screen
         name="Nachos"
         component={Nachos}
         options={{ title: 'Nachos' }}
     />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
