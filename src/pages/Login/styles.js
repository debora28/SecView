import styled from 'styled-components/native'



export const Container = styled.KeyboardAvoidingView`
flex: 1;
algn-items: center;
justity-content: center;
`;

export const Logo = styled.Image`
width: 320px;
height: 200px;
margin-top: 20px;
`;

export const ContainerDados = styled.View`
margin-horizontal: 40px;
padding: 20px;
align-items: center;
background-color: #ffffff;
justify-content: center;
border-radius: 10px;
`;

export const TextLabel = styled.Text`
font-size: 20px;
font-weight: bold;
width: 100%;
color: black;
opacity: 0.7;
`;

export const Input = styled.TextInput`
font-size: 17px;
borderBottomWidth: 2;
borderBottomColor: #ff6b81;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;
width: 100%;
`;

export const BotaoSujeito = styled.TouchableOpacity`
background-color: #DDD;
padding: 5px;
border-radius: 5px;
width: 90%
justity-content: center;
align-items: center;
`;
