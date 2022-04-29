import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Anime } from "../screens/AnimeScreen";
import Home from "../screens/Home";



const Stack = createStackNavigator();

const MyStack: React.FC = () => (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Hero Anime">
    <Stack.Screen name="Anime Hero" component={Home}
    options={{headerStyle:{backgroundColor: '#270082',},headerTintColor: '#fff',headerTitleStyle: {
      fontWeight: 'bold', fontSize: 20,
    }}}/>
    <Stack.Screen name="Anime" component={Anime}
    options={{headerStyle:{backgroundColor: '#270082',},headerTintColor: '#fff',headerTitleStyle: {
      fontWeight: 'bold', fontSize: 20,
    }}}/>
  </Stack.Navigator>
</NavigationContainer>
);

export default MyStack