import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

export default function Settings(){

    return(

        <LinearGradient
            colors={['#f3a683', '#ff793f', '#ff5252']}
            style={styles.linearGradient}>

        <View>
            <Text>Settings</Text>
        </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    
    linearGradient: {
      flex: 1,
    },

});