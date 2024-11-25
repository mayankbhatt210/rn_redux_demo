import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Button,
  ButtonText,
  Container,
  ErrorText,
  Input,
  InputContainer,
  Label,
  RegisterBtn,
  RegisterText,
  Title,
} from './SigninScreenStyles';
import {Constant, ScreenName} from '../../../Theme';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import ApiConfig from '../../../ApiConfig';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {commonConstant} from '../../../Theme/Constants';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../../redux/Auth/action';
// import {loginAction} from '../../../Redux/Auth/action';

// Validation schema using yup
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SigninScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Handle form submission
  const onSubmit = async formData => {
    const {email} = formData;
    const {password} = formData;
    console.log('data', formData);

    const objParam = {
      email: email,
      password: password,
    };
    try {
      const {payload: res} = await dispatch(loginAction(objParam));

      const {data, status, message} = res;
      if (status) {
        console.log('status--->', status);
        console.log('data--->', data.token);

        const headers = ApiConfig.headers;
        headers.Authorization = `Bearer ${data.token}`;
        Axios.defaults.headers = headers;
        ApiConfig.headers = headers;
        await AsyncStorage.setItem(
          Constant.asyncStorageKeys.LoginDetails,
          JSON.stringify(data),
        );
        commonConstant.isLoggedIn = true;
        Constant.commonConstant.emitter.emit(Constant.eventListenerKeys.Login);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('Error', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container>
        <Title>Login</Title>

        {/* Email Input */}
        <InputContainer>
          <Label>Email</Label>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </InputContainer>

        {/* Password Input */}
        <InputContainer>
          <Label>Password</Label>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Enter your password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </InputContainer>

        {/* Submit Button */}
        <Button onPress={handleSubmit(onSubmit)}>
          <ButtonText>Login</ButtonText>
        </Button>

        <RegisterBtn
          onPress={() => {
            navigation.navigate(ScreenName.SignupScreen);
          }}>
          <RegisterText>Register</RegisterText>
        </RegisterBtn>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;
