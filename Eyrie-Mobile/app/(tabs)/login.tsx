import React, { useState } from "react";
import { Image } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/FontAwesome5";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  type FormType = {
    email: string;
    password: string;
    remember?: boolean;
  };

  const [form, setForm] = useState<FormType>({
    email: "",
    password: "",
    remember: false,
  });

  const isFormValid = form.email !== '' && form.password !== '';


  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRememberChange = (checked: boolean) => {
    setForm((prev) => ({ ...prev, remember: checked }));
  };

  const handleSubmit = () => {
    console.log("Successfuly Login:", form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.logo}>EYRIE</Text>
        <Text style={styles.superscript}>TM</Text>
      </View>

      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subheading}>Login by Email Address</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={"#999"}
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Create a password"
            placeholderTextColor={"#999"}
            value={form.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color="gray"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <View style={styles.innerCheckboxContainer}>
          <Checkbox
            value={form.remember}
            onValueChange={handleRememberChange}
            color={form.remember ? '#2563eb' : undefined}
          />
          <Text style={styles.checkboxText}>
            Remember for 30 days
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('signup')} activeOpacity={0.7}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isFormValid ? 'red' : 'gray' }]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <Text style={styles.orText}>______________________ or ______________________</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.signUpButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
            style={{ width: 18, height: 18, alignSelf: 'center', marginRight: 4 }}
          />
          <Text style={styles.signUpButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <Icon style={styles.signUpButtonIcon} name="apple" size="20" color="#000"></Icon>
          <Text style={styles.signUpButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Have no account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup' as never)}>
          <Text style={styles.link}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textWrapper: {
    position: 'relative',
    alignSelf: 'flex-start',
  },
  logo: {
    fontSize: 44,
    fontWeight: '900',
    marginTop: 36,
    marginBottom: 36,
    textAlign: 'left',
    width: '100%',
  },
  superscript: {
    position: 'absolute',
    top: 36,
    left: 105,
    fontSize: 16,
    fontWeight: 900,
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
    width: '90%',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  forgotPassword: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
    color: '#2563eb',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  passwordInput: {
    width: '90%',
    height: 48,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  eyeIcon: {
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-between',

  },
  innerCheckboxContainer: {
    flexDirection: 'row',
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    flexShrink: 1,
    alignSelf: 'center',
    fontWeight: '500',
  },
  link: {
    color: '#2563eb',
    textDecorationLine: 'none',
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  lineContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  line: {
    height: 3,
    backgroundColor: '#000',
    color: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
    opacity: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  signUpButton: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  signUpButtonIcon: {
    alignSelf: 'center',
    marginRight: 4,
  },
  signUpButtonText: {
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
    marginRight: 6,
  },
});

export default SignIn;
