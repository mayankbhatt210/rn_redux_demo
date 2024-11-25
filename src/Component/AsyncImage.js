import React, {useEffect, useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, CommonStyle, Images} from '../Theme';

export default function AsyncImage(props) {
  const [style] = useState(props.style);
  const resizeMode = useState(props.mode);
  const [source, setSource] = useState(props.source);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (source !== props.source) {
      setSource(props.source);
    }
  }, [props.source]);

  function onLoadStart() {
    // console.log('Loading');
    setLoaded(true);
  }
  function onLoadEnd() {
    setLoaded(false);
  }

  return (
    <View
      style={
        source === Images.backgroundImage
          ? [
              props?.style,
              {alignItems: 'center', justifyContent: 'center', flex: 1},
            ]
          : props?.style
      }>
      <Image
      defaultSource={Images.backgroundImage}
        source={source}
        resizeMode={props.mode}
        style={source === Images.placeholder ? [props?.style] : [props?.style]}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={errorData => {
          let {error} = errorData.nativeEvent;
          console.log('error asyncImage => ', error);
          setLoaded(false);
          // set default image
          setSource(Images.placeholder);
        }}
      />
      {loaded ? (
        <View style={CommonStyle.positionCenterAsyncImage}>
          <ActivityIndicator color={Colors.descText} />
        </View>
      ) : null}
    </View>
  );
}

AsyncImage.propTypes = {
  source: PropTypes.any,
  mode: PropTypes.any,
  style: PropTypes.any,
  onLoadCall: PropTypes.func,
};

AsyncImage.defaultProps = {
  source: '',
  mode: 'cover',
  onLoadCall: () => {},
};
