import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decreaseBurger,
  increaseBurger,
} from '../src/redux/Burger/burgerReducer';
// import {increaseBurger, decreaseBurger} from '../redux/burgerSlice';

const Screen = ({route, navigation}) => {
  const numberOfBurger = useSelector(state => state.burger.numberOfBurger);
  const dispatch = useDispatch();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{marginVertical: 50}}>
        <Text style={{fontSize: 20}}>Number of Burgers: {numberOfBurger}</Text>
        <Button
          title="Increase Burger"
          onPress={() => dispatch(increaseBurger(1))}
        />
      </View>
      <View style={{marginVertical: 50}}>
        <Button
          title="Decrease Burger"
          onPress={() => dispatch(decreaseBurger())}
        />
      </View>

      <Button
        title="Login"
        onPress={() => {
          navigation.push(ScreenName.VideoScreen);
        }}
      />
    </View>
  );
};

export default Screen;
