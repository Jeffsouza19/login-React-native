import { StatusBar } from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from "./styles";
import  Input  from "./components/input/Input"


export default function App() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image source={require('./assets/rn_login_logo.png')} style={styles.logo} />
                <Text style={styles.h1}>Sistema de Login</Text>
                <Text style={styles.h2}>Bem Vindo(a)! Digite seus dados abaixo</Text>

                <Input placeholder={'Digite seu email'} label={'Email'} keyboard={'email-address'}/>
                <Input placeholder={'******'} label={'Senha'} secure keyboard={'default'}/>

                <TouchableOpacity style={styles.forgotArea}>
                    <Text style={styles.forgotText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width: '100%'}}>
                    <Text style={styles.btn}> Entrar</Text>
                </TouchableOpacity>

                <View style={styles.signUpArea}>
                    <Text style={styles.signUpText}>
                        Não tem uma conta?
                    </Text>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpTextButton}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Criado por Jeferson Souza</Text>
                </View>

            </View>
        </ScrollView>
        );
}
