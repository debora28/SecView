import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

import LinearGradient from 'react-native-linear-gradient';

export default function Login() {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  function handleSignUpFake() {
      navigation.navigate('Home')
  }

  return (
    
    <LinearGradient
      colors={['#f3a683', '#ff793f', '#ff5252']}
      style={styles.linearGradient}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{justifyContent: 'center', flex: 1}}>

        <Image
          style={styles.imgLogo}
          source={require('../../images/logo-secview1.png')}
        />

        <View style={styles.container}>
        
          <Text style={styles.txtLabel}>Nome</Text>
          <TextInput
            style={styles.txtInput}
            placeholder={'Nome'}
            autocorrect={false}
            autoCapitalize='none'
            value={nome}
            onChangeText={(texto) => setNome(texto)}
          />

          <Text style={styles.txtLabel}>Email</Text>
          <TextInput
            style={styles.txtInput}
            placeholder={'Email'}
            autocorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(texto) => setEmail(texto)}
          />

          <Text style={styles.txtLabel}>Senha</Text>
          <TextInput
            style={styles.txtInput}
            placeholder={'Senha'}
            autocorrect={false}
            autoCapitalize='none'
            value={password}
            secureTextEntry={true}
            passwordRules={true}
            onChangeText={(texto) => setPassword(texto)}
          />

          <TouchableOpacity
            style={styles.btnConfirmar}
            onPress={handleSignUpFake}>
            <Text style={styles.btnTxt}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
  },

  imgLogo: {
    width: '75%',
    height: '25%',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginTop: 20,
  },

  container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },

  txtLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    height: '7%',
    color: 'black',
    opacity: 0.7,
  },

  txtInput: {
    fontSize: 17,
    borderBottomWidth: 2,
    borderColor: '#FFFFFF',
    marginBottom: 5,
    marginTop: 5,
    width: '100%',
    backgroundColor: 'transparent',
  },

  btnConfirmar: {
    justifyContent: 'center',
    height: '13%',
    width: '100%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e74c3c',
    backgroundColor: '#ff6b81',
    marginTop: 30,
  },

  btnTxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

});
