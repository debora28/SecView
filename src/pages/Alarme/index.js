import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Alarme(){

    return(
        <LinearGradient
            colors={['#f3a683', '#ff793f', '#ff5252']}
            style={styles.linearGradient}>      

            <View style={styles.container} >   

            <TouchableHighlight
                underlayColor="transparent"
                style={styles.btnAlar}
                onPress={() => {}}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Icon name="moon-o" style={styles.iconAlar} /> 
                        <Text style={styles.txtAlar} >Alarme às 11:59PM</Text>  
                        <Icon name="play-circle" style={styles.iconAlar} />   
                    </View>            
                </TouchableHighlight>


                <TouchableHighlight
                underlayColor="transparent"
                style={styles.btnAlar}
                onPress={() => {}}
                >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Icon name="moon-o" style={styles.iconAlar} /> 
                        <Text style={styles.txtAlar} >Alarme às 10PM</Text>  
                        <Icon name="play-circle" style={styles.iconAlar} />   
                    </View>   
                </TouchableHighlight>


                <TouchableHighlight
                underlayColor="transparent"
                style={styles.btnAlar}
                onPress={() => {}}
                >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Icon name="moon-o" style={styles.iconAlar} /> 
                        <Text style={styles.txtAlar} >Alarme às 6PM</Text>  
                        <Icon name="play-circle" style={styles.iconAlar} />   
                    </View>   
                </TouchableHighlight>

                <TouchableHighlight
                underlayColor="transparent"
                style={styles.btnAlar}
                onPress={() => {}}
                >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Icon name="sun-o" style={styles.iconAlar} /> 
                        <Text style={styles.txtAlar} >Alarme às 11:59AM</Text>  
                        <Icon name="play-circle" style={styles.iconAlar} />   
                    </View>   
                </TouchableHighlight>


                <TouchableHighlight
                underlayColor="transparent"
                style={styles.btnAlar}
                onPress={() => {}}
                >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Icon name="sun-o" style={styles.iconAlar} /> 
                        <Text style={styles.txtAlar} >Alarme às 10AM</Text>  
                        <Icon name="play-circle" style={styles.iconAlar} />   
                    </View>   
                </TouchableHighlight>

                <TouchableHighlight
                underlayColor="transparent"
                style={styles.btnAlar}
                onPress={() => {}}
                >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Icon name="sun-o" style={styles.iconAlar} /> 
                        <Text style={styles.txtAlar} >Alarme às 8AM</Text>  
                        <Icon name="play-circle" style={styles.iconAlar} />   
                    </View>   
                </TouchableHighlight>

                </View> 

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    
    linearGradient: {
      flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },

    btnAlar : {
        backgroundColor: '#ff6b81',
        height: '10%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

    txtAlar : {
        fontSize: 17,
        marginRight: 20,
        marginLeft: 20
    },

    iconAlar : {
        fontSize: 40,
        color: '#FFFFFF',
    },

});