import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

import LinearGradient from 'react-native-linear-gradient';

export default function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signInFake } = useContext(AuthContext);

  function handleSignIn() {
    signIn(email, password);
  }

  function handleSignInFake() {
    signInFake(email, password);
  }

  return (
    <LinearGradient
      colors={['#f3a683', '#ff793f', '#ff5252']}
      style={styles.linearGradient}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{justifyContent: 'center'}}>

        <Image
          style={styles.imgLogo}
          source={require('../../images/logo-secview1.png')}
        />

        <View style={styles.container}>
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
            onPress={handleSignInFake}>
            <Text style={styles.btnTxt}>Confirmar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnTerms} onPress={() => {}}>
          <Text style={styles.btnTxtTerms}>Termos e Condições</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  imgLogo: {
    width: '100%',
    height: '33%',
    marginTop: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  container: {
    marginHorizontal: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
  },

  txtLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    color: 'black',
    opacity: 0.7,
  },

  txtInput: {
    fontSize: 17,
    borderBottomWidth: 2,
    borderBottomColor: '#ff6b81',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    width: '100%',
  },

  btnConfirmar: {
    justifyContent: 'center',
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e74c3c',
    backgroundColor: '#ff6b81',
    marginTop: 20,
  },

  btnTxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  btnTerms: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 60,
  },

  btnTxtTerms: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
});
