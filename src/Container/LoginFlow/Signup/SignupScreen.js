import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {Colors, Images, Responsive, ScreenName} from '../../../Theme';
import {
  Button,
  ButtonText,
  Container,
  ErrorText,
  Input,
  InputContainer,
  Label,
  LoginBtn,
  LoginText,
  Title,
} from './SignupScreenStyles';
import Loader from '../../../Component/Loader';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';

const SignupScreen = ({navigation}) => {
  const loginSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters long'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(loginSchema)});

  const onSubmit = data => {
    console.log('data', data);

    navigation.navigate(ScreenName.SigninScreen);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container>
        <Title>Register</Title>

        <InputContainer>
          <Label>Name</Label>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Enter your name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </InputContainer>

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
          <ButtonText>Register</ButtonText>
        </Button>

        <LoginBtn
          onPress={() => {
            navigation.goBack();
          }}>
          <LoginText>Login</LoginText>
        </LoginBtn>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
