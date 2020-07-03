import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TableSelection from './app/views/TableSelection';
import Training from './app/views/Training';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Selection"
          component={ TableSelection }
          options={{
            title: 'Selecciona una tabla',
            headerStyle: {
              backgroundColor: '#22a6b3',
            },
          }}
        />
        <Stack.Screen
          name="Training"
          component={ Training }
          options={{
            title: 'Entrenamiento',
            headerStyle: {
              backgroundColor: '#22a6b3',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
