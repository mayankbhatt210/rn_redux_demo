import styled from 'styled-components/native';
import {Colors} from '../../../Theme';
import {StyleSheet} from 'react-native';

// Screen Container
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background || '#f5f5f5'};
  padding: 20px;
`;

// Title
export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${Colors.text || '#333'};
`;

// Input Container
export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

// Input Label
export const Label = styled.Text`
  font-size: 16px;
  color: ${Colors.label};
  margin-bottom: 8px;
`;

// Text Input
export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid ${Colors.border};
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  background-color: ${Colors.inputBackground};
`;

// Error Text
export const ErrorText = styled.Text`
  font-size: 14px;
  color: ${Colors.error};
  margin-top: 5px;
`;

// Button
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const RegisterBtn = styled.TouchableOpacity`
  height: 50px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
export const RegisterText = styled.Text`
  font-size: 16px;
  color: ${Colors.primary};
  font-weight: bold;
`;
// Button Text
export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${Colors.buttonText};
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
