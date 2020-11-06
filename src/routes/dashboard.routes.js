import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Alarme from '../pages/Alarme';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home'
    },
    Settings: {
        name: 'gears'
    },
    Alarme: {
        name: 'bell'
    }
}

export default function Tabs() {
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const { name } = icons[route.name];
                return <Icon name={name} color={color} size={size} />;
            }
        }) }
        tabBarOptions={{
            style: {
                borderTopWidth: 2,
                borderTopColor: '#c0392b',
            },
           // activeTintColor: 'red',
           // inactiveTintColor: 'green'
        }}
        >   
            <Tab.Screen name="Settings" component={Settings}/> 
            <Tab.Screen name="Home" component={Home} />        
            <Tab.Screen name="Alarme" component={Alarme} />
        </Tab.Navigator>
    );
}