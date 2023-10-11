import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import Users from "../screens/usuarios/Usuarios";
import Posts from "../screens/posts/Posts";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Users"
      >

        <Tab.Screen
          name="Users"
          component={Users}
          options={{
            tabBarLabel: 'Usuários',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="ios-people-circle-outline" size={24} color="black" />
            }
          }} />

        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarLabel: 'Posts',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="book-outline" size={24} color="black" />
            }
          }} />

      </Tab.Navigator>

    </NavigationContainer>
  )
}
