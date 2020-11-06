import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth'

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home() {

  const navigation = useNavigation();

  const { logoutFake, user } = useContext(AuthContext);

  function hangleLogoutFake() {
    logoutFake();
  }

  return (
    <LinearGradient
      colors={['#f3a683', '#ff793f', '#ff5252']}
      style={styles.linearGradient}>

      <View style={styles.header}>
        <TouchableOpacity       
          onPress={() => {}}
          >
            <Icon name="bell-o" size={30} style={styles.iconStatus} />
        </TouchableOpacity>
            <View style={styles.descricao} >
              <Text style={styles.clienteNome} >Fulano</Text>
              <Text style={styles.statusApp} >Normal</Text>
              <Text style={styles.clienteEmail} >{user.email}</Text>
            </View>
          <TouchableOpacity 
          onPress={hangleLogoutFake}
          >
            <Icon name="power-off" size={35} style={styles.iconLogoff} />
          </TouchableOpacity>
       </View>

    
      <View style={styles.container}>

        <Text style={styles.titleCamera}>Camera Principal</Text>
        <Image source={require('../../images/Image-Camera.png')} style={styles.cameraImage} />
        
      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
        <TouchableOpacity 
        style={styles.btn} 
        onPress={() => {navigation.navigate('Cadastro')}}
        >
          <Icon name="user-circle-o" style={styles.iconCadastro}/>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.btn} 
        onPress={() => {}}
        >
          <Icon name="th-large" style={styles.iconCadastro}/>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.btn} 
        onPress={() => {}}
        >
          <Icon name="video-camera" style={styles.iconCadastro}/>
        </TouchableOpacity>

        </View>


      </View>

    

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: '#c0392b',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  iconStatus: {
    alignSelf: 'center',
    color: '#FFF',
    backgroundColor: '#16a085',
    padding: 15,
    borderRadius: 30,
  },

  iconLogoff : {
    color: '#e74c3c',
  },
  descricao: {
    justifyContent: 'center',
  },

  clienteNome: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  statusApp: {
    fontSize: 20,
    color: '#16a085',
    fontWeight: 'bold'
    
  },

  clienteEmail: {
    fontSize: 17,
    
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  titleCamera: {
    marginTop: 10,  
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

  cameraImage: {
    width: '100%',
    height: '50%',
    marginBottom: 20,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black'
  },

  btn: {
    padding: 10,
    marginTop: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#ff6b81',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconCadastro: {
    color: '#FFFFFF',
    fontSize: 50,
  },
 
});
