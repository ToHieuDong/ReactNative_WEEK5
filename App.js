import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import App1 from './App1';
import App2 from './App2';


const Stack = createNativeStackNavigator()

export default function App() {
    return (
    <PaperProvider >
        <NavigationContainer >
            <Stack.Navigator initialRouteName = "App1" >
                <Stack.Screen name = "App1" component = { App1 } options = {{ headerShown: false }}/> 
                <Stack.Screen name = "App2"component = { App2 } options = {{ headerShown: false }}/>
            </Stack.Navigator> 
        </NavigationContainer>
    </PaperProvider>
    );
};