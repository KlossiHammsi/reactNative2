import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [emailaddress, setEmailadress] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const goToHomePage = () => {
    navigation.navigate('Homepage')
  };

  return (
    <ImageBackground source={require('../assets/background6.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.signUpAtasKanan} onPress={handleRegister}><Text style={styles.textSignUpAtasKanan}>Sign Up</Text></TouchableOpacity>

        <View>
          <Text style={styles.tulisanSignIn}>Sign in</Text>
          <Text style={styles.tulisanEnterYour}>Enter your details to proceed further</Text>
        </View>

        <View sytle={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Email Address"></TextInput>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry></TextInput>
        </View>

        <View style={styles.rememberMeContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/Buttons.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <Text sytle={styles.remmeberMe}>Remember me</Text>
        </View>

        <View style={styles.groupBawah}>
          {/* <TouchableOpacity style={styles.tulisanSignInBawah}><Text style={styles.textTulisanSignInBawah}>Sign In</Text></TouchableOpacity> */}
          <TouchableOpacity style={styles.tulisanSignInBawah} onPress={goToHomePage}><Text style={styles.textTulisanSignInBawah}>Sign Up</Text></TouchableOpacity>

          <Text style={styles.jarak}>Or</Text>

          <View>
            <TouchableOpacity style={styles.containerFacebook}><Image source={require('../assets/facebook.png')} style={styles.socialIcon} /><Text sytle={styles.jarakTextBawah}>Sign In with Facebook</Text></TouchableOpacity>
            <TouchableOpacity style={styles.containerInstagram}><Image source={require('../assets/instagram.png')} style={styles.socialIcon} /><Text sytle={styles.jarakTextBawah}>Sign In with Instagram</Text></TouchableOpacity>
          </View>

        </View>

      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 0,
    paddingTop: 14,
  },

  remmeberMe: {
    fontFamily: 'helvetica',
    fontWeight: 'bold',
  },
  
  signUpAtasKanan: {
    marginTop: 20,
    backgroundColor: 'gray',
    marginRight: 10,
    borderRadius: 50,
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignSelf: 'flex-end',
  },

  textSignUpAtasKanan: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'helvetica',
  },
  
  groupBawah: {
    alignItems: 'center',
  },

  jarak: {
    marginTop: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  tulisanSignIn: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginBottom: 10,
    fontFamily: 'helvetica',
  },

  tulisanEnterYour: {
    fontSize: 17,
    alignSelf: 'center',
    paddingBottom: 50,
    color: 'black',
    fontFamily: 'helvetica',
  },

  iconButton: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },

  tulisanSignInBawah: {
    backgroundColor: '#2149fd',
    borderRadius: 50,
    paddingHorizontal: 170,
    paddingVertical: 12,
    alignSelf: 'center',
  },

  textTulisanSignInBawah: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
  },

  socialIcon: {
    width: 20,
    height: 20, 
    resizeMode: 'contain',
    marginRight: 70,
  },

  buttonImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 8,
  },

  input: {
    paddingHorizontal: 70,
    fontFamily: 'helvetica',
    paddingVertical: 10,
    marginBottom: 50,
    backgroundColor: 'white',

    alignSelf: 'center',
    textAlign: 'center',

    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 20,
  },

  containerFacebook: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 40,
    marginRight: 70,
  },

  containerInstagram: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
  },

});

export default LoginScreen;