import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App1 from './App1';
import App2 from './App2';


const Stack = createNativeStackNavigator()

export const propContext = createContext();




export default function App() {
    
    const [img, setImg] = useState((require('./assets/vs_blue.png')));

    return (
    <propContext.Provider  value={{img, setImg}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "App1" >
                <Stack.Screen name = "App1" component = { App1 } options = {{ headerShown: false }}/> 
                <Stack.Screen name = "App2"component = { App2 } options = {{ headerShown: false }}/>
            </Stack.Navigator> 
        </NavigationContainer>
    </propContext.Provider>
    );
};