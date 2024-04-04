import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('./assets/jorge.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            <Text style={styles.titleThin}>Proceed with your{'\n'}</Text>
            <Text style={styles.titleBold}>Login</Text>
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.singleLineInput]}
              placeholder="Username"
              keyboardType="email-address"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.singleLineInput]}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity style={styles.redButton}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Forgot Password?")}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    marginBottom: 40,
    marginLeft: 20,
  },
  titleThin: {
    fontWeight: '300', 
  },
  titleBold: {
    fontWeight: 'bold', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    color: 'black',
  },
  singleLineInput: {
    borderBottomWidth: 1,
    borderColor: 'black', 
  },
  redButton: {
    backgroundColor: 'red', 
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
