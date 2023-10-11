import React from 'react'
import { NavigationContainer, Text } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

//ROTAS
import Usuarios from '../screens/usuarios/Usuarios'
import Posts from '../screens/posts/Posts'

const Stack = createStackNavigator()

export default function Router() {
  return (
     <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'> 

            <Stack.Screen name='Usuários' component={Usuarios}/>
            <Stack.Screen name='Posts' component={Posts}/>

        </Stack.Navigator>


     </NavigationContainer>
  )
}