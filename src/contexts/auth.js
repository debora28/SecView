import React, { useState, createContext } from 'react'
import firebase from '../services/firebaseConnection';


export const AuthContext = createContext({});

function AuthProvider({children}) {


    const [user, setUser] = useState('');

    console.log(user);
    //Login fake
    function signInFake(email, password) {
        let data = {
            email: email,
            password: password
        }
        setUser(data);
    }

    //LogoutFake
    function logoutFake() {
        let data = '';
        setUser(data);
    }

    // Login Usuário
    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then( (snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.value.nome,
                    email: value.user.email,
                };

                setUser(data);
            })
        })
        .catch((error) => {
            alert(error.code);
        });
    }

    // Cadastrar Usuário
    async function signUp(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                nome: nome
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                };
                setUser(data);
            })
        })
        .catch((error) => {
            alert(error.code);
        });
        
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signInFake, logoutFake }}>
            {children}
        </AuthContext.Provider>
    );
} 

export default AuthProvider;