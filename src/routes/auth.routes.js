import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="Login" 
            component={Login} 
            options={{headerShown: false}}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;